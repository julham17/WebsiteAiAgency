import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'
import { delay } from 'motion/react'

const Hero = () => {
  return (
    <div
      id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
      <motion.div 
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.7}}
        viewport={{once: true}}
        className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
        <img className='w-20' src={assets.group_profile} alt="" />
        <p className='text-xs font-medium'>trusted by 10k+ people</p>
      </motion.div>
      <div className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl'>
        Turning Imagination <span className='bg-linear-to-r from-primary to-[#4d8cea] bg-clip-text'>Digital</span> Impact.
      </div>
      <motion.div
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 1}}
      viewport={{once: true}}
      className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>
        Creating meaningful connections and turning big ideas into interactive digital expreriences.
      </motion.div>
      
      <motion.div
      initial={{opacity: 0, scale: 0.9}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{duration: 0.6, delay: 1.5}}
      viewport={{once: true}}
      className='relative'>
        <img src={assets.hero_img} alt="" className='w-full max-w-6xl'/>
        <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden'/>
      </motion.div>

    </div>
  )
}

export default Hero
