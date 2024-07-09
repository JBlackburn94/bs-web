import Image from "next/image";
import heroImg from "../../../public/bs-logo.svg";
import { navLinks } from "../constants/constants";

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <div>
          <Image src={heroImg} alt="Beauty School Logo" />
        </div>
        <div className="flex gap-[40px]">
          {navLinks.map((link) => (
            <a key={link.id} href={link.path}>
              {link.name}
            </a>
          ))}
        </div>
        <div></div>
      </nav>
    </header>
  );
}
