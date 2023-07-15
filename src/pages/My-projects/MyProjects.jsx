import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const MyProjects = () => {
  

   const data =  [
        {
          "name": "Yoga Meditation",
          "live_link": "https://yoga-meditation-project.web.app/",
          "image": "https://img.freepik.com/free-vector/web-design-agency-landing-page_52683-868.jpg?w=740&t=st=1688285606~exp=1688286206~hmac=a7f5fa75886f74148e41b70bd399b62735877a28e8f8ef3065214aee0ae17a9c"
        },
        {
          "name": "Animal Toys",
          "live_link": "https://animal-toys-project-4905d.web.app/",
          "image": "https://img.freepik.com/premium-vector/add-cart-illustration-web-page_1124-694.jpg?w=740"
        },
        {
          "name": "Chef Recipe",
          "live_link": "https://the-chef-project-2637f.web.app/",
          "image": "https://img.freepik.com/free-vector/app-development-landing-page_52683-871.jpg?w=740&t=st=1688285640~exp=1688286240~hmac=c21a5e98c03b6b0cdb1cc68c1186830685e89da068aaf114327bc9a1316afeea"
        }
       
      ]

    return (
        <div className=' mt-8'>
            <Container>
                <div className='text-center'>
                    <h2 className='text-orange-500 text-3xl font-extrabold'>My Project</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sed.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 h-96 gap-x-4 gap-y-8 mt-8'>
                    {data.map((item, index) => (
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