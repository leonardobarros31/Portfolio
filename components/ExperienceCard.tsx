import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const ExperienceCard = (props: Props) => {
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
      src="https://logos-world.net/wp-content/uploads/2022/05/Atos-Emblem.png" alt="" />

      <div className="px-0 md:px-10">
         <h4 className="text-4xl font-light">Analista de Suporte Jr</h4>
         <p className="font-bold text-2xl mt-1">Atos Brasil Ltda</p>
         <div>
         {/* Tecnologias Usadas */}
         </div>
         <p className="uppercase py-5 text-gray-300">Janeiro 2022 - Fevereiro 2023</p>

         <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Gerenciamento de incidentes e solicitações no ServiceNow</li>
            <li>Suporte no local para ações de desmontagem do Data Center</li>
            <li>Manter o atendimento dentro dos SLAs definidos com os Fornecedores</li>
            <li>Gerenciamente de equipe com report diário para cliente</li>
         </ul>         
      </div>
    </article>
  )
}

export default ExperienceCard