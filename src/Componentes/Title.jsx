import React from 'react'
import { motion } from "framer-motion";

const Title = ({ title, description }) => {
    return (
        <>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className='text-3xl sm:text-5xl font-medium'>{title}</motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>{description}</motion.p>
        </>
    )
}

export default Title