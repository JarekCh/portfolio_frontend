import React, { useState } from 'react';
import Logo from '../assets/img/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail} from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);  
  const handleClick = () => setNav((prevValue => !prevValue));

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'>
      <div>
        <img src={Logo} alt='Logo' style={{width: '50px'}} />
      </div>
      {/* menu */}
      <nav className='hidden md:flex'>
        <ul className='flex'>
          <li className='hover:scale-125'>
            <HashLink to='/#hero' smooth>HOME</HashLink>          
          </li>
          <li className='hover:scale-125'>
            <HashLink to='/#about' smooth>ABOUT</HashLink> 
          </li>
          <li className='hover:scale-125'>
            <HashLink to='/#skills' smooth>SKILLS</HashLink> 
          </li>
          <li className='hover:scale-125'>
            <Link to='/projects'>PROJECT</Link> 
          </li>
          <li className='hover:scale-125'>
            <Link to='/contact'>CONTACT</Link> 
          </li>
        </ul>
      </nav>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden cursor-pointer '>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
        <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen  flex flex-col justify-center items-center bg-[#0a192f]'}>
          <li onClick={handleClick} className='py-6 text-4xl hover:scale-110'>
            <HashLink to='/#hero' smooth>HOME</HashLink> 
          </li>
          <li onClick={handleClick} className='py-6 text-4xl hover:scale-110'>
            <HashLink to='/#about' smooth>ABOUT</HashLink> 
          </li>
          <li onClick={handleClick} className='py-6 text-4xl hover:scale-110'>
            <HashLink to='/#skills' smooth>SKILLS</HashLink> 
          </li>
          <li onClick={handleClick} className='py-6 text-4xl hover:scale-110'>
            <Link to='/projects'>PROJECT</Link> 
          </li>
          <li onClick={handleClick} className='py-6 text-4xl hover:scale-110'>
            <Link to='/contact'>CONTACT</Link> 
          </li>
        </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/jaroslaw-charchula/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/JarekCh/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <Link
              className='flex justify-between items-center w-full text-gray-300'
              to='/contact'
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar