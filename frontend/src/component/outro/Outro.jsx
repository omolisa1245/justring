import React from 'react'
import './Outro.css'
import intro from '../../assets/intro.jpg'
import { motion } from "framer-motion"

const Outro = () => {
  return (
    <div className='outro_container'>
      <div className="outro_left">
        <motion.img
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          src={intro} alt="" />


        <motion.div
          initial={{ y: 1 }}
          whileInView={{ y: -50 }}
          transition={{ duration: 0.7 }}
          className="outro_button">
          <button className='button_1'>Explore Our Facilities</button><br />
          <button className='button_2'>Enrol for a Class</button><br />
          <button className='button_3'>Request For More Info</button>
        </motion.div>
      </div>
      <div className="outro_right">
        <motion.h2 initial={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}>Where will your journey begin</motion.h2>
        <motion.p initial={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}>Justring is a musical instrument learning school for all skill levels, ages,
          and musical aspirations. With students ranging from toddlers to adults,
          School of Rock is where music students grow into real musicians We are
          teaching young minds how to think, how to problem solve, how to collaborate
          through music. We set high expectations for all students. We deliver a rigorous
          curriculum that demands musical and behavioral excellence. We root all of this in
          a strong culture of support.</motion.p>
      </div>
    </div>
  )
}

export default Outro
