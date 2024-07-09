import { ButtonProps } from "@/types/types";
import React from "react";

export default function Button({ text, path }: ButtonProps) {
  return (
    <a
      href={path}
      className="bg-black p-4 rounded-lg text-xl uppercase hover:scale-105 transition-all duration-200 ease-in-out"
    >
      {text}
    </a>
  );
}
