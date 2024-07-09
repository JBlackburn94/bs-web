"use client";
import Image from "next/image";
import heroLogo from "../../../public/bs-logo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Button from "./Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    gsap.to("#heroElement", {
      opacity: 1,
      delay: 0.5,
      duration: 1,
      stagger: 1,
    });
  });

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex items-center justify-center flex-col">
        <Image
          src={heroLogo}
          alt="Beauty School Logo"
          className="min-w-[350px]"
        />
        <span className="flex gap-[20px]">
          <Button text="Listen" path="#" />
          <Button text="Merch" path="#" />
        </span>
      </div>
    </section>
  );
}
