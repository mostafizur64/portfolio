import React from 'react';
import { FaBattleNet, FaStackExchange, FaHeadphones } from 'react-icons/fa';
import { motion } from "framer-motion"
const ExperienceSupportServiceSection = () => {
    return (
        <div className='mt-12'>
            <div className='w-[90%] py-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:px-16 lg:bg-white lg:rounded-full drop-shadow-xl'>
                <div className='flex gap-4 justify-center items-center border-r-[1px] border-black sm:col-span-1 bg-white lg:bg-white lg:rounded-none rounded-full'>
                    <FaBattleNet className='bg-orange-500 text-white w-16 h-16 rounded-full p-4' />
                    <div className='ml-4'>
                        <h2 className='text-center md:text-left text-2xl font-extrabold text-[#15295f]'>8 years jobs</h2>
                        <p className='text-center md:text-left text-xl text-orange-500'>Experience</p>
                    </div>
                </div>

                <div className='flex gap-4 justify-center items-center border-r-[1px] border-black sm:col-span-1 bg-white lg:bg-white lg:rounded-none rounded-full'>
                    <FaStackExchange className='ml-6 bg-orange-500 text-white w-16 h-16 rounded-full p-4' />
                    <div className='ml-4'>
                        <h2 className='text-center md:text-left text-2xl font-extrabold text-[#15295f]'>500+ Projects</h2>
                        <p className='text-center md:text-left text-xl text-orange-500'>Completed</p>
                    </div>
                </div>

                <div className='flex gap-4 justify-center items-center sm:col-span-1 bg-white lg:bg-white lg:rounded-none rounded-full'>
                    <FaHeadphones className='mr-9 bg-orange-500 text-white w-16 h-16 rounded-full p-4' />
                    <div className='ml-4'>
                        <h2 className='text-center md:text-left text-2xl font-extrabold text-[#15295f]'>Support</h2>
                        <p className='text-center md:text-left text-xl text-orange-500'>Online 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSupportServiceSection;
