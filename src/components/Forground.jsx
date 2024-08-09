import React, { useRef } from 'react'
import Card from './Card'
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion"

export default function Forground() {

  const data = [
    {
        icon: <FaReact size={28} />,
        desc: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
        size: '.9mb',
        close: false,
    },
    {
        icon: <RiTailwindCssFill size={28} />,
        desc: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
        size: '.4mb',
        close: false,
        color: 'bg-blue-600'
    },
    {
        icon: <TbBrandFramerMotion size={28} />,
        desc: "Framer Motion. Complete documentation of the Framer Motion animation library. A production-ready motion library for React.",
        size: '.2mb',
        close: true,
        color: 'bg-blue-600'
    }
  ]

  const ref = useRef(null)

  return (
    <motion.div ref={ref} className='fixed z-[3] w-full h-full p-10 flex gap-5 flex-wrap'>
        {data.map((item, index) => (
            <Card key={index} reference={ref} data={item} />
        ) )}
    </motion.div>
  )
}
