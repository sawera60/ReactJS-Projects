import React, { useState } from 'react'
import logo from "../assets/p.jpg"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { FaHouseFloodWater } from "react-icons/fa6";
import { MdOutlinePool } from "react-icons/md";
import { FaTents } from "react-icons/fa6";
import { MdCabin } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { FaHouseSignal } from "react-icons/fa6";





const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (

        <div className="w-full h-[160px] flex items-center justify-center flex-col fixed top-0 z-10 bg-white">
            {visible ? <div className="absolute w-[180px] h-[200px] bg-white right-[3%] top-[45%] shadow-[2px_2px_10px_rgb(80,78,78)] rounded-[30px] flex items-start justify-center gap-[10px] p-[20px] box-border flex-col ">
                <div className="ham1 w-[100%] rounded-[30px] box-border text-[16px] text-black cursor-pointer hover:bg-gray-200  ">Login</div>
                <div className="ham1  w-[100%] rounded-[30px] box-border text-[16px] text-black cursor-pointer hover:bg-gray-200 ">SignUp</div>
                <div className="ham1  w-[100%] rounded-[30px] box-border text-[16px] text-black cursor-pointer hover:bg-gray-200 ">List Your Home</div>
                <div className="ham1  w-[100%] rounded-[30px] box-border text-[16px] text-black cursor-pointer hover:bg-gray-200 ">Help Center</div>
            </div> : <div></div>}


            <div className="nav1 w-full h-1/2 border-b-[0.5px] border-solid border-[rgba(117,111,111,0.476)] flex items-center justify-between p-[20px] box-border">

                <div className="logo flex items-center justify-center gap-2">

                    <img src={logo} alt="logo" className="w-[50px]" />
                    <h1 className='text-[18px] font-[600] text-red-600'>Private Property Rental</h1>
                </div>

                <div className="search flex items-center justify-center gap-[10px]">
                    <input
                        type="text"
                        placeholder='Search Destination'
                        className='w-[250px] p-[10px] box-border rounded-2xl outline-none '
                    />
                    <button className="p-[10px] bg-red-700 text-white flex items-center justify-center rounded-[30px] text-[16px] border-none gap-[5px] transition-all duration-200 hover:bg-red-800">
                        Search <IoMdSearch className='w-[20px] h-[20px]' />
                    </button>
                </div>

                <div className="hamburger flex items-center gap-4">
                    <button className='text-sm font-medium hover:text-red-600 transition-colors'>List Your Home</button>
                    <button className='flex items-center gap-2 p-2 border border-gray-300 rounded-full hover:shadow-[0_2px_10px_rgba(0,0,0,10)] transition-shadow duration-300 cursor-pointer' onClick={() => {
                        setVisible(!visible)
                    }}>
                        <GiHamburgerMenu />
                        <CgProfile className="text-xl" />
                    </button>
                </div>
            </div>


            <div className="nav2 w-full h-1/2 flex items-center justify-center gap-[30px] ">
                <div className="sv1 flex items-center justify-center flex-col gap-[5px]"><MdWhatshot className='w-[25px] h-[25px] text-black ' /><h3>Trending</h3></div>
                <div className="sv1 flex items-center justify-center flex-col gap-[5px]"><h3><FaHouseUser className='w-[25px] h-[25px] text-black ' />Houses</h3></div>
                <div className="sv1 flex items-center justify-center flex-col gap-[5px]"><IoHomeSharp className='w-[25px] h-[25px] text-black ' /><h3>Rooms</h3></div>
                <div className="sv1 flex items-center justify-center flex-col gap-[5px]"><FaHouseFloodWater className='w-[25px] h-[25px] text-black ' /><h3>Farm Houses</h3></div>
                <div className="sv1 flex items-center justify-center flex-col gap-[5px]"><MdOutlinePool className='w-[25px] h-[25px] text-black ' /><h3>Pool Houses</h3></div>
                <div className="sv1 flex items-center justify-center flex-col gap-[5px]"><FaTents className='w-[25px] h-[25px] text-black ' /><h3>Tent Houses</h3></div>
                <div className="sv1 flex items-center justify-center flex-col gap-[5px]"><MdCabin className='w-[25px] h-[25px] text-black ' /> <h3>Cabins</h3></div>
                <div className="sv1 flex items-center justify-center flex-col gap-[5px]"><FaShop className='w-[25px] h-[25px] text-black ' /><h3>Shops</h3></div>
                <div className="sv1 flex items-center justify-center flex-col gap-[5px]"><FaHouseSignal className='w-[25px] h-[25px] text-black ' /><h3>Forest House</h3></div>

            </div>
        </div>
    )
}

export default Navbar