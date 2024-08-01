import React from "react";

interface IProp {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
export default function Button({ children, className = "", onClick }: IProp) {
  return (
    <button
      onClick={onClick}
      className={`${className} cursor-pointer rounded-lg bg-yellow-300 px-5 py-3 text-2xl font-bold text-slate-700 duration-300 hover:bg-yellow-400`}
    >
      {children}
    </button>
  );
}
