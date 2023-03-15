import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const ExperienceCard3 = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] 
    xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">

      <motion.img
      initial={{
         y: -100,
         opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ 
         opacity: 1,
         y: 0,
      }}
      className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      src="https://logodownload.org/wp-content/uploads/2016/09/fgv-logo-0.png" alt="" />

      <div className="px-0 md:px-10">
         {/* Função */}
         <h4 className="text-4xl font-light">Jovem Aprendiz</h4>
         {/* Nome da Empresa */}
         <p className="font-bold text-2xl mt-1">F.G.V (Fundação Getúlio Vargas)</p>
         <div>
         {/* Tecnologias Usadas */}
         </div>
         {/* Tempo */}
         <p className="uppercase py-5 text-gray-300">Maio 2018 - Setembro 2019</p>

         <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Gerenciamento de estoque do escritório</li>
            <li>Gerenciamento de estoque de TI</li>
            <li>Produção de arte para eventos internos</li>
         </ul>         
      </div>
    </article>
  )
}

export default ExperienceCard3