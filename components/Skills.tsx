import React from 'react'
import { motion } from "framer-motion"
import Skill1 from './SkillsCards/Skill1'
import Skill2 from './SkillsCards/Skill2'
import Skill3 from './SkillsCards/Skill3'
import Skill4 from './SkillsCards/Skill4'
import Skill5 from './SkillsCards/Skill5'
import Skill6 from './SkillsCards/Skill6'
import Skill7 from './SkillsCards/Skill7'
import Skill8 from './SkillsCards/Skill8'


type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Habilidades</h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Passe o mouse sobre uma habilidade para saber o nome</h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill1 />
        <Skill2 />
        <Skill3 />
        <Skill4 />
        <Skill5 />
        <Skill6 />
        <Skill7 />
        <Skill8 />
      </div>

    </motion.div>

    
  )
}

export default Skills