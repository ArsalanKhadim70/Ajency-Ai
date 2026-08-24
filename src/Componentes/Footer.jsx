import React from 'react'
import { motion } from "framer-motion";
import assets from '../assets/assets'

const Footer = ({ theme, setTheme }) => {
    return (

        <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
            {/* footer top */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className='flex justify-between lg:items-center max-lg:flex-col gap-10'>

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="" className='w-32 sm:w-44' />
                    <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">From strategy to execution, we craft digital solutions that move your business forward.</p>

                    <ul className='flex gap-8'>
                        <li><motion.a whileHover={{ x: 3, color: "#5044E5" }} className='hover:text-primary' href="#hero">Home</motion.a></li>
                        <li><motion.a whileHover={{ x: 3, color: "#5044E5" }} className='hover:text-primary' href="#services">Services</motion.a></li>
                        <li><motion.a whileHover={{ x: 3, color: "#5044E5" }} className='hover:text-primary' href="#our-work">Our Work</motion.a></li>
                        <li><motion.a whileHover={{ x: 3, color: "#5044E5" }} className='hover:text-primary' href="#contact-us">Contact us</motion.a></li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-gray-600 dark:text-gray-400">
                    <h3 className='font-semibold'>Subscribe to our newsletter</h3>
                    <p className='text-sm mt-2 mb-6'>The latest news,articles, and resources, send to inbox weekly</p>


                    <div className='flex gap-2 text-sm'>
                        <input type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500' />
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(80,68,229,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-primary text-white rounded px-6'>Subcribe</motion.button>
                    </div>

                </motion.div>

            </motion.div>

            <hr className='border-gray-300 dark:border-gray-600 my-6' />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='pb-2 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
                <p>Copyright 2026 @ GreetStack - All Right Reserved. </p>
                <div className='flex items-center justify-between gap-4'>
                    <motion.a whileHover={{ scale: 1.2, y: -3 }} href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={assets.facebook_icon} alt="" /></motion.a>
                    <motion.a whileHover={{ scale: 1.2, y: -3 }} href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={assets.twitter_icon} alt="" /></motion.a>
                    <motion.a whileHover={{ scale: 1.2, y: -3 }} href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={assets.instagram_icon} alt="" /></motion.a>
                    <motion.a whileHover={{ scale: 1.2, y: -3 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={assets.linkedin_icon} alt="" /></motion.a>
                </div>
            </motion.div>
        </div>
    )
}

export default Footer