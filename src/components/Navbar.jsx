import logo from '../assets/logo.png';
import arrow from '../assets/arrow_icon.png';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <div className='h-8'>
                <img className='w-full' src={logo} alt="" />
            </div>
            <div className='w-full flex justify-end'>
                <ul className='hidden md:flex cursor-pointer'>
                    <li className='p-4 hover:scale-105 duration-50 hover:text-[#c7cad1]'>Home</li>
                    <li className='p-4 hover:scale-105 duration-50 hover:text-[#c7cad1]'>Features</li>
                    <li className='p-4 hover:scale-105 duration-50 hover:text-[#c7cad1]'>Prices</li>
                    <li className='p-4 hover:scale-105 duration-50 hover:text-[#c7cad1]'>Blog</li>
                </ul>
                <div className='flex items-center '>
                    <div className='hidden md:flex w-[100px] justify-center items-center rounded-lg bg-white text-black'>
                        <button className='h-8 flex items-center 
                            justify-center rounded-md font-medium py-2 p-2'
                        >
                            Sign up
                        </button>
                        <img className='object-contain' src={arrow} alt="" />
                    </div>
                    <select className='bg-transparent w-[70px] h-8 rounded-md font-medium 
                        mx-auto py-2 p-2 ml-3'>
                        <option value="usd">USD</option>
                        <option value="eu">EUR</option>
                        <option value="zar">ZAR</option>
                    </select>
                </div>
            </div>
            {/* MENU BUTTON */}
            <div onClick={handleNav} className='block md:hidden '>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            {/* HAMBURGER MENU */}
            <div className={nav ? `fixed left-0 top-0 w-[60%] h-full
                  bg-blue-900 ease-in-out duration-500 `
                : `fixed left-[-100%]`}
            >
                <div className='m-5 pt-5 '>
                    <img className='w-25 h-9' src={logo} alt="" />
                </div>
                <ul className='cursor-pointer'>
                    <li className='pl-7 p-4 hover:bg-purple-900 duration-50 border-b border-b-gray-900'>Home</li>
                    <li className='pl-7 p-4 hover:bg-purple-900 duration-50 border-b border-b-gray-900'>Features</li>
                    <li className='pl-7 p-4 hover:bg-purple-900 duration-50 border-b border-b-gray-900'>Prices</li>
                    <li className='pl-7 p-4 hover:bg-purple-900 duration-50 '>Blog</li>
                </ul>
                <div className='flex ml-5 mt-2 w-[100px] justify-center items-center rounded-lg bg-white text-black'>
                    <button className='h-8 flex items-center 
                            justify-center rounded-md font-medium py-2 p-2'
                    >
                        Sign up
                    </button>
                    <img className='object-contain' src={arrow} alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar