import React, { useState } from 'react'
import { motion } from "framer-motion";
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

const ContactUs = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "e573c4b1-ef6e-49fe-bebb-6face1b148ba");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        //  toast (data.success ? "Success!" : "Error");
        if (data.success) {
            toast.success("Success!");
        } else {
            toast.error("Error");
        }
    };


    return (
        <div id='#contact-us' className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-7 pt-30 text-gray-700 dark:text-white'>
            <Title title='Reach out to us' description='From stratage to execution,we craft digital solutions that move your business forward.' />

            <motion.form
                onSubmit={onSubmit}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.3 }}>
                    <p className='mb-2 text-sm font-medium'>Your name</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.person_icon} alt="" />
                        <input type="text" placeholder='Enter your name ' name="name" className='w-full p-3 text-sm outline-none' required />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.4 }}>
                    <p className='mb-2 text-sm font-medium'>Your email</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.email_icon} alt="" />
                        <input type="email" placeholder='Enter your email ' name="email" className='w-full p-3 text-sm outline-none' required />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>
                    <textarea rows={8} placeholder='Enter your message' name="message" className='w-full p-3 text-sm  outline-none rounded-lg border border-gray-300 dark:border-gray-600' required />
                </motion.div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(80,68,229,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                    submit <img src={assets.arrow_icon} alt="" className='w-4' />
                </motion.button>

            </motion.form>



        </div>
    )
}

export default ContactUs