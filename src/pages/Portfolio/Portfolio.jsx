import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All'); // State to track the selected category

    // Sample JSON data
    const jsonData = [
        { id: 1, image: 'https://i.ibb.co/CbJ6YD4/best-20-web-development-blogs.png', category: 'All' },
        { id: 2, image: 'https://i.ibb.co/vvwgS15/bestwebdesign.png', category: 'Web Design' },
        { id: 3, image: 'https://i.ibb.co/FnYJyXC/0-4-Dp-FVUP-Vfkhz-SIL.png', category: 'Web Design' },
        { id: 4, image: 'https://i.ibb.co/Snpgzh6/Future-of-Web-Designing.jpg', category: 'Web Design' },
        { id: 5, image: 'https://i.ibb.co/n1B1S9D/top11.png', category: 'Web Development' },
        { id: 6, image: 'https://i.ibb.co/1RD8mDL/web-development1.png', category: 'Web Development' },
        { id: 7, image: 'https://i.ibb.co/4sYhqsS/images.png', category: 'Web Development' },
        { id: 8, image: 'https://i.ibb.co/4TQVxch/How-Important-is-UI-UX-Design-in-an-App-Development-Process.png', category: 'UI/UX' },
        { id: 9, image: 'https://i.ibb.co/m8tHTZD/5881573-scaled.jpg', category: 'UI/UX' },
        { id: 10, image: 'https://i.ibb.co/p1g8LkD/Blog-Main-Banner-size-770px-X-342px.jpg', category: 'UI/UX' },

    ];

    // Function to handle category selection
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // Filter the data based on the selected category
    const filteredData = selectedCategory === 'All' ? jsonData : jsonData.filter(item => item.category === selectedCategory);

    return (
        <div className='mt-12'>
            <div className='text-center space-y-4'>
                <h3 className='text-orange-500 text-3xl font-semibold'>Portfolio</h3>
                <h2 className='text-4xl font-extrabold text-[#15295f]'>My Amazing Works</h2>

                <ul className='flex items-center justify-center gap-4 font-semibold text-xl text-[#15295f]'>
                    <li>
                        <Link to='/' onClick={() => handleCategoryChange('All')}>All</Link>
                    </li>
                    <li>
                        <Link to='/' onClick={() => handleCategoryChange('Web Design')}>Web Design</Link>
                    </li>
                    <li>
                        <Link to='/' onClick={() => handleCategoryChange('Web Development')}>Web Development</Link>
                    </li>
                    <li>
                        <Link to='/' onClick={() => handleCategoryChange('UI/UX')}>UI/UX</Link>
                    </li>

                </ul>

                <div>
                    {/* Render the filtered data */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8'>
                        {filteredData.map(item => (
                            <div className='' key={item.id}>
                                <img className='lg:w-96 w-full h-80 rounded-lg' src={item.image} alt="image" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
