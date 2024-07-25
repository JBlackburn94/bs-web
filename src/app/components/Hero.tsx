"use client";
import Image from "next/image";
import heroLogo from "../../../public/bs-logo.svg";
import heroImg from "../../../public/bsHero.webp";
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
    <section className="pt-[150px] flex flex-col items-center justify-center">
      <div className="absolute z-10 flex items-center justify-center flex-col">
        <Image
          src={heroLogo}
          alt="Beauty School Logo"
          className="w-[200px] md:w-[250px] lg:w-[400px]"
        />
        <span className="flex gap-[40px]">
          <Button text="Listen" path="#" />
          <Button text="Merch" path="#" />
        </span>
      </div>
      <Image
        src={heroImg}
        alt="A live photo of Beauty School"
        className="relative rounded-xl"
      />
    </section>
  );
}
