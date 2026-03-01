import React, { use, useState } from 'react'
import './Navbar.css'
import logo_1 from '../../assets/logo_1.png'
import { Link, Links } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";


const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home")
  const [token,setToken] = useState("")


   const [mobileMenu, setMobileMenu] = useState(false);

   const toggleMenu = ()=> {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
   }
  return (
   <>
    <div className='navbar'>
      <a href="/"><img src={logo_1} alt="" className='logo' /></a>
      <ul className= {`nav  ${mobileMenu ? '' : 'hideMobileMenu'}`}>
        <li><Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "nav_line" : ""}>Home</Link></li>
        <li><Link to='About' onClick={() => setMenu("about")} className={menu === "about" ? "nav_line" : ""}>About</Link></li>
        <li><Link to='Classes' onClick={() => setMenu("Classes")} className={menu === "Classes" ? "nav_line" : ""}>Classes</Link></li>
        <li><Link to='Blog' onClick={() => setMenu("blog")} className={menu === "blog" ? "nav_line" : ""}>Blog</Link></li>
        <li><Link to='Contact' onClick={() => setMenu("contact")} className={menu === "contact" ? "nav_line" : ""}>Contact</Link></li>
      </ul >

      <div className="navbar-right">
        <input type="text" placeholder='Search....' />
        <span className="material-symbols-outlined search-icon">
          search
        </span>
      </div>
      {localStorage.getItem("token") ?<div className="profile-logout">< CiLogout onClick={()=> {localStorage.removeItem("token");window.location.replace('/')}}  className='logout-icon'/><CgProfile className='profile-pics' /></div>
      :<button onClick={() => setShowLogin(true)}>Sign in</button>}
      <RiMenu3Line className='menu-icon'  onClick={toggleMenu}/>

     
    </div>

    </>
  )
}

export default Navbar
