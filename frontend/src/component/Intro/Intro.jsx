import React from 'react'
import './Intro.css'
import foto_2 from "../../assets/foto_2.png"
import { motion } from "framer-motion"

const Intro = () => {
  return (
    <div className="intro-holder">
      <div className='intro_container'>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -100 }}
          transition={{ duration: 0.5 }}

          className="intro_left">
          <h2>
            Welcome to Justring
          </h2>


          <p >where we provide Strin learning to students in an accessible
            and safe manner is a top priority. Our online, one-on-one music class allows students to take music
            lessons remotely. Right here we furthers your musical journey in a way that prioritizes flexibility
            and well-being. Weekly online instruction is conducted by our expert instructors in a safe virtual
            lesson room. we have remained dedicated to teaching string instrument and fostering a deep passion for
            the instrument. While our campus resides in Awoyaya, the heart of the entertainment industry, we are
            thrilled to bring our world-class curriculum to aspiring string lovers worldwide through our school.
            Our renowned programs continues to provide the essential skills necessary for a successful and
            exhilarating music career. Our online classes are led by active professional players who impart
            comprehensive knowledge and expertise in guitar fundamentals. From performance techniques to advanced
            skills, ear training, melodic soloing, and diverse contemporary styles, our instructors guide students
            in mastering the essentials.</p>
        </motion.div>

        <div className="intro_right">
          <motion.img
            initial={{ y: 0 }}
            whileInView={{ y: -100 }}
            transition={{ duration: 0.5 }}
            src={foto_2} alt="" />


          <motion.div
            initial={{ y: 1 }}
            whileInView={{ y: -50 }}
            transition={{ duration: 0.7 }}

            className="intro_button">
            <button className='button_1'>Explore Our Facilities</button><br />
            <button className='button_2'>Enrol for a Class</button><br />
            <button className='button_3'>Request For More Info</button>
          </motion.div>
        </div>

      </div >
      <hr className='intro-lined'/>
    </div>

  )
}

export default Intro
