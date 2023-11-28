import { useState } from 'react'
import Header from './Header'
import Banner from './Banner'
import Misao from './missao'
import Quem from './quem-somos'
import Trabalhos from './trabalhos'
import Footer from './footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <Header/>
        <Banner/>
        <Misao/>
        <Quem/>
        <Trabalhos/>
        <Footer/>
      </div>
    </>
  )
}

export default App
