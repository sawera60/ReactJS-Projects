import React, { useState } from 'react'
import { Link } from "react-scroll"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { to: "home", label: "Home" },
        { to: "about", label: "About" },
        { to: "projects", label: "Projects" },
        { to: "contact", label: "Contact" },
    ]

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <nav className='fixed top-0 left-0 z-50 w-full bg-[#1a222bcc] backdrop-blur-sm'>
            <div className='flex items-center justify-between h-[80px] px-[20px]'>
            <h1 className='text-[30px] font-[700] bg-gradient-to-r from-[#42b4cd] to-white bg-clip-text text-transparent'>
                PORTFOLIO
            </h1>

            <ul className='hidden md:flex items-center justify-center gap-[20px] text-white list-none text-[20px]'>
                {navItems.map((item) => (
                    <li key={item.to}>
                        <Link to={item.to} smooth={true} duration={500} offset={-80} activeClass='active-link' spy={true} className='cursor-pointer'>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <button
                type='button'
                aria-label='Toggle navigation menu'
                onClick={() => setIsOpen((prev) => !prev)}
                className='md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5'
            >
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
            </button>
            </div>

            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className='flex flex-col items-center gap-4 pb-6 text-white text-[18px]'>
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                activeClass='active-link'
                                spy={true}
                                onClick={handleLinkClick}
                                className='cursor-pointer'
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Nav
