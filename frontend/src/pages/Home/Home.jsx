import React from 'react'
import './Home.css'
import Hero from '../../component/hero/Hero'
import Intro from '../../component/Intro/Intro'
import Outro from '../../component/outro/Outro'
import Gallery from '../../component/Gallery/Gallery'
import Testimonial from '../../component/Testimonial/Testimonial'
import Promo from '../../component/Promo/Promo'
const Home = () => {
    return (
        <div>
         <Hero/>
         <Intro/>
         <Outro/>
         <Gallery/>
         <Testimonial/>
         <Promo/> 
        </div>
    )
}

export default Home
