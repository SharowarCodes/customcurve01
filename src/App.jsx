import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Curved from "./components/Curved"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Curved/>
      
    </>
  )
}

export default App
