import React from 'react'
import './Navbars.scss'

import { SlBasket } from 'react-icons/sl'
import { FiUserPlus } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { FiPhoneCall } from 'react-icons/fi'
import { ImHeadphones } from 'react-icons/im'
import { BsPhone } from 'react-icons/bs'
import { MdOutlineComputer } from 'react-icons/md'
import { BsSmartwatch } from 'react-icons/bs'

import { Link } from 'react-router-dom'
import { useState } from 'react'
//? Images
import projectlogo from '../../../images/projectlogo.png'

const Navbars = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };

    // function 
  
  return (
    <>
      <nav className='navbartop'>
        <div className="logo-container">
          <Link to="/"><img src={projectlogo} alt="" /></Link>
        </div>
        <div className="navbar-links">
          <ul>
            <li><Link className='links' to=''>Ana Səhifə</Link></li>
            <li><Link className='links' to='products'>Məhsullar</Link></li>
            <li><Link className='links' to=''>Önərilənlər</Link></li>
          </ul>
        </div>
        <div className="navbar-icons">
          <div className="hamburger-menu">
          <GiHamburgerMenu size={38} color='#001'/>
          </div>


          <div className="basket">
            <SlBasket className='storeicon' size={38} />
            <div className="countsquare">0</div>
          </div>


          <div className="login">
            <button>
              <FiUserPlus className='usericon' size={30} />
            </button>
          </div>


          <div className="logout"><button className="logout-link">Log Out</button></div>

        </div>
      </nav>

      <nav className='navbarbottom'>
        <div className="categories">
          <button type='button' className='showcatogories-button' onClick={handleClick} >
            <GiHamburgerMenu color='white' size={28} />
            <p className='showcatogories'>Kateqoriyaları Göstər</p>
          </button>
          <div  className={!active ? "passive selections" : "selections"} style={{ display: active ? "flex" : "none" }}>
            <ul>

              <li><Link className='selection-link selection-link1' to=''>
                <div className="icon-part">
                  <BsPhone className='icon' size={40} color="black" />
                </div>
                <p className="text-part">Telefonlar</p>
              </Link></li>

              <li><Link className='selection-link' to=''>
                <div className="icon-part">
                  <ImHeadphones className='icon' size={40} color="black" />
                </div>
                <p className="text-part">Qulaqlıqlar</p>
              </Link></li>

              <li><Link className='selection-link' to=''>
                <div className="icon-part">
                  <MdOutlineComputer className='icon' size={40} color="black" />
                </div>
                <p className="text-part">Komputerlər və Notbuklar</p>
              </Link></li>

              <li><Link className='selection-link selection-link2' to=''>
                <div className="icon-part">
                  <BsSmartwatch className='icon' size={40} color="black" />
                </div>
                <p className="text-part">Smart Saatlar</p>
              </Link></li>

            </ul>
          </div>
        </div>
        <div className="search">
          <div className="find-space">
            <input type="text" name="" id="" placeholder='Məhsul axtar' />
            <button className='findericon'><HiMagnifyingGlass color='green' size={30} /></button>
          </div>
        </div>
        <div className="contact">
          <button className="contactbutton">
            <FiPhoneCall className='fiphonecall' size={26} />
            <p className='contactword'>Əlaqə</p>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbars
