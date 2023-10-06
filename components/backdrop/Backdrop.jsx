import React from "react";

export default function Backdrop({ isOpen, onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed z-[30] top-20 left-0 w-full h-full bg-trans"
    ></div>
  );
}
