"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

import Image from "next/image";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="
    fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    w-[95vw] max-w-6xl
    h-[90vh] max-h-[90vh]
    overflow-hidden
    rounded-xl border border-teal-600 shadow-md shadow-teal-700
    bg-white dark:bg-black/95 dark:text-gray-100
    p-3
    backdrop:bg-black/60 backdrop:backdrop-blur-sm
  "
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <Image src="/xmark.svg" alt="close" width={30} height={30} />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content"),
  );
};

export default Modal;
