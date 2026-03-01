import React from 'react'
import Footer from './component/Footer/Footer'
import Home from './pages/Home/Home'
import { Routes, Route, useFetcher } from 'react-router-dom'
import About from './pages/About/About'
import Navbar from './component/Navbar/Navbar'
import Classes from './pages/Classes/Classes'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import { useState } from 'react'
import LoginPopup from './component/LoginPopup/LoginPopup'

const App = () => {

    const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Classes' element={<Classes />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
