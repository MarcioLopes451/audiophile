import React from "react";

export default function Backdrop({ isOpen, onClose }) {
  return (
    <div
      onClick={onClose}
      className="absolute z-[30] left-0 top-20 w-full h-full bg-trans"
    ></div>
  );
}
