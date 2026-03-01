import { React } from 'react'
import './Gallery.css'
import gal_1 from '../../assets/gal_1.jpg'
import gal_2 from '../../assets/gal_2.jpg'
import gal_3 from '../../assets/gal_3.jpg'
import gal_4 from '../../assets/gal_4.jpg'
import gal_5 from '../../assets/gal_5.jpg'
import gal_6 from '../../assets/gal_6.jpg'
import gal_7 from '../../assets/gal_7.jpg'
import gal_8 from '../../assets/gal_8.jpg'
import gal_9 from '../../assets/gal_9.jpeg'
import gal_10 from '../../assets/gal_10.jpg'
import gal_11 from '../../assets/gal_11.jpeg'
import gal_12 from '../../assets/gal_12.jpeg'
import { motion } from "framer-motion"

const Gallery = () => {


  return (

    <>
      <div className="gallery-head">
        <motion.div 
         initial={{ y: -50}}
         whileInView={{ y: 1}}
         transition={{ duration: 0.7 }}

        className="gallery_title">Explore Our Facilities</motion.div>


        <div className='gallery_container'>
          <div
           initial={{ opacity: 0, scale: 0.5 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.9 }}
          className="gallery_image">
            <div className="img-1">
              <h1>Note worthy</h1>
            </div>

            <div className="img-2">
              <img src={gal_1} alt="" />
              <span>Our 5000 capacity Event hall </span>
            </div>
          </div>

          <div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut"}}

          className="gallery_image-1">
            <div className="img-3">
              <img src={gal_2} alt="" />
              <span>The School structure from the back gate</span>
            </div>
            <div className="gallery_image-1-right">
              <div className="img-4">
                <div className="img-4-1">
                  <img src={gal_3} alt="" />
                  <span>Lecture room for advance learning</span>
                </div>
                <div className="img-4-2">
                  <img src={gal_4} alt="" />
                  <span></span>
                </div>

              </div>
              <div className="img-5">
                <div className="img-5-1">
                  <img src={gal_5} alt="" />
                  <span>Group Solo performance by our foreign student</span>
                </div>
                <div className="img-5-2">
                  <img src={gal_6} alt="" />
                  <span>Winner of the last group competition</span>
                </div>

              </div>
            </div>
          </div>
          <div 
          className="top-white"><motion.h2 
          initial={{ y: -50}}
           whileInView={{ y: 1}}
           transition={{ duration: 0.7 }}
          >Developing human potential one note at a time</motion.h2></div>
          <div 
           initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut"}}

          
          className="gallery_image-1-down">
            <div className="img-6">
              <div className="img-7-1">
                <img src={gal_7} alt="" />
                <span>Pre - recording rehearsing section</span>
              </div>
              <div className="img-8-2">
                <img src={gal_8} alt="" />
                <span>Synthetic functional studio for recording song</span>
              </div>
            </div>
            <div className="img-7">
             <div className="img-9-1">
                <img src={gal_9} alt="" />
                <span>Well equiped classroom for biginners</span>
              </div>
              <div className="img-10-2">
                <img src={gal_10} alt="" />
                <span>Well equiped classroom for intermediate student</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Gallery
