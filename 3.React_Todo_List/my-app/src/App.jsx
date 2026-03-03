import { useState } from "react"
import Form from "./Form"
import Todos from "./Todos"

function App() {
  const[todo,setTodo]= useState([
    {
      id:1,
      title:"Buy Crockery",
      description:"Plates, glasses, and cutlery"
    },
    {
      id:2,
      title:"Clothes Purchase",
      description:"Shirts, pants, and shoes"
    },
    {
      id:3,
      title:"Inventory Management",
      description:"Check and update inventory levels"
    },
    {
      id:4,
      title:"Customer Support",
      description:"Respond to customer inquiries and resolve issues"
    }

  ])

  const deleteTodo=(id)=>{
    const newTodo= todo.filter((item)=> item.id !== id)
    setTodo(newTodo)
  }
  return (
    <>
      <div className="container">
        <h1 className="text-center text-purple-700 text-3xl font-bold mt-4"> TODO List </h1>
      </div>
      <Form data={todo} setTodo={setTodo} />
      <Todos data={todo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
