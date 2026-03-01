import React from 'react'
import './Contact.css'
import contact_guitar from '../../assets/contact_guitar.jpg'
import bandr from '../../assets/bandr.jpg'
import research from '../../assets/research.jpg'
import lec_1 from '../../assets/lec_1.jpg'
import lec_2 from '../../assets/lec_2.jpg'
import lec_3 from '../../assets/lec_3.jpg'
import lec_4 from '../../assets/lec_4.jpg'
import { easeInOut, easeOut, motion } from "framer-motion"
import { useState } from 'react';
import axios from "axios"

const Contact = () => {
  const [token, setToken] = useState("")
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    programOfInterest: ""
  })

  const formHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({ ...data, [name]: value }))
  }


  const onSubmitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append("firstName", data.firstName)
    formData.append("lastName", data.lastName)
    formData.append("email", data.email)
    formData.append("phone", Number(data.phone))
    formData.append("programOfInterest", data.programOfInterest)

    const response = await axios.post("http://localhost:5000/api/form/info", data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)

      
    })
          console.log(response);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        programOfInterest: ""
      })
    }
    else {
      alert(response.data.message)
    }


  }
  return (
    <div className='contact'>
      <div className="contact-container">
        <div className="contact-header">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="contact-header-left">
            <h1>Own a piece of Lead guitar</h1>
            <p>Enter your promo code for your chance to win Kurt Cobain’s plectrum guitar, used for the 1993
              MTV Unplugged performance.All proceeds to the prize draw directly support students and
              the Future Music Fund.</p>
            <input type="text" placeholder='Enter Code Here..' />
            <button>Submit</button>
          </motion.div>

          <div className="contact-header-right">
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              src={contact_guitar} alt="" />
          </div>
        </div>

        <div className="form">
          <div className="form-container">
            <img src={bandr} alt="" />
            <div className="form-heading">
              <h1>TURN YOUR PASSION FOR MUSICAL INSTRUMENT INTO A CAREER</h1>
              <p>Enter your info below for program options, scholarships, and next steps, or call us at +2348055380547</p>
            </div>
            <form onSubmit={onSubmitHandler} className="input-form">
              <div className="first-input">
                <input name='firstName' onChange={formHandler} value={data.firstName} type="text" placeholder='Firstname' />
                <input name='lastName' onChange={formHandler} value={data.lastName} type="text" placeholder='lastname' />
              </div>
              <div className="first-input">
                <input name='email' onChange={formHandler} value={data.email} type="text" placeholder='Email' />
                <input name='phone' onChange={formHandler} value={data.phone} type="Number" placeholder='Phone' />
              </div>
              <div className="first-input">
                <input name='programOfInterest' onChange={formHandler} value={data.programOfInterest} type="text" placeholder='Program of interest' />
                <button type='submit'>Request Info</button>
              </div>
              <div className="form-terms">
                <p>By submitting this form, I authorize Justring (JT) to make or allow the placement
                  of calls, emails, and texts to me at the phone number that I have provided, including through
                  the use of automated technology, or a prerecorded or artificial voice. I understand that I am
                  not required to provide my phone number as a condition of purchasing any property, goods, or
                  services. I agree to the terms of MI’s Privacy Policy. MI will not sell or rent your
                  information to third parties, and you may unsubscribe at any time.</p>
              </div>
            </form>
          </div>
        </div>

        <div className="research">
          <div className="research-img">
            <motion.h1
              initial={{ x: 1, opacity: 0 }}
              whileInView={{ x: -100, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >Research enquiries</motion.h1>
            <img src={research} alt="" />
            <div className="research-content">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >If you are have any queries about research at the Justring, please feel free to get in contact with us.</motion.span><br /><br />
              <motion.p
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: -100, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >Questions about our research community and our current research projects should be sent
                to our Research and Knowledge Exchange Manager. <br /><br />If you are a prospective doctoral student
                with an enquiry about our doctoral degrees, please contact our Head of Research.
                Alternatively, our Admissions team can help you with more general application enquiries.<br /><br />
                Enquiries about our archives, collections and past students should be sent to the Library.
                If you're interested in a musical instrument, please contact the Museum. <br /><br />For all press and
                media related enquiries please contact our Press team.</motion.p>
            </div>
          </div>
        </div>
        <div className="research-info">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="reseach-info-details">
            <h1>Adeyemo Ooeyemi</h1>
            <h3>Research and Knowledge Exchange Manager</h3>
            <span>+2348064033612</span><br />
            <p>reseach@justring.com</p>
            <div className="research-image">
              <img src={lec_1} alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="reseach-info-details">
            <h1>Faith Ibem</h1>
            <h3>Head of Research and Doctoral Programmes</h3>
            <span>+2347073033612</span><br />
            <p>reseach@justring.com</p>
            <div className="research-image">
              <img src={lec_2} alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="reseach-info-details">
            <h1>Segun Adediran</h1>
            <h3>Admissions and general audition Manager</h3>
            <span>+2348064033612</span><br />
            <p>reseach@justring.com</p>
            <div className="research-image">
              <img src={lec_3} alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="reseach-info-details">
            <h1>Omolisa Olayemi</h1>
            <h3>Press and media Manager</h3>
            <span>+2348064033612</span><br />
            <p>reseach@justring.com</p>
            <div className="research-image">
              <img src={lec_4} alt="" />
            </div>
          </motion.div>
        </div>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7928.804920834356!2d3.702249776065406!3d6.470596053377883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bff5d1f99b153%3A0x21940ac8f95390d4!2sRoyal%20Bliss%20Event%20Centre!5e0!3m2!1sen!2sng!4v1754871984492!5m2!1sen!2sng"
          width="90%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div className="local-address">
          <div className="local-address-contain">
            <h1>Visit us</h1>
            <div className="local-address-details">
              <h2>Lagos :</h2> <span>office no. 502, Royal Bliss Plaza, SNo 5/1/1, Awoyaya, Ibeju-Lekki</span>
            </div>
            <div className="local-address-details">
              <h2>Ibadan :</h2>
              <span>House no. 42, Kunle Idowu street, Mokola, Ibadan West</span>
            </div>
            <div className="local-address-details">
              <h2>Lagos :</h2>
              <span>office no. 64, Mega tower, Idowu Martins, Ikeja</span>
            </div>
            <div className="local-address-details">
              <h2>Akure :</h2>
              <span>office no. 34, Marine tower, Ishogbon, Akure-West</span>
            </div>
          </div>

          <div className="address-right">
            <h1>Call us</h1>
            <div className="local-address-detail">
              <h2>Lagos :</h2> <span>+234809046573</span>
            </div>
            <div className="local-address-detail">
              <h2>Ibadan :</h2>
              <span>+234802546573</span>
            </div>
            <div className="local-address-detail">
              <h2>Lagos :</h2>
              <span>+234803646573</span>
            </div>
            <div className="local-address-detail">
              <h2>Akure :</h2>
              <span>+234803206533</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact