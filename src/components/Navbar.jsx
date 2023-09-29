import React from 'react'
import { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdHelp, MdFavorite } from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className='max-w-[1240px] mx-auto flex justify-between items-center p-4'>
            {/* left side */}
            <div className='flex items-center mx-1 justify-center'>
                <div onClick={() => {setNav(!nav)}} className='cursor-pointer'>
                    <AiOutlineMenu size={24} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl '>Best <span className='font-bold' >Eats</span></h1>
                <div className='hidden lg:flex items-center text-[14px] bg-gray-200 rounded-full p-1 ml-1'>
                    <p className='text-white p-2 bg-black rounded-full'>Delivery</p>
                    <p className='p-2'>PickUp</p>
                </div>
            </div>
            {/* search input */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]' >
                <AiOutlineSearch size={25} />
                <input type="text" placeholder='search foods' className='bg-transparent p-2 focus:outline-none w-full' />
            </div>
            {/* cart button */}
            <button className='md:flex items-center justify-between bg-black text-white hidden py-2 rounded-full'>
                <BsFillCartFill size={20} />Cart
            </button>

            {/* Mobile Menu */}
            {/* over lay */}
            {nav?
            <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 '>

            </div>:""}
            {/* side drawer menu */}
            <div className={nav? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':"fixed left-[-100%] top-0"}>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer'onClick={()=>setNav(!nav)}/>
                <h2 className='text-2xl p-4 '>Best <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800 '>
                        <li className='flex text-l py-4'><TbTruckDelivery size={25} className='mr-4' />Orders</li >
                        <li className='flex text-l py-4'><MdFavorite size={25} className='mr-4' />Favourites</li >
                        <li className='flex text-l py-4'><FaWallet size={25} className='mr-4' />Wallet</li >
                        <li className='flex text-l py-4'><MdHelp size={25} className='mr-4' />Help</li >
                        <li className='flex text-l py-4'><AiFillTag size={25} className='mr-4' />Promotions</li >
                        <li className='flex text-l py-4'><BsFillSaveFill size={25} className='mr-4' />Best Ones</li >
                        <li className='flex text-l py-4'><FaUserFriends size={25} className='mr-4' />Invite Friends</li >
                    </ul>
                </nav>
            </div>

                <></>
        </div>
    )
}

export default Navbar