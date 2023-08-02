import React from 'react';
import { motion } from 'framer-motion';
import ProgressBar from "@ramonak/react-progress-bar";

const Experience = () => {
    const fadeInUpVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                ease: 'easeOut'
            }
        }
    };

    const fadeInDownVariants = {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                ease: 'easeOut'
            }
        }
    };

    return (
        <div className='mt-12 p-4'>
            <div className='text-center '>
                <h3 className='text-orange-500 font-semibold text-2xl'>Why Choose Me</h3>
                <h2 className='text-5xl text-[#15295f] font-extrabold'>My Experience Area</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8'>
                {/* left side  */}
                <div className='space-y-6'>
                    <motion.div
                        className='fade-up'
                        variants={fadeInUpVariants}
                        initial='hidden'
                        animate='visible'
                    >
                         <div className='flex justify-between'>
                            <h2 className='flex justify-between'>HTML</h2>
                            <h2>90%</h2>
                        </div>
                        <ProgressBar completed={90} bgColor='#fd6e0a' animateOnRender={true} />
                    </motion.div>
                    <motion.div
                        className='fade-up'
                        variants={fadeInUpVariants}
                        initial='hidden'
                        animate='visible'
                    >
                         <div className='flex justify-between'>
                            <h2 className='flex justify-between'>CSS</h2>
                            <h2>90%</h2>
                        </div>
                        <ProgressBar completed={90} bgColor='#fd6e0a' animateOnRender={true} />
                    </motion.div>
                    <motion.div
                        className='fade-up'
                        variants={fadeInUpVariants}
                        initial='hidden'
                        animate='visible'
                    >
                         <div className='flex justify-between'>
                            <h2 className='flex justify-between'>BOOTSTRAP</h2>
                            <h2>85%</h2>
                        </div>
                        <ProgressBar completed={85} bgColor='#fd6e0a' animateOnRender={true} />
                    </motion.div>
                    <motion.div
                        className='fade-up'
                        variants={fadeInUpVariants}
                        initial='hidden'
                        animate='visible'
                    >
                         <div className='flex justify-between'>
                            <h2 className='flex justify-between'>TAILWINDCSS</h2>
                            <h2>90%</h2>
                        </div>
                        <ProgressBar completed={90} bgColor='#fd6e0a' animateOnRender={true} />
                    </motion.div>
                    <motion.div
                        className='fade-up'
                        variants={fadeInUpVariants}
                        initial='hidden'
                        animate='visible'
                    >
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>REACT BOOTSTRAP</h2>
                            <h2>65%</h2>
                        </div>
                        <ProgressBar completed={65} bgColor='#fd6e0a' animateOnRender={true} />
                    </motion.div>
                    {/* Add more experience items here */}
                </div>

                {/* right side  */}
                <div className='space-y-6'>
                    <motion.div
                        className='fade-down'
                        variants={fadeInDownVariants}
                        initial='hidden'
                        animate='visible'
                    >
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>JAVASCRIPT</h2>
                            <h2>85%</h2>
                        </div>
                        <ProgressBar completed={85} bgColor='#fd6e0a' animateOnRender={true} />
                    </motion.div>
                    <motion.div
                        className='fade-down'
                        variants={fadeInDownVariants}
                        initial='hidden'
                        animate='visible'
                    >
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>REACT JS</h2>
                            <h2>90%</h2>
                        </div>
                        <ProgressBar completed={90} bgColor='#fd6e0a' animateOnRender={true} />
                    </motion.div>
                    <motion.div
                        className='fade-down'
                        variants={fadeInDownVariants}
                        initial='hidden'
                        animate='visible'
                    >
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>MONGODB</h2>
                            <h2>70%</h2>
                        </div>
                        <ProgressBar completed={70} bgColor='#fd6e0a' animateOnRender={true} />
                    </motion.div>
                    <motion.div
                        className='fade-down'
                        variants={fadeInDownVariants}
                        initial='hidden'
                        animate='visible'
                    >
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>EXPRESS</h2>
                            <h2>60%</h2>
                        </div>
                        <ProgressBar completed={60} bgColor='#fd6e0a' animateOnRender={true} />
                    </motion.div>
                    <motion.div
                        className='fade-down'
                        variants={fadeInDownVariants}
                        initial='hidden'
                        animate='visible'
                    >
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>NEXT JS</h2>
                            <h2>30%</h2>
                        </div>
                        <ProgressBar completed={30} bgColor='#fd6e0a' animateOnRender={true} />
                    </motion.div>
                    {/* Add more experience items here */}
                </div>
            </div>
        </div>
    );
};

export default Experience;
