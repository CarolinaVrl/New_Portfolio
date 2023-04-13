import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import About from './pages/About'

function App() {

  const [isRed, setIsRed] = useState(true)
  const [isCyan, setIsCyan] = useState(false)
  const [isBlue, setIsBlue] = useState(false)
  


  return (
    <div className="bodyDark">
      <NavBar red={isRed} blue={isBlue} cyan={isCyan}  />
      <Projects />
      <Footer />

    </div>
  )
}

export default App
