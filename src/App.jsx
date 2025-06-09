// import { useState } from 'react'
import Topbar from './components/Topbar'
import Carousel from './components/Carousel'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <section>
    <Topbar/>
    <Carousel/> 
    <main className="main">
      <div className="nonveg"><Link to="/nonveg">Non - Veg</Link></div>
      <div className="veg"><Link to="/veg">Veg</Link></div>
    </main>
    </section> 
  )
}

export default App
