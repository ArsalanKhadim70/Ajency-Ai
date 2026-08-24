import React from 'react'
import { motion } from "framer-motion";
import { company_logos } from '../assets/assets'
import { fadeIn, staggerContainer, staggerItem } from "../animations/variants.js";

const TrustedBy = ({ theme, setTheme }) => {
    return (
        <motion.div
            {...fadeIn}
            className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80'>
            <h3 className='font-semibold'>Trusted by Leading Companies </h3>

            <motion.div
                variants={{
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                }}
                viewport={{ once: true }}
                className="flex items-center justify-center flex-wrap gap-10 m-4">
                {
                    company_logos.map((logo, index) => (
                        <motion.img
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.15, filter: "drop-shadow(0 0 8px rgba(80,68,229,0.4))" }}
                            src={logo} alt=""
                            className='max-h-5 sm:max-h-6 dark:drop-shadow-xl cursor-pointer' />
                    ))}
            </motion.div>
        </motion.div>
    )
}

export default TrustedBy