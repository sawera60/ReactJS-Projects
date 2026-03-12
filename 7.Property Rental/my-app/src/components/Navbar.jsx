import React from 'react'
import logo from "../assets/p.jpg"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => { 
    return (

        <div className="w-full h-[160px] flex items-center justify-center flex-col fixed top-0 z-10 bg-white">
            
 
            <div className="nav1 w-full h-1/2 border-b-[0.5px] border-solid border-[rgba(117,111,111,0.476)] flex items-center justify-between p-[20px] box-border">
                
                <div className="logo flex items-center justify-center gap-2">
                
                    <img src={logo} alt="logo" className="w-[50px]" />
                    <h1 className='text-[18px] font-[300] text-red-600'>Private Property Rental</h1>
                </div>

                <div className="search flex items-center justify-center gap-[10px]">
                    <input 
                        type="text" 
                        placeholder='Search Destination' 
                        className='w-[250px] p-[10px] box-border border-r-[30px] border-solid border-[rgba(125,122,122,0.416)] pl-[20px] text-[15px] text-black outline-none bg-transparent' 
                    />
                    <button className="p-[10px] bg-red-700 text-white flex items-center justify-center rounded-[30px] text-[16px] border-none gap-[5px] transition-all duration-200 hover:bg-red-800">
                        Search <IoMdSearch className='w-[20px] h-[20px]' />
                    </button>
                </div>

                <div className="hamburger flex items-center gap-4">
                    <button className='text-sm font-medium hover:text-red-600 transition-colors'>List Your Home</button>
                    <button className='flex items-center gap-2 p-2 border border-gray-300 rounded-full hover:shadow-md transition-shadow'> 
                        <GiHamburgerMenu /> 
                        <CgProfile className="text-xl" />
                    </button>
                </div>
            </div>

          
            <div className="nav2 w-full h-1/2 ">
               
            </div>
        </div>
    )
}

export default Navbar