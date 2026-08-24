import React from 'react'
import { motion } from "framer-motion";
import assets from '../assets/assets'
import { fadeIn, fadeInUp, fadeInDown, scaleIn, floatAnimation } from "../animations/variants.js";

function Hero() {
    return (
        <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

            <motion.div
                {...fadeInDown}
                className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
                <img className='w-20' src={assets.group_profile} alt="" />
                <p className='text-xl font-medium'>Trusted by 10k+ people</p>
            </motion.div>

            <motion.h1
                {...fadeInUp}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className='text-4x1 sm:text-5x1 md:text-6x1 xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>
                Turning imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>digital</span> impact.
            </motion.h1>


            <motion.p
                {...fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3 ">
                Creating meaningful connections and turning big ideas into interactive digital experiences.
            </motion.p>

            <motion.div
                {...scaleIn}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="relative">
                <motion.img
                    animate={floatAnimation}
                    src={assets.hero_img} alt="" className='w-full max-w-6xl' />
                <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden' />
            </motion.div>

        </div>
    )
}

export default Hero