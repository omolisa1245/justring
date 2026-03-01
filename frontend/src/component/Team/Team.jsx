import React, { useRef } from 'react'
import './Team.css'
import lec_1 from '../../assets/lec_1.jpg'
import lec_2 from '../../assets/lec_2.jpg'
import lec_3 from '../../assets/lec_3.jpg'
import lec_4 from '../../assets/lec_4.jpg'
import lec_5 from '../../assets/lec_5.jpg'
import lec_6 from '../../assets/lec_6.jpg'
import student_5 from '../../assets/student_5.jpeg'
import student_6 from '../../assets/student_6.jpeg'
import student_7 from '../../assets/student_7.jpeg'
import student_8 from '../../assets/student_8.jpeg'
import student_4 from '../../assets/student_4.jpeg'
import whatsapp_icon from '../../assets/whatsapp_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaArrowLeft, FaArrowRight } from "react-icons/fa";




const Team = () => {


  const team_image = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -70) {
      tx -= 5;
    }
    team_image.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 5;
    }
    team_image.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className='team_container'>
      <div className="team_heading">
        <motion.h4
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: -100, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >Our Team</motion.h4>
        <motion.h2
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: -100, opacity: 1 }}
          transition={{ duration: 0.7,delay: 0.3 }}
        >Meet Our Facilitators</motion.h2>
        <motion.p
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: -100, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >Together with our team we have the power to help talented students realise their potential.
          With your support, we can help new generations discover, develop and master their craft – for
          the whole world to enjoy.</motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="team_image_container">
        <div className="team_image">
          <FaArrowRight className='arrow_right' onClick={slideForward} />
          <FaArrowLeft className='arrow_left' onClick={slideBackward} />

          <ul ref={team_image}>
            <div className="slide">
              <img className='image_p' src={lec_1} alt="" />
              <p>Ademowa opeyemi</p>
              <span>Mandolin Teacher</span>
              <div className="social_media">
                <FaLinkedin className='fal' />
                <FaTwitter className='fal' />
                <FaInstagram className='fal' />
                <FaFacebook className='fal' />
              </div>
            </div>
            <div className="slide">
              <img className='image_p' src={lec_2} alt="" />
              <p>Ademowa opeyemi</p>
              <span>Mandolin Teacher</span>
              <div className="social_media">
                <FaLinkedin className='fal' />
                <FaTwitter className='fal' />
                <FaInstagram className='fal' />
                <FaFacebook className='fal' />
              </div>
            </div>
            <div className="slide">
              <img className='image_p' src={lec_3} alt="" />
              <p>Ademowa opeyemi</p>
              <span>Mandolin Teacher</span>
              <div className="social_media">
                <FaLinkedin className='fal' />
                <FaTwitter className='fal' />
                <FaInstagram className='fal' />
                <FaFacebook className='fal' />
              </div>
            </div>
            <div className="slide">
              <img className='image_p' src={lec_4} alt="" />
              <p>Ademowa opeyemi</p>
              <span>Mandolin Teacher</span>
              <div className="social_media">
                <FaLinkedin className='fal' />
                <FaTwitter className='fal' />
                <FaInstagram className='fal' />
                <FaFacebook className='fal' />
              </div>
            </div>
            <div className="slide">
              <img className='image_p' src={student_4} alt="" />
              <p>Ademowa opeyemi</p>
              <span>Mandolin Teacher</span>
              <div className="social_media">
                <FaLinkedin className='fal' />
                <FaTwitter className='fal' />
                <FaInstagram className='fal' />
                <FaFacebook className='fal' />
              </div>
            </div>
            <div className="slide">
              <img className='image_p' src={student_5} alt="" />
              <p>Ademowa opeyemi</p>
              <span>Mandolin Teacher</span>
              <div className="social_media">
                <FaLinkedin className='fal' />
                <FaTwitter className='fal' />
                <FaInstagram className='fal' />
                <FaFacebook className='fal' />
              </div>
            </div>
            <div className="slide">
              <img className='image_p' src={student_6} alt="" />
              <p>Ademowa opeyemi</p>
              <span>Mandolin Teacher</span>
              <div className="social_media">
                <FaLinkedin className='fal' />
                <FaTwitter className='fal' />
                <FaInstagram className='fal' />
                <FaFacebook className='fal' />
              </div>
            </div>
            <div className="slide">
              <img className='image_p' src={student_7} alt="" />
              <p>Ademowa opeyemi</p>
              <span>Mandolin Teacher</span>
              <div className="social_media">
                <FaLinkedin className='fal' />
                <FaTwitter className='fal' />
                <FaInstagram className='fal' />
                <FaFacebook className='fal' />
              </div>
            </div>
            <div className="slide">
              <img className='image_p' src={student_8} alt="" />
              <p>Ademowa opeyemi</p>
              <span>Mandolin Teacher</span>
              <div className="social_media">
                <FaLinkedin className='fal' />
                <FaTwitter className='fal' />
                <FaInstagram className='fal' />
                <FaFacebook className='fal' />
              </div>
            </div>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default Team
