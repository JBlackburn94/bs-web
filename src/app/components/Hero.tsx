import Image from "next/image";
import heroImg from "../../../public/bs-logo.svg";

export default function Hero() {
  return (
    <section className="h-[4000px] flex flex-col pt-[150px]">
      <div className="flex items-center justify-center">
        <Image src={heroImg} alt="Beauty School Logo" />
      </div>
    </section>
  );
}
