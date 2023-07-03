import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const MyProjects = () => {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        fetch('../../../public/data/projects.json')
            .then(res => res.json())
            .then(data => {
                setProjectData(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, []);

    return (
        <div className=' mt-8'>
            <Container>
                <div className='text-center'>
                    <h2 className='text-orange-500 text-3xl font-extrabold'>My Project</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sed.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 h-96 gap-x-4 gap-y-8 mt-8'>
                    {projectData.map((item, index) => (
                        <div key={index} className=" card card-compact w-full lg:96 bg-base-100 shadow-xl hover:shadow-lg hover:bg-red-500">
                            <div>
                                <img className='w-full h-60' src={item.image} alt="Shoes" />
                            </div>
                            <div className="card-body">
                                <h2 className="text-3xl my-4 font-extrabold text-center">{item.name}</h2>
                                <div className='flex justify-center items-center gap-4'>
                                    
                                    <Link to={item.live_link} target='_blank'> <FaArrowRight className='bg-orange-500  w-8 h-8 p-2 rounded-full text-white text-sm' /></Link>
                                 
                                    <Link to={item.live_link} target='_blank'>Live Link</Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default MyProjects;
{/* <div>
     inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] transition-all duration-700
</div> */}