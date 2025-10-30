import { useState } from 'react'
import MainPage from './Pages/MainPage'
import Frames from './Pages/Frames'
import Frames2 from './Pages/Frames2'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
        <MainPage/>
        <Frames/>
        <Frames2/>
      </div>
      
  )
}

export default App
