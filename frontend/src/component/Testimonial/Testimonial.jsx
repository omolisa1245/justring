import React from "react";
import './Testimonial.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import student_5 from '../../assets/student_5.jpeg'
import student_6 from '../../assets/student_6.jpeg'
import student_7 from '../../assets/student_7.jpeg'
import student_8 from '../../assets/student_8.jpeg'
import student_4 from '../../assets/student_4.jpeg'
import lec_4 from '../../assets/lec_4.jpg'
import lec_5 from '../../assets/lec_5.jpg'
import lec_6 from '../../assets/lec_6.jpg'
import { motion } from "framer-motion"





const Testimonial = () => {
    return (
           <div className="testimonial-body">
            <motion.div 
             initial={{ x: -100}}
             whileInView={{ x: 0}}
             transition={{ duration: 0.7 }}
            
            className="testimonial_title">Student Review</motion.div>
            <div className="testimonial-head">
            <motion.div 
            initial={{ x: 0}}
            whileInView={{ x: -100}}
            transition={{ duration: 0.7 }}
            
            className="slider-container">
                <div className="test-container">
                    <div className="image-details">
                        <img className="image-s" src={student_4} alt="" />
                        <h3>Mike Bankole</h3>
                        <span>violin Player</span>
                    </div>
                    <p> Competent teachers who seem to be very “in touch” with teaching and learning.
                        I like the fact that they themselves are students, teach in some other capacity,
                        and are an active part of a community of artists. I feel these aspects bring a
                        different dynamic and passion to their teaching that a musician teaching at home
                        wouldn’t necessarily have, even though they might be a very talented. I like the
                        way Vivaldi offers different and unique opportunities for students to perform.
                        Thank you.
                    </p>
                </div>

                <div className="test-container">
                    <div className="image-details">
                        <img className="image-s" src={student_4} alt="" />
                        <h3>Emeka Collins</h3>
                        <span>Giutar Player</span>
                    </div>
                    <p> Competent teachers who seem to be very “in touch” with teaching and learning.
                        I like the fact that they themselves are students, teach in some other capacity,
                        and are an active part of a community of artists. I feel these aspects bring a
                        different dynamic and passion to their teaching that a musician teaching at home
                        wouldn’t necessarily have, even though they might be a very talented. I like the
                        way Vivaldi offers different and unique opportunities for students to perform.
                        Thank you.
                    </p>
                </div>

                <div className="test-container">
                    <div className="image-details">
                        <img className="image-s" src={student_5} alt="" />
                        <h3>Makinde Idowu</h3>
                        <span>Bass Guitar</span>
                    </div>
                    <p> Competent teachers who seem to be very “in touch” with teaching and learning.
                        I like the fact that they themselves are students, teach in some other capacity,
                        and are an active part of a community of artists. I feel these aspects bring a
                        different dynamic and passion to their teaching that a musician teaching at home
                        wouldn’t necessarily have, even though they might be a very talented. I like the
                        way Vivaldi offers different and unique opportunities for students to perform.
                        Thank you.
                    </p>
                </div>
            </motion.div>


            <motion.div 
              initial={{ x: -100}}
             whileInView={{ x: 0}}
             transition={{ duration: 0.7 }}
            
            className="slider-container-below">
                 <div className="test-container">
                    <div className="image-details">
                        <img className="image-s" src={student_6} alt="" />
                        <h3>Makinde Idowu</h3>
                        <span>Bass Guitar</span>
                    </div>
                    <p> Competent teachers who seem to be very “in touch” with teaching and learning.
                        I like the fact that they themselves are students, teach in some other capacity,
                        and are an active part of a community of artists. I feel these aspects bring a
                        different dynamic and passion to their teaching that a musician teaching at home
                        wouldn’t necessarily have, even though they might be a very talented. I like the
                        way Vivaldi offers different and unique opportunities for students to perform.
                        Thank you.
                    </p>
                </div>
                <div className="test-container">
                    <div className="image-details">
                        <img className="image-s" src={student_7} alt="" />
                        <h3>Makinde Idowu</h3>
                        <span>Bass Guitar</span>
                    </div>
                    <p> Competent teachers who seem to be very “in touch” with teaching and learning.
                        I like the fact that they themselves are students, teach in some other capacity,
                        and are an active part of a community of artists. I feel these aspects bring a
                        different dynamic and passion to their teaching that a musician teaching at home
                        wouldn’t necessarily have, even though they might be a very talented. I like the
                        way Vivaldi offers different and unique opportunities for students to perform.
                        Thank you.
                    </p>
                </div>
                <div className="test-container">
                    <div className="image-details">
                        <img className="image-s" src={student_8} alt="" />
                        <h3>Makinde Idowu</h3>
                        <span>Bass Guitar</span>
                    </div>
                    <p> Competent teachers who seem to be very “in touch” with teaching and learning.
                        I like the fact that they themselves are students, teach in some other capacity,
                        and are an active part of a community of artists. I feel these aspects bring a
                        different dynamic and passion to their teaching that a musician teaching at home
                        wouldn’t necessarily have, even though they might be a very talented. I like the
                        way Vivaldi offers different and unique opportunities for students to perform.
                        Thank you.
                    </p>
                </div>
            </motion.div>
            </div >
           </div>
    );
}

export default Testimonial
    ;
