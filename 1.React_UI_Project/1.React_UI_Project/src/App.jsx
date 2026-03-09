

import './App.css'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'




function App() {


  return (
    <div className='min-h-screen px-4 pt-6 pb-6 md:px-8 lg:px-10'>

      <Navbar />
      <div className="flex gap-6">
        <Sidebar />
        <Rightbar />
      </div>
    

    </div>
  )
}

export default App
