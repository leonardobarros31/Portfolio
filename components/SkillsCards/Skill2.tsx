import React from 'react'
import { motion } from "framer-motion"

type Props = {
   directionLeft?: boolean;
}

const Skill2 = (directionLeft: Props) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
      initial={{
         x: directionLeft ? -200 : 200,
         opacity: 0,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
      className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32
      xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
       ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
       rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">Tailwind<br />CSS</p>
        </div>
      </div>
    </div>
  )
}

export default Skill2