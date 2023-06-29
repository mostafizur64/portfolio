import React from 'react';
import Container from '../../../components/Container';

const Navbar = () => {
  const navItems = <>
    <li><a>Home</a></li>
    <li><a>Service</a></li>
    <li><a>Work</a></li>
    <li><a>Blog</a></li>
    <li><a>Contact</a></li>

  </>
  return (
    <div className='bg-orange-50 '>
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                {navItems}
              </ul>
            </div>
            <a className="text-3xl font-extrabold ">Mostafizur Rahman</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">

              {navItems}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-orange-500 rounded-full px-8 text-white">Hire me</a>
          </div>
        </div>


      </Container>
    </div>
  );
};

export default Navbar;