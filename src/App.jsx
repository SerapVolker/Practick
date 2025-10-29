import { useState } from 'react'
import MainPage from './Pages/MainPage'
import Frames from './Pages/Frames'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
        <MainPage/>
        <Frames/>
      </div>
      
  )
}

export default App
