import React, { useEffect, useState } from 'react'

const DarkMode = () => {
  const [mode, setMode] = useState("darkmode")
  function toggle() {
    if (mode === "darkmode") {
      setMode("lightmode")
    }
    else {
      setMode("darkmode")
    }
  }

  useEffect(() => {
    // Apply the selected mode to the document
    document.body.className = mode;
  }, [mode]);

  return (
    <button onClick={toggle}>Dark</button>

  )
}

export default DarkMode