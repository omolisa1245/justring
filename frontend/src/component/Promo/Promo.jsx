import React from 'react'
import './Promo.css'
import contact_guitar from '../../assets/contact_guitar.jpg'

const Promo = () => {
    return (
        <div className='promo-cont'>
            <div className="promo-header">
                <div className="promo-contact-header-left">
                    <h1>Own a piece of Lead guitar</h1>
                    <p>Register now and get a chance to win Kurt Cobain’s plectrum guitar, used for the 1993
                        MTV Unplugged performance.All proceeds to the prize draw directly support students and
                        the Future Music Fund.</p>
                    <button>Register now</button>
                </div>

                <div className="promo-contact-header-right">
                    <img src={contact_guitar} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Promo
