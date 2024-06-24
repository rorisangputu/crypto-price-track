import arrow from '../assets/arrow_icon.png';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const Navbar = () => {



    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <nav className='flex justify-between font-space-grotesk items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <div className='h-8'>
                <Link to={"/"}>
                    <h1 className='w-full font-space-grotesk text-3xl font-bold uppercase'>CoinVue</h1>
                </Link>
            </div>
            <div className='w-full flex justify-end'>
                <ul className='hidden md:flex cursor-pointer'>
                    <li className='p-4 hover:scale-105 duration-50 hover:text-[#c7cad1]'><Link to={"/"}>Home</Link></li>
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

                </div>
            </div>
            {/* MENU BUTTON */}
            <div onClick={handleNav} className='block md:hidden ml-3 '>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            {/* HAMBURGER MENU */}
            <div className={nav ? `fixed left-0 top-0 w-[60%] h-full z-10
                  bg-white ease-in-out duration-500 `
                : `fixed left-[-100%]`}
            >
                <div className='m-5 pt-5 '>
                    <div className='h-8'>
                        <Link to={"/"}>
                            <h1 className='w-full font-space-grotesk text-black text-3xl font-bold uppercase'>CoinVue</h1>
                        </Link>
                    </div>
                </div>
                <ul onClick={() => { setNav(false) }} className='cursor-pointer text-black text-xl'>
                    <li className='pl-7 p-4 hover:bg-purple-900 duration-50 border-b border-b-gray-900'><Link to={"/"}>Home</Link></li>
                    <li className='pl-7 p-4 hover:bg-purple-900 duration-50 border-b border-b-gray-900'><Link to={"#market"}>Market Update</Link></li>
                    <li className='pl-7 p-4 hover:bg-purple-900 duration-50 border-b border-b-gray-900'>Prices</li>
                    <li className='pl-7 p-4 hover:bg-purple-900 duration-50 '>Blog</li>
                </ul>
                <div className='flex mt-2 w-[150px] justify-center items-center rounded-lg bg-white text-black'>
                    <button className='h-8 flex items-center 
                            justify-center rounded-md font-medium text-xl p-2'
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