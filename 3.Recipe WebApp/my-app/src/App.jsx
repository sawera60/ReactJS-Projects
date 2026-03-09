import Home from "./Components/Home"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
