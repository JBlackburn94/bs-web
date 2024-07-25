import { ButtonProps } from "@/types/types";
import React from "react";

export default function Button({ text, path }: ButtonProps) {
  return (
    <a
      href={path}
      className="bg-black md:text-lg p-3 lg:p-4 rounded-lg lg:ext-xl uppercase hover:scale-105 transition-all duration-200 ease-in-out"
    >
      {text}
    </a>
  );
}
