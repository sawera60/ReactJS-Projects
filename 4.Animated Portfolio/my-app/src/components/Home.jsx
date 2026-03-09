import React from 'react'
import man from "../assets/man.png"
import TypingEffect from './TypingEffect'

const Home = () => {

  return (
    <div className='h-[100%] flex' id="home">

      <div className="lefthome w-[50%] h-screen flex items-center justify-center ">
        <div className="homedetails text-[2vmax]">

          <div className="line2 text-[2.5em] bg-gradient-to-r from-[#42b4cd] to-white bg-clip-text text-transparent">SAWERA SAJID</div>
          <div className="line3 text-white text-[1em]">
            <TypingEffect
                text={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "FRONTEND DEVELOPER"]}
                Speed={100}
                eraseSpeed={50}
                eraseDelay={1000}
                typingDelay={500}
                cursor="_"
            />
          </div>
          <button className="bg-gradient-to-r from-[#42b4cd] to-white text-black font-bold py-2 px-4 mt-[10px] rounded-full hover:from-[#42b4cd] hover:to-white transition duration-300">Hire me</button>
        </div>
      </div>
      <div className="righthome w-[50%] h-screen flex items-center justify-center">
        <img src={man} alt="Hero Image" className='w-[60%] drop-shadow-[2px_2px_20px_rgb(116,201,225)]' />
      </div>
    </div>
  )
}

export default Home
