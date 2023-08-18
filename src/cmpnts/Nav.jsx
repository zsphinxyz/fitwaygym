import { TiThMenu } from 'react-icons/ti';
import {useState} from 'react';

const Nav = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    }
  return (
    <>
    <div className='flex flex-row justify-around items-center h-28 md:h-36 bg-slate-900 md:bg-transparent relative'>
        <div className='flex-1 md:flex-[1]'>
            <h1 className='text-3xl md:text-5xl font-extrabold text-gray-100 drop-shadow-md pl-4'>
                FITWAY<span className='font-serif text-gray-400 text-sm'>gym</span>
            </h1>
        </div>

        <div className='flex-1 md:flex-[3] lg:flex-[1] md:bg-slate-900'>
            <div className='flex justify-end mr-4 md:hidden text-white p-6'>
                <TiThMenu size={40} className='cursor-pointer' onClick={toggleNav}/>
            </div>
            <ul className='hidden md:flex flex-row justify-evenly items-center h-24 text-xl font-bold text-slate-100'>
                <li className='hover:text-red-500'><a href="Home">Home</a></li>
                <li className='hover:text-red-500'><a href="About">About</a></li>
                <li className='hover:text-red-500'><a href="Features">Features</a></li>
                <li className='hover:text-red-500'><a href="Classes">Classes</a></li>
                <li className='hover:text-red-500'><a href="Pages">Pages</a></li>
                <li className='hover:text-red-500'><a href="Contact">Contact</a></li>
            </ul>
        </div>
    </div>

    <div className={`${nav ? 'block' : 'hidden'} w-full absolute top-24 before:content-[""] before:w-full before:h-full before:bg-slate-900 before:opacity-60 before:absolute before:left-0 before:top-0`}>
        <ul className='flex w-4/6 bg-slate-900 text-white flex-col justify-around items-center z-50 absolute right-0'>
            <li className='hover:text-red-500 py-8 text-center hover:bg-slate-500 w-full transition text-xl'><a href="Home">Home</a></li>
            <li className='hover:text-red-500 py-8 text-center hover:bg-slate-500 w-full transition text-xl'><a href="About">About</a></li>
            <li className='hover:text-red-500 py-8 text-center hover:bg-slate-500 w-full transition text-xl'><a href="Features">Features</a></li>
            <li className='hover:text-red-500 py-8 text-center hover:bg-slate-500 w-full transition text-xl'><a href="Classes">Classes</a></li>
            <li className='hover:text-red-500 py-8 text-center hover:bg-slate-500 w-full transition text-xl'><a href="Pages">Pages</a></li>
            <li className='hover:text-red-500 py-8 text-center hover:bg-slate-500 w-full transition text-xl'><a href="Contact">Contact</a></li>
        </ul>
    </div>
    </>
  )
}

export default Nav
