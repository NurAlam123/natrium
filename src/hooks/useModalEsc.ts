"use client";

import { useEffect } from "react";

const useModalEsc = (closeModal: () => void, showModal: boolean) => {
  useEffect(() => {
    const closeModalOnEsc = (e: KeyboardEvent) => {
      if (!(e.key === "Escape")) return;
      closeModal();
    };

    if (showModal) window.addEventListener("keydown", closeModalOnEsc);
    else window.removeEventListener("keydown", closeModalOnEsc);

    return () => window.removeEventListener("keydown", closeModalOnEsc);
  }, [closeModal, showModal]);
};

export default useModalEsc;
