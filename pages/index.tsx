import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Image from 'next/image';
import Link from 'next/link';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#537FE7]/80"
    >
      <Head>
        <title>Leonardo Barros</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="projects" className="snap-start">
        <ContactMe />
      </section>

      {/* Button Hero */}
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
            className="h-10 w-10 rounded-full cursor-pointer"
             src="/Up-Arrow-PNG-Background-Image.png" alt="" />
          </div>
        </footer>
      </Link>
    </div>
  );
}
