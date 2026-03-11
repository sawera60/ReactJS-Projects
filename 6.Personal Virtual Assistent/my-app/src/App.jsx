import React from 'react'
import ai from './assets/ai.png'
import { CiMicrophoneOn } from "react-icons/ci";
const App = () => {
  return (

    <>
      <div className="gap-[10px] w-[100%] h-[100vh] flex items-center justify-start p-[10px] flex-col">
        <img src={ai} alt="logo" className="logo h-[70%]" />
        <span className="text-white text-lg font-medium bg-[linear-gradient(to right, rgb(255,0,0), rgb(0,255,0), rgb(0,0,255))] bg-clip-text text-transparent">I'm Shifra, Your Advanced Virtual Assistant</span>
        <button className="w-[180px] h-[50px] flex items-center justify-center gap-[20px] text-[20px] border-radius[20px] border-none bg-[aqua] shadow[2px 2px 50px aqua] ">Click here <CiMicrophoneOn /> </button>
      </div>
    </>

  )
}

export default App