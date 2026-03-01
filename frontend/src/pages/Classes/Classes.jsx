import React from 'react'
import './Classes.css'
import gal_10 from '../../assets/gal_10.jpg'
import classes_img_2 from '../../assets/classes_img_2.jpeg'
import classes_img_5 from '../../assets/classes_img_5.jpeg'
import classes_img from '../../assets/classes_img.jpeg'
import classes_img1 from '../../assets/classes_img1.jpeg'
import classes_head from '../../assets/classes_head.jpg'
import banjo_class from '../../assets/banjo_class.jpeg'
import bassguitar_class from '../../assets/bassguitar_class.jpeg'
import cello_class from '../../assets/cello_class.jpeg'
import citar_class from '../../assets/citar_class.jpg'
import harp_class from '../../assets/harp_class.jpeg'
import lute_class from '../../assets/lute_class.jpg'
import mandolin_class from '../../assets/mandolin_class.jpeg'
import viola_class from '../../assets/viola_class.jpeg'
import violin_class from '../../assets/violin_class.jpeg'
import leadguitar_class from '../../assets/leadguitar_class.jpeg'
import new_class from '../../assets/new_class.png'
import { motion } from "framer-motion"
import Hero from '../../component/hero/Hero'


const Classes = () => {
    return (
        <div className='class-holdered'>
            <div className="class-header">
               <Hero/>
                <div className="class-intro">
                    <div className="content-img">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                            src={classes_head} alt="" />
                    </div>
                    <div className="class-content">
                        <motion.p
                            initial={{ x: 1, opacity: 0 }}
                            whileInView={{ x: -100, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                        >Right here in Justring</motion.p>
                        <motion.span
                            initial={{ x: 1, opacity: 0 }}
                            whileInView={{ x: -100, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}


                            className='p-above'>We have the best Classes that can unlock your Talent</motion.span>
                        <motion.p
                            initial={{ x: 1, opacity: 0 }}
                            whileInView={{ x: -100, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className='p-below'>we have the power to help talented students realise their potential.
                            With your support, we can help new generations discover, develop and master their
                            craft – for the whole world to enjoy.</motion.p>
                    </div>
                    <div className="class-content-below">
                    </div>
                </div>
            </div>
            <div className="class-container">
                <div className="class-holder">
                    <div className="class-left">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                            src={viola_class} alt="" />
                    </div>
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}

                        className="class-right">
                        <h1>Viola</h1>
                        <p>The viola is a string instrument, typically played with a bow, and is a member of the violin family.
                            It is larger than a violin and has a lower, deeper tone. The viola is often considered the middle
                            voice in the string section, sitting between the violin and the cello.</p>
                        <button>Sign up Now</button>
                    </motion.div>
                </div>
                <div className="class-holder">
                    <div className="class-left">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.3 }}

                            src={bassguitar_class} alt="" />
                    </div>
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}

                        className="class-right">
                        <h1>Bass Guitar</h1>
                        <p>The bass guitar, also known as the electric bass, is a stringed instrument in the guitar family,
                            characterized by its lower pitch range compared to standard guitars. It's a foundational instrument
                            in many musical genres, providing the low-end rhythm and harmonic foundation for a band.</p>
                        <button>Sign up Now</button>
                    </motion.div>
                </div>
                <div className="class-holder">
                    <div className="class-left">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                            src={violin_class} alt="" />
                    </div>
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}

                        className="class-right">
                        <h1>Violin</h1>
                        <p>The violin is a string instrument known for its high, expressive range and is a foundational instrument
                            in many musical genres. It has a hollow wooden body and four strings tuned in perfect fifths
                            (G3, D4, A4, E5). The sound is produced by drawing a bow across the strings or plucking them with fingers
                            (pizzicato). </p>
                        <button>Sign up Now</button>
                    </motion.div>
                </div>
                <div className="class-holder">
                    <div className="class-left">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                            src={leadguitar_class} alt="" />
                    </div>
                    <motion.div

                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}

                        className="class-right">
                        <h1>Lead Guitar</h1>
                        <p>Lead guitar, often referred to as solo guitar, is a musical part played by a guitarist that focuses
                            on melodies, instrumental fills, and solos, typically played in a higher register than the rhythm guitar.
                            It's the part that often takes the melodic lead, similar to a vocalist, in many musical styles like rock,
                            pop, and metal. </p>
                        <button>Sign up Now</button>
                    </motion.div>
                </div>
                <div className="class-holder">
                    <div className="class-left">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                            src={banjo_class} alt="" />
                    </div>
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}

                        className="class-right">
                        <h1>Banjo</h1>
                        <p>The banjo is a stringed musical instrument, typically with five strings, a circular body, and a long neck.
                            It's known for its distinctive sound and is used in various genres like bluegrass, folk, and Irish music.
                            The banjo's origins can be traced back to West Africa, with instruments brought to the Americas by
                            enslaved people. </p>
                        <button>Sign up Now</button>
                    </motion.div>
                </div>
                <div className="class-holder">
                    <div className="class-left">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                            src={cello_class} alt="" />
                    </div>
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}

                        className="class-right">
                        <h1>Cello</h1>
                        <p>The cello is a large, bowed string instrument known for its rich, resonant tone and expressive
                            capabilities. It belongs to the violin family and is the second largest member, typically played
                            while seated, with its endpin resting on the floor. Cellos are crucial in orchestras, chamber
                            ensembles, and as solo instruments, often delivering both melodic and bass lines. </p>
                        <button>Sign up Now</button>
                    </motion.div>
                </div>
                <div className="class-holder">
                    <div className="class-left">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                            src={citar_class} alt="" />
                    </div>
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}

                        className="class-right">
                        <h1>Sitar</h1>
                        <p>The sitar is a plucked stringed instrument, a type of lute, that is central to Hindustani classical
                            music in India. It's characterized by its long neck, gourd-shaped resonating chamber, and multiple
                            strings (typically 11 to 20). The sitar's unique sound is achieved through the interaction of melody,
                            drone, and sympathetic strings. </p>
                        <button>Sign up Now</button>
                    </motion.div>
                </div>
                <div className="class-holder">
                    <div className="class-left">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                            src={harp_class} alt="" />
                    </div>
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}

                        className="class-right">
                        <h1>Harp</h1>
                        <p>The harp is a stringed musical instrument known for its distinctive triangular frame and
                            plucked strings. It's one of the oldest musical instruments, with origins tracing back to
                            ancient civilizations. Modern harps come in various sizes and types, including lever
                            harps and pedal harps, each suited for different musical genres. </p>
                        <button>Sign up Now</button>
                    </motion.div>
                </div>
                <div className="class-holder">
                    <div className="class-left">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                            src={lute_class} alt="" />
                    </div>
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}

                        className="class-right">
                        <h1>Lute</h1>
                        <p>The lute is a plucked string instrument with a distinctive pear-shaped body, a fretted neck,
                            and a head with tuning pegs that are typically angled backward. It was a popular instrument
                            in Europe, particularly during the Renaissance and Baroque periods. The lute is known for its
                            versatility, capable of accompanying songs, dances, and also being used for solo performances. </p>
                        <button>Sign up Now</button>
                    </motion.div>
                </div>
                <div className="class-holder">
                    <div className="class-left">
                        <motion.img
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                            src={mandolin_class} alt="" />
                    </div>
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7 }}

                        className="class-right">
                        <h1>Mandolin</h1>
                        <p>The mandolin is a stringed musical instrument, generally plucked with a pick, belonging to the lute family.
                            It typically has four courses of paired strings, tuned in unison (like a violin), totaling eight strings.
                            It's known for its bright, sparkling sound and versatility in various musical genres, from classical and
                            folk to bluegrass and rock. </p>
                        <button>Sign up Now</button>
                    </motion.div>
                </div>
            </div>

        </div >
    )
}

export default Classes
