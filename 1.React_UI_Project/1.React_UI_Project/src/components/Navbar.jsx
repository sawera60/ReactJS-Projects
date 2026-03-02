import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <>
            <div className="mx-auto my-6 flex w-full items-center justify-between gap-6 rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-3 text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-md">
                
                {/* Logo Section */}
                <div className="w-[15%] px-3 py-2 text-2xl font-black tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    WDM
                </div>

                {/* Search Bar Section */}
                <div className="flex w-[70%] items-center justify-between rounded-xl border border-white/5 bg-white/5 px-2 py-1.5 transition-all duration-300 focus-within:bg-white/10 focus-within:ring-1 focus-within:ring-cyan-500/50">
                    <div className="left flex items-center gap-3 px-4 py-2 text-gray-400">
                        <FaSearch className="text-sm text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                        <span className="text-sm font-medium tracking-wide">Search here..</span>
                    </div>
                    <div className="right flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 px-4 py-2 text-sm font-bold uppercase tracking-wider text-cyan-300 border border-cyan-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all">
                        <IoFilterSharp className="text-base" />
                        <span>Filters</span>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="w-[15%] cursor-pointer rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-3 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-cyan-300 transition-all hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    Become a Seller
                </div>
                
            </div>
        </>
    )
}

export default Navbar