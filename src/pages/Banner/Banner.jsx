import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../components/Container';
import CV from '../Banner/CV Of Mostafizur Rahman...pdf'
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Banner = () => {
  const [text] = useTypewriter({
    words: ["Front-end Web Developer", "MERN Developer", "Web Designer"],
    loop: false,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div className='p-4'>
      <Container className="py-12">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-28 justify-center items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            {/* left site for banner  */}
            <h3 className='text-orange-500 font-extrabold text-3xl '>Hi, I'm</h3>
            <h2 className='text-[#15295f] font-extrabold text-3xl lg:text-7xl mt-2'>Mostafizur Rahman</h2>
            <h3 className="uppercase mt-4 text-xl md:text-3xl lg:text-5xl text-orange-500  font-extrabold font-mono  text-color pr-5">
              I'm a <span className="text-[#15295f]">{text}</span>
              <Cursor cursorColor="red" />
            </h3>
            <p className='w-[100%] text-gray-500 text-xl mt-4'>I'm Md Mostafizur Rahman,a Front-end Developer . i develop full blown web applications using the MERN stack , but i mostly love working in the front end using tailwind css and react . One od my favorite activities is to educated and help others in the field to fulfill their potential and depend my knowledge. You can find more about this on my resume.</p>
            <div className='flex gap-4 mt-12'>
              <a href={CV} download>
                <button className="btn btn-outline rounded-full hover:text-orange-500 hover:bg-white hover:border-orange-400 border-2 bg-orange-500 px-8 text-white">Download CV</button>
              </a>
              <a href='#contacts' className="btn bg-white text-orange-500 hover:bg-orange-500 hover:text-white rounded-full px-8 border-2 border-orange-400">Contact</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            {/* right side for Banner  */}
            <img style={{borderRadius: '0 200px 200px 200px'}}  className='w-full lg:w-96 ' src="https://i.ibb.co/3CqFXC5/Mostafizur-Rahman.jpg" alt="mostafizur rahman" />
            <div className='bg-red-500'></div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
