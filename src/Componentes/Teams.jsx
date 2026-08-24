import React from 'react'
import { motion } from "framer-motion";
import Title from './Title'
import { teamData } from '../assets/assets'

const Teams = () => {
    return (
        <div className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-7 pt-30 text-gray-800 dark:text-white'>
            <Title title='Meet the team' description='A passionate team of digital experts dedicated of your brands sucess.' />


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 w-full max-w-4xl">
                {
                    teamData.map((team, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            whileHover={{ scale: 1.05, y: -3 }}
                            className='flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm px-4 py-2 hover:shadow-md transition-all'>
                            <motion.img
                                whileHover={{ scale: 1.1, borderColor: "#5044E5" }}
                                src={team.image} alt={team.name}
                                className='w-10 h-10 rounded-full object-cover border border-purple-400' />
                            <div className='text-left'>
                                <h3 className='font-semibold text-sm text-gray-800 dark:text-white leading-tight'>{team.name}</h3>
                                <p className='text-xs text-gray-500 dark:text-gray-400 leading-tight'>{team.title}</p>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Teams