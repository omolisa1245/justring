import React from 'react'
import './About.css'
import img from '../../assets/img-y.jpg'
import image from '../../assets/image.jpg'
import lead_guitar from '../../assets/lead_guitar.jpeg'
import gal_8 from '../../assets/gal_8.jpg'
import Team from '../../component/Team/Team'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='about'>
      <div className="about-main">
        <div className="about-bac">
          <div className="about-cont">
            <div className="heading-text">
              <h1>About</h1>
              <motion.p
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.7 }}

                className='heading-p'>Justring School is one of the world's premier String learning
                conservatories for all kinds of music....</motion.p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}

          className="color-bac">
        </motion.div>

        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="about-word">
          <h1>Our Story</h1>
          <p>Justring is committed to providing fair and equitable consideration of all individuals without
            regard to race, color, religion, ancestry, age, national origin, place of birth, gender, sexual
            orientation, gender identity or expression, disability, genetic information, or status as a member
            of the armed forces or veteran of the armed forces, or any other category protected by federal, state,
            or local law. Diversity is a source of strength for the institution. Equal employment opportunity (EEO)
            achieves and sustains our commitment to diversity.</p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="image-yellow">
          <img src={img} alt="" />
        </motion.div>

        <div className="ab-main">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}

          >OUR PHILOSOPHY</motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}

            className="philo-cont">
            <div className="img-yellow">
              <img src={image} alt="" />
            </div>
            <div className="philo">
              <p>The Music School offers comprehensive musicianship through active learning for children and adults.
                Our music educators are highly qualified and share a love of teaching. Our curriculum offers group
                experiences, private lessons, ensemble participation, theater, and camps. Our Music School family
                is a mission outreach of Sunnyvale Presbyterian Church, and we love sharing our love of music! We
                believe that learning music can be FUN, and we believe in the effectiveness of learning in groups.
                Group experiences offer students the opportunity to participate in comprehensive musical learning
                through shared experiences. Parents are invited for periodic class visits and performances, and participate with productions, fundraisers, and special events. Our class curricula have been especially designed for each level, providing appropriate and innovative learning materials for each age group. Each curriculum provides a logical progression of study as students continue through our courses.</p>
            </div>
          </motion.div>
          
          <div className="philo-r">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="ourvalue">
              <div className="ourvalue-left">
                <p>Most of our class students, whether majoring in guitar or not, learn basic guitar skills,
                  because the guitar provides the most graphical representation of how music is organized
                  Our private and small group teachers individualize the approach that best suits each
                  student. It is important to us that we provide students with a good understanding of music
                  reading, not just playing by finger number, hand position, or rote. In addition to Just Playing,
                  the basic music-reading method used by the whole school, students will study a variety of
                  repertoire pieces based on their interests and the best choices to help them progress,
                  including classical, folk, and fun music. Students are given a range of performance opportunities,
                  including preschool programs, choral festivals and concerts, musical theater productions, student
                  recitals, and community performances.</p>
              </div>
              <div className="ourvalue-right">
                <img src={lead_guitar} alt="" />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="value-topic">
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: -100, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >Our Values</motion.h1>
        </div>
        <div className="value-below">
          <motion.p
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: -100, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >Justring provides the highest-quality educational experience in music and String learning to prepare
            students to fully realize their creative and career potential, and to promote the power of the arts
            to better our world.At Justring, we believe that an education in the Music deepens cultural awareness
            and empathy, enhances self-confidence and personal growth, and develops the openness and curiosity
            essential to creativity. <br /><br />Our ability as a community to bring these beliefs to life is built on a
            shared commitment to uphold these fundamental values We approach diversity as a philosophy and as an objective. Central to our purpose is our commitment to attracting the widest array of music innovators into the college community and providing an environment that supports their creative process. We also seek to integrate these values into teaching and decision-making, as our students are influenced through leadership as much as through curriculum.
            Cultural diversity is integral to the mission of Justring simply because cultural diversity is integral to music itself. Innovators from diverse backgrounds and cultures have created the music studied here. An essential part of a Justring is gaining an appreciation of the rich variety and interdependence of the cultural traditions from which the music that students explore originates.We must be a community in which every member’s voice is valued and respected. A diverse, inclusive work and learning environment is essential to maintaining our role as a leader in contemporary music education. It is imperative that we take specific steps to attract and retain the widest array of talented musicians and provide an environment that supports and nurtures their creative process. <br /><br />The fulfillment of our mission—to educate, train, and develop students to excel in music as a career—will be demonstrated in their influence both on the future of music and on the larger culture.We view diversity holistically, understanding that the definition is constantly evolving. Our definition of diversity includes race, color, nationality, ethnicity, class, religion, disability, age, sex, gender identity, gender expression, and sexual orientation. We also know that a diversity of ideas, approaches, disciplines, and learning and musical styles are essential to inclusion and equity. The integration of myriad cultural values and perspectives into what we do at all levels, from teaching to decision-making, is critical.Many challenges lie ahead in all areas.<br /><br /> We believe that increased diversity will support our strategic objective of attracting the highest-quality students, faculty, and staff to Berklee. To accomplish this, we must create a welcoming and supportive multicultural atmosphere for all members of our community. This focus is not the work of any one individual or office; it is the work of everyone. In this spirit, we will encourage a campus-wide climate of respect, openness, and awareness that celebrates and values our diversity.</motion.p>
        </div>
        <div className="team-in">
          <div className="overlay-team">
            <div className="team-cont">
              <Team />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
