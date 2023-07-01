import React from 'react';
import Container from '../../components/Container';
import Resume from './Resume of Mostafizur Rahman.pdf'
const Banner = () => {
    return (

        <div className=''>
            <Container className="py-12">
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-28 justify-center items-center'>
                    <div>
                        {/* left site for banner  */}
                        <h3 className='text-orange-500 font-extrabold text-3xl '>Hi,I'm</h3>
                        <h2 className='text-[#15295f] font-extrabold text-7xl mt-2'>Mostafizur Rahman</h2>
                        <h3 className='text-orange-500 font-semibold text-2xl my-8'>Marn Stack Developer </h3>
                        <p className='w-3/4 text-gray-500 text-xl mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae animi illo corrupti voluptatibus repellat voluptatum aperiam hic nulla aliquam.</p>
                        <div className='flex gap-4 mt-12    '>
                           <a href={Resume} download>
                           <button className="btn btn-outline  rounded-full hover:text-orange-500 hover:bg-white hover:border-orange-400 border-2 bg-orange-500  px-8 text-white">Download CV</button>
                           </a>
                            <a className="btn bg-white text-orange-500 hover:bg-orange-500 hover:text-white rounded-full px-8 border-2 border-orange-400   ">Contact</a>

                        </div>
                    </div>
                    <div>
                        {/* right side for Banner  */}
                        <img className='w-full lg:w-96' src="https://i.ibb.co/3CqFXC5/Mostafizur-Rahman.jpg" alt="mostafizur rahman" />
                        <div className='bg-red-500'></div>
                    </div>
                </div>
            </Container>
        </div>



    );
};

export default Banner;