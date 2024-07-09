"use client";
import { useState } from "react";
import Image from "next/image";
import heroImg from "../../../public/bs-logo.svg";
import { navLinks } from "../constants/constants";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [nav, setNav] = useState(false);
  useGSAP(() => {
    gsap.to("#navElement", {
      duration: 1,
      opacity: 1,
      scale: 1,
      stagger: 0.2,
    });
  });

  return (
    <header className="select-none">
      <nav className="flex items-center justify-between">
        <div id="navElement" className="opacity-0">
          <Image src={heroImg} alt="Beauty School Logo" />
        </div>
        <div
          className="lg:flex gap-[40px] text-[20px] hidden opacity-0"
          id="navElement"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.path}
              className="uppercase hover:scale-105 transition-all duration-200 ease-in-out"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="lg:flex gap-[20px] hidden opacity-0" id="navElement">
          <BsTwitterX className="text-[28px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer" />
          <FaTiktok className="text-[28px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer" />
          <TfiYoutube className="text-[28px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer" />
          <IoLogoInstagram className="text-[28px] hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer" />
        </div>
        {nav ? (
          <FaTimes
            className="text-[28px] lg:hidden z-10"
            onClick={() => setNav(!nav)}
          />
        ) : (
          <MdMenu
            className="text-[28px] lg:hidden z-10"
            onClick={() => setNav(!nav)}
            id="navElement"
          />
        )}
        {nav && (
          <div className="w-1/2 h-screen bg-black right-0 top-0 absolute flex items-center justify-center flex-col gap-[40px]">
            {navLinks.map((link) => (
              <a key={link.id} href={link.path} className="uppercase">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
