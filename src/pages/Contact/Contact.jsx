import React, { useRef, useState } from 'react';
import { FaFacebookF, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yyasdvr', 'template_rq4t9yo', form.current, '4bUzq5S3LEJv-RCsO')
            .then((result) => {
                console.log(result.text);
                setMessage(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 '>
            <div>
                {/* left side for contact  */}
                <h2 className='text-3xl font-bold text-[#15295f]'> Let's Connect</h2>
                <p className=' text-[#6f6b80] text-xl'>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                <div className='flex gap-4 mt-8'>

                    <Link to='https://web.facebook.com/profile.php?id=100009220888010' target='_blank'><FaFacebookF className=' w-12 h-12 bg-orange-500 text-white rounded-full p-2 ' /></Link>
                    <Link to='https://www.linkedin.com/in/mostafizur-rahman-a62927277/'><FaLinkedin className=' w-12 h-12 bg-orange-500 text-white rounded-full  p-2' /></Link>
                    <Link to='https://github.com/mostafizur64' target='_blank'><FaGithub className=' w-12 h-12 bg-orange-500 text-white rounded-full  p-2' /></Link>
                    <Link to='https://www.instagram.com/mdmostafizur64/'><FaInstagram className=' w-12 h-12 bg-orange-500 text-white rounded-full  p-2' /></Link>


                </div>
            </div>
            <div>
                {/* right side for contact  */}
                <div>
                    <h2 className='text-3xl font-bold text-[#15295f]'>Let's message me and mack something together</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="card space-y-8 mt-4">


                            <div className='form-control'>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered " />

                            </div>
                            <div className="form-control">

                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered " />
                            </div>
                            <div className="form-control">

                                <textarea name='message' className="textarea textarea-bordered " placeholder="Message"></textarea>
                            </div>
                            <div className="mt-6">

                                <input type="submit" value="Send Message" className=' btn btn-outline rounded-full hover:text-orange-500 hover:bg-white hover:border-orange-400 border-2 bg-orange-500  px-8 text-white  ' />
                            </div>
                        </div>
                        <span className='text-green-700'>{message && "Thanks for Contacting me"}</span>
                    </form>
                </div>
            </div>

        </div>



    );
};

export default Contact;