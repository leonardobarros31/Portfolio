import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import profilePic from "../public/me.jpg";
import Image from "next/image";
import Link from "next/link";
import { PaperClipIcon } from "@heroicons/react/24/solid";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Olá, me chamo Leonardo Barros",
      "SneakerHead.tsx",
      "<QueAdoraCodar />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={profilePic}
        alt="Foto do autor"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Desenvolvedor Front-End
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#537FE7" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">Sobre</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experiência</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Habilidades</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projetos</button>
          </Link>
          <Link href="/LEONARDO_DOS_SANTOS_DE_BARROS.pdf">
            <button className="heroButton">
              <div className="flex items-center">
                <PaperClipIcon className="h-4 w-4 mr-1 text-gray-500" />
                <span>Meu Currículo</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
