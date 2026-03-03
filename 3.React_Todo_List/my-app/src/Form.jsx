import React from 'react'
import { useState } from 'react'

const Form = ({ setTodo, data }) => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      title: title,
      description: description
    }
    setTodo([...data, obj])
    setTitle("")
    setDescription("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex items-center justify-center mt-4'>
        <input type="text" placeholder='Enter Task' className='border-2 border-gray-300 rounded-md p-2' onChange={handleChange} value={title} />
        <input type='text' placeholder='Enter Description' className='border-2 border-gray-300 ml-2 rounded-md p-2' onChange={handleDescription} value={description} />
        <button className='bg-yellow-500 text-gray-900 px-4 py-2 rounded-md ml-2 text-[15px] ' >Add Task</button>
      </div>

    </form>
  )
}

export default Form