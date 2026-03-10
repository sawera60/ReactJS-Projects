import Sidebar from "./components/Sidebar"
import ChatsSection from "./components/ChatsSection"
import Separation from "./components/Separation"


function App() {


  return (
    <>
    <div className="flex">
      <Sidebar/>
      <Separation/>
       <ChatsSection/>
    </div>
       
    </>
  )
}

export default App
