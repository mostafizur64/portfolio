import React, { useState } from 'react';
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
            title: 'User interface design or user interface engineering',
        },
        {
            id: 2,
            image: 'https://i.ibb.co/3C6TQYb/Website-Design-new.jpg',
            category: 'UI/UX',
            title: 'User interface design or user interface engineering',
        },
        {
            id: 3,
            image: 'https://i.ibb.co/C2SJBpz/web-design-workflow-blog.png',
            category: 'UI/UX',
            title: 'User interface design or user interface engineering',
        },
    ];
    console.log(data)
    return (
        <div className='mt-12'>
            <div className='text-center'>
                <h3 className='text-2xl font-semibold text-orange-500'>From my Blog</h3>
                <h2 className='text-4xl font-extrabold mt-4'>Our Recent Updates, Blog</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8'>
                {data.map((item) => (
                    <label
                        onClick={() => setModal(item)} htmlFor="my_modal_6"
                        key={item.id}

                        className='bg-orange-500 p-2 cursor-pointer' >
                        {/* <label    className="btn">open modal</label> */}

                        <img src={item.image} alt='' />
                        <h3>{item.category}</h3>
                        <h2>{item.title}....</h2>
                        <div></div>
                    </label>
                ))}
                <Modal modal={modal} />
            </div>
        </div>
    );
};
export default Blog;
