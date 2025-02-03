import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button className='w-[500px] font-extrabold bg-gradient-to-tr'>ボタン</Button>
      </div>
    </>
  )
}

export default App
