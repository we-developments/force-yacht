import React, { useEffect } from "react";
export interface ModalProps {
    isOpen?: boolean;
    children?: React.ReactNode;
    stylesContainer?: any;
    stylesContent?: any;
    handleModal: (item?: any) => void;
}

export default function Modal({ isOpen, children, stylesContainer, stylesContent, handleModal }: ModalProps) {

    const handleModalOverlay = (event: any) => {
        if (event.target === event.currentTarget) {
            handleModal();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape' && isOpen) {
                handleModal()
            }
        })
    }, [isOpen])

    return (
        <>
            {
                isOpen && (
                    <div className={`overlay-modal py-3.5 fixed z-[9999] top-0 left-0 w-screen h-screen overflow-y-auto bg-black/80 flex justify-center items-center ${stylesContainer}`} onClick={handleModalOverlay}>
                        <div className={`bg-white transition all ease-in delay-100 rounded-lg flex flex-col w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12 max-h-screen shadow-md ${stylesContent}`}>
                            {children}
                        </div>
                    </div>
                )
            }
        </>
    )
}
