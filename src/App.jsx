import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from '../src/Components/images/mealdb.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>thi is me</h2>
      <img src={logo} alt="" />
    </div>
  )
}

export default App
