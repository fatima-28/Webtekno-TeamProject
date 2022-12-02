import './Footer.scss'
import React from 'react'
import { Link } from 'react-router-dom'
//! Icons
import { BsInstagram } from 'react-icons/bs'
import { CiFacebook } from 'react-icons/ci'

import projectlogo from '../Header/Assets/projectlogo.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-logo-container">
                    <Link to=''>
                        <img src={projectlogo} alt="" />
                    </Link>
                </div>
                <div className="footer-follow-us">
                    <h1>Bizi izləyin</h1>
                    <div className="footer-logos">
                        
                        <Link to='https://www.instagram.com'>
                        <BsInstagram size={21} color='white' />
                        </Link>

                        <Link to='https://www.facebook.com'>
                        <CiFacebook size={26} color='white'/>
                        </Link>

                    </div>
                </div>

                <div className="footer-contact">
                    <h1>Əlaqə</h1>
                    <Link to='' className='footer-links'>+994 55 690 22 96</Link>
                    <Link to='' className='footer-links'>info@greentekno.az</Link>
                </div>

                <div className="footer-address">
                    <h1>Ünvan</h1>
                    <p>19 Azadlıq Ave Bakı, Azərbaycan</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © 2021 <span>Greentekno.az</span> All rights reserved. Design & Developed by <span>Deirvlon Technologies</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
