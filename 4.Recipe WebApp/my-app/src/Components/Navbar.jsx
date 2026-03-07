import React from 'react'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='w-full h-16 bg-blue-800 text-white flex items-center justify-between px-4'>
            <div className="left font-bold">
                <h1>Recipe Web App</h1>
            </div>
            <div className="middle flex items-center gap-2 px-4">
                <input type="text" placeholder='Search here' className='border-2 rounded-2xl px-2' />
                <FaSearch />

            </div>
            <div className="right flex gap-5 hover:bg-blue-950 p-2 rounded-lg cursor-pointer">
                <h3>Indian</h3>
                <h3>American</h3>
                <h3>British</h3>
                <h3>Chinese</h3>
                <h3>Thai</h3>
            </div>
        </nav>
    )
}

export default Navbar