"use client"

import React, { useRef, useEffect } from "react";

export default function BoatsModal({ isOpen, handleModal, children }: any) {

    const modalContentRef = useRef<HTMLDivElement  | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
          if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
            handleModal();
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        }
      }, [handleModal]);
    
      if (!isOpen) {
        return null;
      }
  
    return (
      <div className="modal fixed z-[999999] w-screen h-screen top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
        <div ref={modalContentRef} className="modal-content bg-white w-full h-auto md:w-3/4 lg:w-2/4 h-full max-h-[calc(100vh-2rem)] relative mx-2 overflow-y-auto">
          {/* <button type="button" className="z-30 w-5 right-8 top-2 absolute rounded-sm" onClick={() => handleModal()}>
            <XCircleIcon width={40} className="text-black"/>
          </button> */}
          {children}
        </div>
      </div>
    );
  };