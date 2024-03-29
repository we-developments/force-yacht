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
    orderBy,
  } from "firebase/firestore";
  import { getStorage, ref, uploadBytes } from "firebase/storage";
  
  const db = getFirestore();
  const storage = getStorage();
  
  export const useUserManagement = () => {
    const createUserDoc = async (data: any) => {
      return new Promise(async (resolve, reject) => {
  
        await addDoc(collection(db, "usersRegistred"), {
          name: data.name,
          email: data.email,
          phone: data.phone,
          createdAt: Date.now(),
        })
          .then((res) => {
            resolve("success");
          })
          .catch((erro) => {
            console.log(erro);
            reject(erro);
          });
      });
    };
    
    const getUserDoc = async (email: string) => {
        return new Promise(async (resolve, reject) => {
          try {
            const q = query(collection(db, "usersRegistred"), where("email", "==", email));
            const querySnap = await getDocs(q);
            const dataRes = [] as any;
            querySnap.forEach((doc) => {
              const dataReturn = {
                id: doc.id,
                name: doc.data().name,
                email: doc.data().email,
                phone: doc.data().phone,
                createdAt: doc.data().createdAt,
              };
              dataRes.push(dataReturn);
            });
            resolve(dataRes)
            return dataRes;
          } catch (error) {
            return error;
          }
        })
    };

    const getUsersDoc = async () => {
      try {
        const q = query(collection(db, "usersRegistred"), orderBy('createdAt', 'desc'));
        const querySnap = await getDocs(q);
        const dataRes = [] as any;
        querySnap.forEach((doc) => {
          const dataReturn = {
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            phone: doc.data().phone,
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
      getUsersDoc,
      updateUserDoc,
      deleteUserDoc,
    };
  };
  