import React, { useState } from 'react';
import Modal from '../../components/Modal';

const Blog = () => {
 
    return (

        <div className='mt-12'>
            <div className='text-center'>
                <h3 className='text-2xl font-semibold text-orange-500'>From my Blog</h3>
                <h2 className='text-4xl font-extrabold mt-4'>Our Recent Updates, Blog</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8'>
                <div onClick={() => window.my_modal_1.showModal()} className='bg-orange-500 p-2 cursor-pointer'>
                    <img src="https://i.ibb.co/6m7LdfP/web-design-best-practices-1024x512.jpg" alt="" />
                    <h3>UI/UX</h3>
                    <h2>User interface design or user interface engineering</h2>
                </div>
                <div>
                    <img src="https://i.ibb.co/3C6TQYb/Website-Design-new.jpg" alt="" />
                    <h3>UI/UX</h3>
                    <h2>User interface design or user interface engineering</h2>
                </div>
                <div>
                    <img src="https://i.ibb.co/C2SJBpz/web-design-workflow-blog.png" alt="" />
                    <h3>UI/UX</h3>
                    <h2>User interface design or user interface engineering</h2>
                </div>
                <div></div>
                <div></div>
            </div>

            <Modal />
        </div>

    );
};

export default Blog;
