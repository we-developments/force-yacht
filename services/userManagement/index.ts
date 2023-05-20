import {
    getFirestore,
    addDoc,
    collection,
    query,
    where,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore";
  import { getStorage, ref, uploadBytes } from "firebase/storage";
  
  const db = getFirestore();
  const storage = getStorage();
  
  export const useUserManagement = () => {
    const createUserDoc = async (data: any) => {
      return new Promise(async (resolve, reject) => {
        if (data.file) {
          const storageRef = ref(storage, `profilepic/${data.file?.name}`);
          uploadBytes(storageRef, data.file).then(async (downloadUrl) => {
            await addDoc(collection(db, "usersRegistred"), {
              id: data.id,
              name: data.name,
              email: data.email,
              userImg: downloadUrl,
              isAdmin: data.isAdmin || false,
              createdAt: Date.now(),
            })
              .then((res) => {
                console.log(res.id, "Imagem registrada com sucesso!");
                resolve("success");
              })
              .catch((erro) => {
                reject(erro);
              });
          });
          return;
        }
  
        await addDoc(collection(db, "usersRegistred"), {
          id: data.id,
          name: data.name,
          email: data.email,
          userImg: null,
          isAdmin: data.isAdmin || false,
          createdAt: Date.now(),
        })
          .then((res) => {
            console.log(res.id, "Usuario registrado sem imagem!");
            resolve("success");
          })
          .catch((erro) => {
            console.log(erro);
            reject(erro);
          });
      });
    };
  
    const getUserDoc = async (id: any) => {
      try {
        const q = query(collection(db, "usersRegistred"), where("id", "==", id));
        const querySnap = await getDocs(q);
        const dataRes = [] as any;
        querySnap.forEach((doc) => {
          const dataReturn = {
            id: doc.data().id,
            name: doc.data().name,
            email: doc.data().email,
            userImg: doc.data().userImg || null,
            isAdmin: doc.data().isAdmin,
            createdAt: doc.data().createdAt,
          };
          dataRes.push(dataReturn);
        });
        return dataRes;
      } catch (error) {
        return error;
      }
    };
  
    const updateUserDoc = async (file: any, data: any) => {
      return new Promise(async (resolve, reject) => {
        try {
          if (file) {
            const storageRef = ref(storage, `profilepic/${file?.name}`);
            uploadBytes(storageRef, file).then(async (downloadUrl) => {
              const refDoc = doc(db, "usersRegistred", data.id);
              await updateDoc(refDoc, {
                userImg: downloadUrl,
              }).then((res) => {
                resolve("success");
              });
            });
          } else {
            const refDoc = doc(db, "usersRegistred", data.id);
            await updateDoc(refDoc, data);
          }
        } catch (error) {
          reject(error);
        }
      });
    };
  
    const deleteUserDoc = async (id: any) => {
      return new Promise((resolve, reject) => {
        deleteDoc(doc(db, "usersRegistred", id))
          .then(() => resolve("deleted"))
          .catch((error) => reject("error =>" + error));
      });
    };
  
    return {
      createUserDoc,
      getUserDoc,
      updateUserDoc,
      deleteUserDoc,
    };
  };
  