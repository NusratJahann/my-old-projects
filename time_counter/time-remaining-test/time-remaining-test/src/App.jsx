import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RemainingTime from './Components/RemainingTime/RemainingTime'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RemainingTime></RemainingTime>
  )
}

export default App
