import React from 'react'
import { motion } from "framer-motion";

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
     className="flex flex-col realative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
         Sobre
      </h3>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Um <span className="underline decoration-[#537FE7]/50">pouco</span> sobre mim</h4>
        <p className="text-base">
        Previsão de formação em Ciência da Computação, com 3 anos 
        de experiência de trabalho na area de suporte procurando 
        uma posição de nível de entrada em Desenvolvimento. 
        Como experiência prática inclui assistência em Trabalho de projeto de TI, gerenciamento 
        de rede local, treinamento de usuários (incluindo vídeos didaticos) e
        suporte local na Wintershall Dea Brasil.
        A experiencia mais recente foi como Analista de Suporte Jr na ATOS onde foi dada
        continuidade do trabalho na Wintershall Dea Brasil, e logo após atuei como coordenador de Rollout
        no ONS, as principais atividades eram gerenciar a equipe e entrar em contato com usuários para efetuar
        a atividade de rollout.
        </p>
      </div>
    </motion.div>
  )
}

export default About