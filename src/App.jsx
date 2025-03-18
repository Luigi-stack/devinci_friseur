import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Nav_bar from './Components/Nav_bar'
import Prezzi from './Components/Prices'
import Gallery from './Components/Gallery'
import Kontakt from './Components/Kontakt'

function App() {

  return (
    <>
      <Router>

        <Header />
        <Nav_bar />


        <Routes>
          <Route path='/preise' element={<Prezzi />}></Route>
          <Route path='/' element={<Hero />}></Route>
          <Route path='/galerie' element={<Gallery />}></Route>
          <Route path='/kontakt' element={<Kontakt />}></Route>
        </Routes>

        <Footer />

      </Router>

    </>
  )
}

export default App
