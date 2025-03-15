import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Nav_bar from './Components/Nav_bar'
import Prezzi from './Components/Prices'
import Gallery from './Components/Gallery'
import Kontakte from './Components/Kontakt'

function App() {

  return (
    <>
      <Router>

        <Header />
        <Nav_bar />


        <Routes>
          <Route path='/prices' element={<Prezzi />}></Route>
          <Route path='/team' element={<Hero />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/kontakt' element={<Kontakte />}></Route>


        </Routes>

        <Footer />

      </Router>

    </>
  )
}

export default App
