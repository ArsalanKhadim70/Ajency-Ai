import React, { useState } from 'react'
import { motion } from "framer-motion";

const ServicesCard = ({ service, index }) => {
    const [postion, setPostion] = useState({})

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPostion({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10'>

            <div className='pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70' style={{ top: postion.y - 150, left: postion.x - 150 }} />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>

                <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                    <img src={service.icons} alt="" className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' />
                </motion.div>

                <div className="flex-1">
                    <h3 className='font-bold'>{service.title}</h3>
                    <p className='text-sm mt-2'>{service.description}</p>
                </div>
            </motion.div>


        </motion.div>
    )
}

export default ServicesCard