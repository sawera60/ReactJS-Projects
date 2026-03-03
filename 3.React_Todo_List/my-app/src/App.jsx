import Form from "./Form"
import Todos from "./Todos"

function App() {

  return (
    <>
      <div className="container">
        <h1 className="text-center text-purple-700 text-3xl font-bold mt-4"> TODO List </h1>
      </div>
      <Form />
      <Todos />
    </>
  )
}

export default App
