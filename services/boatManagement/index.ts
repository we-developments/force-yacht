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
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const db = getFirestore();
const storage = getStorage();

export const useBoatManagement = () => {
    const imagesToSave = [] as any;

    async function salvarImagens(Images: any) {
        return new Promise(async (resolve, reject) => {

            try {
                if (Images) {
                    for (const file in Images) {
                        const storageRef = ref(storage, `boats/${Images[file]?.name}`);
                        const snapshot = await uploadBytes(storageRef, Images[file]);
                        const downloadURL = await getDownloadURL(snapshot.ref);
                        imagesToSave.push(downloadURL);
                        console.log('link:', downloadURL);
                    }
                }
            } catch (error) {
                reject(error)
            }

            resolve(imagesToSave)
        })

    }

    const createBoatsDoc = async (data: any) => {
        return new Promise(async (resolve, reject) => {

            if (data.Images) {
                salvarImagens(data.Images).then(async (imagesToSave) => {
                    await addDoc(collection(db, "boatsRegistred"), {
                        YatchName: data.YatchName,
                        SizeBoat: data.SizeBoat,
                        Included: data.Included,
                        Capacity: data.Capacity,
                        EndIn: data.EndIn,
                        StartIn: data.StartIn,
                        ExitLocation: data.ExitLocation,
                        CreatedAt: Date.now(),
                        Images: imagesToSave || []
                    })
                        .then((res) => {
                            resolve("success");
                        })
                        .catch((erro) => {
                            reject(erro);
                        });

                    return;
                })
            }

        });
    };

    const getBoatDoc = async (id: any) => {
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

    const getBoatsDoc = async () => {
        try {
            const q = query(collection(db, "boatsRegistred"));
            const querySnap = await getDocs(q);
            const dataRes = [] as any;
            querySnap.forEach((doc) => {
                console.log(doc, 'doc')
                const dataReturn = {
                    Id: doc.id,
                    YatchName: doc.data().YatchName,
                    SizeBoat: doc.data().SizeBoat,
                    Included: doc.data().Included,
                    Capacity: doc.data().Capacity,
                    EndIn: doc.data().EndIn,
                    StartIn: doc.data().StartIn,
                    ExitLocation: doc.data().ExitLocation,
                    CreatedAt: doc.data().createdAt,
                    Images: doc.data().Images || []
                };
                dataRes.push(dataReturn);
            });
            return dataRes;
        } catch (error) {
            return error;
        }
    };

    const updateBoatDoc = async (files: any, data: any, indexsToDelet: any) => {
        return new Promise(async (resolve, reject) => {
            try {

                if (indexsToDelet) {
                    let newImagesToSave = data.images.filter((_: any, index: any) => !indexsToDelet.includes(index))
                    const refDoc = doc(db, "boatsRegistred", data.id);
                    await updateDoc(refDoc, { ...data, images: newImagesToSave });
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
                    await updateDoc(refDoc, { ...data, images: imagesToSave });

                } else {
                    const refDoc = doc(db, "boatsRegistred", data.id);
                    await updateDoc(refDoc, data);
                }
            } catch (error) {
                reject(error);
            }
        });
    };

    const deleteBoatDoc = async (id: any) => {
        return new Promise((resolve, reject) => {
            deleteDoc(doc(db, "boatsRegistred", id))
                .then(() => resolve("deleted"))
                .catch((error) => reject("error =>" + error));
        });
    };

    return {
        getBoatDoc,
        createBoatsDoc,
        getBoatsDoc,
        updateBoatDoc,
        deleteBoatDoc,
    };
};
