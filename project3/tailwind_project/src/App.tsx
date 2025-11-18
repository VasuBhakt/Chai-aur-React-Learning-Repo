import { useState } from 'react'
import './App.css'
import Card1 from './components/Card1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card1 title="Chai aur Code" message="Learning props part 1"/>
      <Card1 title="Swastik Bose" />
    </>
  )
}

export default App
