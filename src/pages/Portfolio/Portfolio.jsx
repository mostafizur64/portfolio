import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const menus  = [
        {
            name:"All",
            path:'/',
            
        },
        {
            name:"Youtube",
            path:'/',
            
        },
        {
            name:"Vimeo",
            path:'/',
            
        },
        {
            name:"Soundcloud",
            path:'/',
            
        },
        {
            name:"Popup",
            path:'/',
            
        },
        {
            name:"Details",
            path:'/',
            
        },
    ]
    return (
        <div className='mt-12'>
            <div className='text-center space-y-4'>
                <h3 className='text-orange-500 text-3xl font-semibold'>Portfolio</h3>
                <h2 className='text-4xl font-extrabold'>My Amazing Works</h2> 
               
                    <ul className='flex items-center justify-center gap-4 font-semibold text-xl text-[#15295f]'>
                        <li><Link to={'path'}>All</Link></li>
                        <li><Link to={'path'}>Youtube</Link></li>
                        <li><Link to={'path'}>Vimeo</Link></li>
                        <li><Link to={'path'}>SoundCloud</Link></li>
                        <li><Link to={'path'}>Popup</Link></li>
                        <li><Link to={'path'}>Details</Link></li>
                    </ul>
                  

            </div>
        </div>
    );
};

export default Portfolio;