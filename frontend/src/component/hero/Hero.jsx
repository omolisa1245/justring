import React from 'react'
import './Hero.css'
import header from "../../assets/header-3.png"
import { FaRegClock } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import cut_2 from '../../assets/cut_2.png'

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className="overlay">
          <div className="hero-content">
            <h1>Learn <em>Musical</em></h1><b /><h2>Instrument From The Best</h2>
            <p>Musical ability is not an inborn talent, but an ability which can be developed. Justring offers different all kinds of string Musical Instrument programs on-campus or online...</p>

            <button className='btn'>Enrol Now</button>
          </div>
          <div className="hero-content-right">
            <p>"Music activates both the left and right brain at the same time, and the activation of both hemispheres can maximize learning and improve memory...."Dr. Masha Godkin, quoted by National University.</p>
          </div>
          <img src={cut_2} alt="" />
        </div>
      </div>
    </>

  )
}

export default Hero
