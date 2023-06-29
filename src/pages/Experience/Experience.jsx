import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
const Experience = () => {
    return (
        <div className='mt-12'>
            <div className='text-center '>
                <h3 className='text-orange-500 font-semibold text-2xl'>Why Choose Me</h3>
                <h2 className='text-5xl text-[#15295f] font-extrabold'>My Experience Area</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8'>
                {/* left side  */}
                <div className='space-y-6'>
                    <div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 justify-between '>
                            <h2 className='flex justify-between'>HTML</h2>
                            <h2>90%</h2>
                        </div>

                        <ProgressBar completed={90} bgColor='#fd6e0a' animateOnRender={true} />
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>CSS</h2>
                            <h2>90%</h2>
                        </div>
                        <ProgressBar completed={90} bgColor='#fd6e0a' animateOnRender={true} />

                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>BOOTSTRAP</h2>
                            <h2>90%</h2>
                        </div>
                        <ProgressBar completed={90} bgColor='#fd6e0a' animateOnRender={true} />

                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>TAILWIND CSS</h2>
                            <h2>90%</h2>
                        </div>
                        <ProgressBar completed={90} bgColor='#fd6e0a' animateOnRender={true} />

                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>JAVASCRIPT</h2>
                            <h2>90%</h2>
                        </div>
                        <ProgressBar completed={90} bgColor='#fd6e0a' animateOnRender={true} />

                    </div>



                </div>



                {/* right side  */}
                <div className='space-y-6'>
                    <div>
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>REACT JS</h2>
                            <h2>90%</h2>
                        </div>
                        <ProgressBar completed={90} bgColor='#fd6e0a' animateOnRender={true} />

                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>EXPRESS JS</h2>
                            <h2>90%</h2>
                        </div>
                        <ProgressBar completed={90} bgColor='#fd6e0a' animateOnRender={true} />

                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>MONGODB</h2>
                            <h2>90%</h2>
                        </div>
                        <ProgressBar completed={90} bgColor='#fd6e0a' animateOnRender={true} />

                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>NEXT JS</h2>
                            <h2>90%</h2>
                        </div>
                        <ProgressBar completed={90} bgColor='#fd6e0a' animateOnRender={true} />

                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h2 className='flex justify-between'>---</h2>
                            <h2>90%</h2>
                        </div>
                        <ProgressBar completed={90} bgColor='#fd6e0a' animateOnRender={true} />

                    </div>



                </div>


            </div>
        </div>

    );
};

export default Experience;