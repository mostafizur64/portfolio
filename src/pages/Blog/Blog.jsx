import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../../components/Modal';
const Blog = () => {
    const [modal, setModal] = useState({})
    console.log('modal is ', modal)
    console.log('done')
    const data = [
        {
            id: 1,
            image: 'https://i.ibb.co/6m7LdfP/web-design-best-practices-1024x512.jpg',
            category: 'UI/UX',
            title: 'Zero UI is a style that’s been looming in the shadow for some time but is really starting to emerge now. The idea is easy to understand — the less the user has to think about the interface, the better and more natural it feels. This article explains the specifics.'
        },
        {
            id: 2,
            image: 'https://i.ibb.co/3C6TQYb/Website-Design-new.jpg',
            category: 'Web Development',
            title: 'Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.',
        },
        {
            id: 3,
            image: 'https://i.ibb.co/C2SJBpz/web-design-workflow-blog.png',
            category: 'Web Design',
            title: 'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers;',
        },
    ];
    console.log(data)
    return (
        <div id='blogs' className='mt-12'>
            <div className='text-center'>
                <h3 className='text-2xl font-semibold text-orange-500'>From my Blog</h3>
                <h2 className='text-4xl font-extrabold mt-4'>Our Recent Updates, Blog</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8'>
                {data.map((item) => (
                    <motion.div
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
                        className='bg-orange-500 p-2 cursor-pointer'
                    >


                        <label
                            onClick={() => setModal(item)} htmlFor="my_modal_6"
                            key={item.id}

                        >
                          
                            <img src={item.image} alt='' />
                            <h3 className='text-2xl text-center mt-4'>{item.category}</h3>
                            <h2 className='p-4'>{item.title}....</h2>
                            <div></div>
                        </label>
                    </motion.div>
                ))}



                <Modal modal={modal} />
            </div>
        </div>
    );
};
export default Blog;
