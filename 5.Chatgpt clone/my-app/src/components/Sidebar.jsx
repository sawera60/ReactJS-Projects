import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FiPlus } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";
const Sidebar = () => {
    const [extend, setExtend] = useState(false)
    return (
        <div className="sidebar flex flex-col gap-[10px] px-[10px] py-[20px] h-[100vh] text-white overflow-auto bg-gray-800 items-start">

            <GiHamburgerMenu className="w-[30px] text-white h-[30px] " onClick={() => setExtend(!extend)} />
            <div className=" flex items-center gap-[10px] mt-[20px] cursor-pointer bg-gray-600 p-[20px] rounded-lg ">
                <FiPlus />
                {extend ? <p>New Chat</p> : null}
            </div>
            <div className="recent flex items-center gap-[10px] mt-[20px] cursor-pointer hover:bg-gray-600 p-[20px] rounded-lg ">
                <FaRegMessage />
                {extend ? <p>Who are you</p> : null}
            </div>
        </div>
    )
}

export default Sidebar