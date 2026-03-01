import React from 'react'
import './Footer.css'
import logo_1 from '../../assets/logo_1.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Footer = () => {

    return (
        <div className='footer-container'>
            <div className="text">
                <img className='logo-footer' src={logo_1} alt="" />
                <p>Home</p>
                <p>Online Lesson</p>
                <p>Tutorial Guide</p>
                <p>Blog</p>
                <p>News and Press Release</p>
                <p>Search</p>
            </div>

            <div className="text">
                <h3>Quick Links</h3>
                <p>Login</p>
                <p>Dashboard</p>
                <p>Student support</p>
                <p>FAQ</p>
                <p>Contact</p>
                <p>Career</p>
            </div>

            <div className="text">
                <h3>Locations</h3>
                <p>Awoyaya</p>
                <p>Victoria Island</p>
                <p>Ikeja</p>
                <p>Abule Egba</p>
                <p>Abule Egba</p>
                <p>Abule Egba</p>
            </div>

            <div className="social-container">
                <div className="content-soc">
                    <h3>JUSTRING NOW</h3> <span>The latest string learning,<br /> stories,
                        ideas, and events.</span>
                    <div className="input-b">
                        <input type="text" placeholder='Email address' />
                        <button>SUBSCRIBE</button>
                    </div>
                    <div className="social-media">
                        <FaLinkedin className='img-soc' />
                        <FaTwitter className='img-soc' />
                        <FaInstagram className='img-soc' />
                        <FaFacebook className='img-soc' />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Footer
