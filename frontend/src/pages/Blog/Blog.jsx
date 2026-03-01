import React from 'react'
import './Blog.css'
import union_image from '../../assets/union_image.jpg'
import disable from '../../assets/disable.jpg'
import counsel from '../../assets/counsel.jpeg'
import health from '../../assets/health.jpg'
import international from '../../assets/international.jpg'
import belonging from '../../assets/belonging.jpg'
import event from '../../assets/event.jpg'
import solo from '../../assets/solo.jpg'
import { easeInOut, easeOut, motion } from "framer-motion"
import Hero from '../../component/hero/Hero'

const Blog = () => {
    return (
        <div className='blog'>
          <Hero/>
            <div className="blog-container-below-head">
                <div className="blog-topic">
                    <h2>Our Activities and Offers</h2>
                    <hr className=' blog-line'/>
                </div>
                <div className="blog-container-below">
                    <motion.div
                        initial={{ y: -100 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="union-image">
                        <img src={union_image} alt="" />
                        <div className="union-content">
                            <h2>The Students’ Union plays a key role in Academy life</h2>
                            <p>Whether you’d like to join a specific club, need advice from a friendly face or
                                just want to make sure you don’t miss out on the best social events, we’re here
                                for you.Every enrolled student is automatically a member of the Students’ Union
                                (SU). The academic year starts with Freshers’ Week, which kickstarts our wide
                                range of social events.</p>
                        </div>
                        <button>Read More</button>
                    </motion.div>
                    <motion.div
                        initial={{ y: -100 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="disable-image">
                        <img src={disable} alt="" />
                        <div className="disable-content">
                            <h2>the services and facilities we offer for disabled students</h2>
                            <p>The Academy recognises that a diverse community of staff and students affords
                                artistic, educational, social and organisational benefits. We are committed
                                to promoting an environment which values diversity, and which identifies and
                                removes barriers that prevent people from fulfilling their potential at the
                                Academy.</p>
                        </div>
                        <button>Read More</button>
                    </motion.div>
                    <motion.div
                        initial={{ y: -100 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}

                        className="counsel-image">
                        <img src={counsel} alt="" />
                        <div className="counsel-content">
                            <h2>the services and facilities we offer for disabled students</h2>
                            <p>The Academy recognises that a diverse community of staff and students affords
                                artistic, educational, social and organisational benefits. We are committed
                                to promoting an environment which values diversity, and which identifies and
                                removes barriers that prevent people from fulfilling their potential at the
                                Academy.</p>
                        </div>
                        <button>Read More</button>
                    </motion.div>

                </div>
            </div>
            <div className="blog-container-below2">
                <motion.div
                    initial={{ y: -100 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="health-image">
                    <img src={health} alt="" />
                    <div className="health-content">
                        <h2>We work with a broad range of medical specialists who deal with difficulties related</h2>
                        <p>All students, irrespective of age, are treated equally and provided with the same support
                            facilities, both academic and pastoral. However, where special arrangements need to be
                            put in place for students under 18, the Academy will ensure that these are provided.</p>
                    </div>
                    <button>Read More</button>
                </motion.div>
                <motion.div
                    initial={{ y: -100 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="international-image">
                    <img src={international} alt="" />
                    <div className="international-content">
                        <h2>Studying abroad is an exciting prospect and there can be a lot to organise</h2>
                        <p>We’ve put together everything you need to know, so you’ll feel prepared for your new adventure.
                            When you come here, you will become part of a warm, supportive family of students and staff.
                            You will form lifelong friendships with people from different countries and backgrounds.</p>
                    </div>
                    <button>Read More</button>
                </motion.div>
                <motion.div
                    initial={{ y: -100 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="belonging-image">
                    <img src={belonging} alt="" />
                    <div className="belonging-content">
                        <h2>We want our students, staff and visitors to value not only what we have in common.</h2>
                        <p>A diverse Academy is an Academy with a rich culture of creativity and innovation.
                            We want this to be a place where everyone feels like they belong.We have therefore
                            brought together our work in the areas of Equality, Diversity and Inclusion (EDI)
                            under the umbrella of Belonging. </p>
                    </div>
                    <button>Read More</button>
                </motion.div>

            </div>

            <div className="term-container-main">
                <div className="topic-head">
                    <motion.hr
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.6 }} />
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6 }}

                        className="term-container-topic"><h1>Term dates</h1></motion.div>
                    <motion.hr
                        initial={{ x: 0 }}
                        whileInView={{ x: -100 }}
                        transition={{ duration: 0.6 }}
                        className='new' />
                </div>
                <motion.div
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="term-container-header">
                    <div className="term-container-header-left">
                        <h1>Academic year 2024/25</h1>
                    </div>

                    <div className="term-container-header-right">
                        <h3>Summer Term</h3>
                        <span>Tuesday 22 April – Sunday 6 July 2025</span>

                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    whileInView={{ x: -100 }}
                    transition={{ duration: 0.6 }}
                    className="term-container-header-below">
                    <div className="term-container-header-below-left">
                        <h1>Academic year 2026/27</h1>
                    </div>

                    <div className="term-container-header-below-right">
                        <div className="term-container-header-below-right-details">
                            <h3>Enrolment Week</h3>
                            <span>Monday 7 September – Friday 11 September 2026</span>
                        </div>
                        <div className="term-container-header-below-right-details">
                            <h3>Autumn Term</h3>
                            <span>Monday 14 September – Friday 4 December 2026</span>
                        </div>
                        <div className="term-container-header-below-right-details">
                            <h3>Spring Term</h3>
                            <span>Monday 4 January – Friday 19 March 2027</span>
                        </div>
                        <div className="term-container-header-below-right-details">
                            <h3>Summer Term</h3>
                            <span>Monday 12 April – Sunday 4 July 2027</span>
                        </div>
                        <div className="term-container-header-below-right-details">
                            <h3>Summer Term</h3>
                            <span>Tuesday 22 April – Sunday 6 July 2025</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="event">
                <div className="event-topic-head">
                    <motion.hr
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6 }}

                        className="event-topic"><h1>Up Coming Event</h1></motion.div>
                    <motion.hr
                        initial={{ x: 0 }}
                        whileInView={{ x: -100 }}
                        transition={{ duration: 0.6 }}
                        className='new' />
                </div>
                <div className="event-holder">
                    <div className="event-container">
                        <motion.img
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.6, ease: easeOut }}

                            src={event} alt="" />
                        <div className="event-detail">
                            <motion.h3
                                initial={{ x: 0 }}
                                whileInView={{ x: -100 }}
                                transition={{ duration: 0.5, ease: easeInOut }}
                            >Mon 20 Oct, 6:30pm</motion.h3>
                            <motion.h1
                                initial={{ x: 0 }}
                                whileInView={{ x: -100 }}
                                transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }}
                            >Ochaesra Festival</motion.h1>
                            <motion.p
                                initial={{ x: 0 }}
                                whileInView={{ x: -100 }}
                                transition={{ duration: 0.5, delay: 0.3, ease: easeInOut }}
                            >Duke's Hall</motion.p>
                        </div>
                        <motion.button
                            initial={{ x: 0 }}
                            whileInView={{ x: -100 }}
                            transition={{ duration: 0.5, delay: 0.4, ease: easeInOut }}
                        >More info</motion.button>
                    </div>

                    <div className="solo-container">
                        <motion.img
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.6, ease: easeOut }}
                            src={solo} alt="" />
                        <div className="solo-detail">
                            <motion.h3
                                initial={{ x: 0 }}
                                whileInView={{ x: -100 }}
                                transition={{ duration: 0.5, ease: easeInOut }}
                            >Fri 14 Aust, 12:30pm</motion.h3>
                            <motion.h1
                                initial={{ x: 0 }}
                                whileInView={{ x: -100 }}
                                transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }}
                            >Group Performance</motion.h1>
                            <motion.p
                                initial={{ x: 0 }}
                                whileInView={{ x: -100 }}
                                transition={{ duration: 0.5, delay: 0.3, ease: easeInOut }}

                            >Concert Room</motion.p>
                        </div>
                        <motion.button
                            initial={{ x: 0 }}
                            whileInView={{ x: -100 }}
                            transition={{ duration: 0.5, delay: 0.4, ease: easeInOut }}
                        >More info</motion.button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Blog

