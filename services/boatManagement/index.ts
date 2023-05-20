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
            if (data.files) {
                let imagesToSave = [] as any
                data.files.map(async (file: any) => {
                    const storageRef = ref(storage, `boats/${file?.name}`);
                    uploadBytes(storageRef, file).then((downloadUrl) => {
                        imagesToSave.push(downloadUrl)
                    });
                })

                await addDoc(collection(db, "boatsRegistred"), {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    images: imagesToSave,
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

                return;
            }

            await addDoc(collection(db, "boatsRegistred"), {
                id: data.id,
                name: data.name,
                email: data.email,
                images: [],
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
            const q = query(collection(db, "boatsRegistred"), where("id", "==", id));
            const querySnap = await getDocs(q);
            const dataRes = [] as any;
            querySnap.forEach((doc) => {
                const dataReturn = {
                    id: doc.data().id,
                    name: doc.data().name,
                    email: doc.data().email,
                    images: doc.data().userImg || [],
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

    const updateUserDoc = async (files: any, data: any, indexsToDelet: any) => {
        return new Promise(async (resolve, reject) => {
            try {

                if(indexsToDelet){
                    let newImagesToSave = data.images.filter((_: any, index: any) => !indexsToDelet.includes(index))
                    const refDoc = doc(db, "boatsRegistred", data.id);
                    await updateDoc(refDoc, {...data, images: newImagesToSave});
                }

                if (files) {
                    let imagesToSave = [...data.images] as any
                    files.map(async (file: any) => {
                        const storageRef = ref(storage, `boats/${file?.name}`);
                        uploadBytes(storageRef, file).then((downloadUrl) => {
                            imagesToSave.push(downloadUrl)
                        });
                    })

                    const refDoc = doc(db, "boatsRegistred", data.id);
                    await updateDoc(refDoc, {...data, images: imagesToSave});

                } else {
                    const refDoc = doc(db, "boatsRegistred", data.id);
                    await updateDoc(refDoc, data);
                }
            } catch (error) {
                reject(error);
            }
        });
    };

    const deleteUserDoc = async (id: any) => {
        return new Promise((resolve, reject) => {
            deleteDoc(doc(db, "boatsRegistred", id))
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
