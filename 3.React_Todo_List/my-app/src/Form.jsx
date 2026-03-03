import React from 'react'

const Form = () => {
  return (
    <div className='flex items-center justify-center mt-4'>
      <input type="text" placeholder='Enter Task' className='border-2 border-gray-300 rounded-md p-2 ' />
      <input type='text' placeholder='Enter Description' className='border-2 border-gray-300 ml-2 rounded-md p-2'/>
      <button className='bg-yellow-500 text-gray-900 px-4 py-2 rounded-md ml-2 text-[15px] '>Add Task</button>
    </div>
  )
}

export default Form