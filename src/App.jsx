import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Form from './Components/form'
import Form2 from './Components/Form2'
import Hero from './Components/Hero' // Import the Hero component
import Galeria from './Components/Galeria' // Import the Galeria component
import Newcards from './Components/NewsCard' // Import the Newcards component

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero /> 
      <Newcards /> {/* Add Newcards here */}
      <Galeria />
      <Form2 />
      <Footer />
    </>
  )
}

export default App
