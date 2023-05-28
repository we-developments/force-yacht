import { db } from "@/api";
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
    arrayRemove,
    FieldValue,
    writeBatch,
    arrayUnion
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { update } from "react-spring";


const storage = getStorage();


export const useBoatManagement = () => {

    async function salvarImagens(Images: any) {
        return new Promise(async (resolve, reject) => {
            const imagesToSave = [] as any;

            try {
                if (Images) {
                    for (const file in Images) {
                        let position = Number(file)
                        if (position > Images.length || !Number.isNaN(position)) {
                            const storageRef = ref(storage, `boats/${Images[file]?.name}`);
                            const snapshot = await uploadBytes(storageRef, Images[file]);
                            const downloadURL = await getDownloadURL(snapshot.ref);
                            imagesToSave.push(downloadURL);
                        }
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
                        DestinyLocation: data.DestinyLocation,
                        Description: data.Description,
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
                    Id: doc.id,
                    YatchName: doc.data().YatchName,
                    SizeBoat: doc.data().SizeBoat,
                    Included: doc.data().Included,
                    Capacity: doc.data().Capacity,
                    EndIn: doc.data().EndIn,
                    StartIn: doc.data().StartIn,
                    ExitLocation: doc.data().ExitLocation,
                    DestinyLocation: doc.data().DestinyLocation,
                    Description: doc.data().Description,
                    CreatedAt: doc.data().CreatedAt,
                    Images: doc.data().Images || []
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
                const dataReturn = {
                    Id: doc.id,
                    YatchName: doc.data().YatchName,
                    SizeBoat: doc.data().SizeBoat,
                    Included: doc.data().Included,
                    Capacity: doc.data().Capacity,
                    EndIn: doc.data().EndIn,
                    StartIn: doc.data().StartIn,
                    ExitLocation: doc.data().ExitLocation,
                    DestinyLocation: doc.data().DestinyLocation,
                    Description: doc.data().Description,
                    CreatedAt: doc.data().CreatedAt,
                    Images: doc.data().Images || []
                };
                dataRes.push(dataReturn);
            });
            return dataRes;
        } catch (error) {
            return error;
        }
    };

    const updateBoatDoc = async (files: any, data: any, ImagesToDelete?: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                const refDoc = doc(db, "boatsRegistred", data.Id);

                if (ImagesToDelete && ImagesToDelete.length > 0) {
                    updateDoc(refDoc, {Images: '' })
                }

                if (files) {
                    let imagesToSave = [...data.Images] as any
                    salvarImagens(files).then(async (newImagesToSave: any) => {
                        imagesToSave.push(...newImagesToSave)
                        await updateDoc(refDoc, { ...data, Images: imagesToSave });
                        resolve('success')
                    }).catch(error => reject(error))



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
