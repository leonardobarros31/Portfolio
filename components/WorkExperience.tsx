import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'
import ExperienceCard2 from './ExperienceCard2'
import ExperienceCard3 from './ExperienceCard3'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experiência</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
      scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#537FE7]/80">
         {/* Atos */}
         <ExperienceCard />
         {/* Wintershall */}
         <ExperienceCard2 />
         {/* FGV */}
         <ExperienceCard3 />
      </div>
    </motion.div>
  )
}

export default WorkExperience