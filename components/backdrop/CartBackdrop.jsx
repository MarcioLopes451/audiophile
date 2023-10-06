import React from "react";

export default function CartBackdrop({ isOpen, onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed z-[30] top-0 left-0 w-full h-[200vh] bg-trans"
    ></div>
  );
}
