import './Footer.scss'
import '../../reposonsivity/FooterIphoneSe/FooterIphoneSe.scss'
import React from 'react'
import { Link } from 'react-router-dom'
//! Icons
import { BsInstagram } from 'react-icons/bs'
import { CiFacebook } from 'react-icons/ci'

import projectlogo from '../../images/projectlogo-footer.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-logo-container">
                    <Link to=''>
                        <img className='footer-img-for-logo' src={projectlogo} alt="" />
                    </Link>
                </div>
                <div className="footer-follow-us">
                    <h1 className='footer-h1'>Bizi izləyin</h1>
                    <div className="footer-logos">

                        <Link to='' className='linkFooter'>
                            <BsInstagram size={21} color='white' />
                        </Link>

                        <Link to='' className='linkFooter'>
                            <CiFacebook size={26} color='white' />
                        </Link>

                    </div>
                </div>

                <div className="footer-contact">
                    <h1 className='footer-h1'>Əlaqə</h1>
                    <Link to='' className='footer-links'>+994 55 690 22 96</Link>
                    <Link to='' className='footer-links'>info@webtekno.az</Link>
                </div>

                <div className="footer-address">
                    <h1 className='footer-h1'>Ünvan</h1>
                    <p className='footer-p'>Bakı, Azərbaycan</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © 2022 <span>Webtekno.az</span> All rights reserved. Design & Developed by <span>Group 7</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
