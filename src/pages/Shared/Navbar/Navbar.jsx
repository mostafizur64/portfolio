import React, { useEffect } from "react";
import Container from "../../../components/Container";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li className="text-[#15295f] text-[15px] font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="text-[#15295f] text-[15px] font-semibold">
        <a href="#services" spy={true} smooth={true}>
          Service
        </a>
      </li>
      <li className="text-[#15295f] text-[15px] font-semibold">
        <a href="#work">Work</a>
      </li>
      <li className="text-[#15295f] text-[15px] font-semibold">
        <a href="#myProjects" spy={true} smooth={true}>
          My Project
        </a>
      </li>
      <li className="text-[#15295f] text-[15px] font-semibold">
        <a href="#blogs">Blog</a>
      </li>
      {/* className='text-[#15295f] text-[15px] font-semibold' <li><Link to='contact'>Contact</Link></li> */}
      <li className="text-[#15295f] text-[15px] font-semibold">
        <a href="#contacts">Contact</a>
      </li>
    </>
  );

  return (
    <div className="bg-orange-50 ">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <Link to="/" className="text-5xl font-extrabold ">
              Mostafizur{" "}
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div id="contact" className="navbar-end">
            <motion.a
              className="btn bg-orange-500 rounded-full px-8 text-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#contacts"> Hire me</a>
            </motion.a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
