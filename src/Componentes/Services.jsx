import React from 'react'
import { motion } from "framer-motion";
import assets from '../assets/assets'
import Title from './Title'
import ServicesCard from './ServicesCard'
import { fadeIn, staggerContainer, staggerItem } from "../animations/variants.js";

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerfull digital solutions that connect,engage...',
            icons: assets.ads_icon
        },
        {
            title: 'Content marketing',
            description: 'We help you execute your plan and deliver results.',
            icons: assets.marketing_icon
        },
        {
            title: 'Content writing',
            description: 'We help to create a marketing  strategy  that drives results.',
            icons: assets.content_icon
        },

        {
            title: 'Social media',
            description: 'We help you build a Strong Social media presence and engage with your audience',
            icons: assets.social_icon
        }
    ]
    return (
        <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30  text-gray-700 dark:text-white/80'>
            <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

            <Title title='How can we help?' description='From strategy to execution, we craft digital solutions that move your business forward.' />

            <motion.div
                variants={{
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                }}
                viewport={{ once: false, margin: "-50px" }}
                className='flex flex-col md:grid grid-cols-2'>
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                        <ServicesCard service={service} index={index} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Services