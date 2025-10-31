import { useState } from 'react'
import MainPage from './Pages/MainPage'
import Frames from './Pages/Frames'
import Frames2 from './Pages/Frames2'
import Frame3 from './Pages/Frame3'
import Carousel from './Pages/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
        <MainPage/>
        <Frames/>
        <Frames2/>
        <Frame3/>
      
      </div>
      
  )
}

export default App
