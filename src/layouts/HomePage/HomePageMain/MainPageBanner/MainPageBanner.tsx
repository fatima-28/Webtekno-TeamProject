import React from 'react'
import './MainPageBanner.scss'
import '../../../../Resonsivities/Home/MainPageMainBanner/_mainpageMainBanner.scss';
import mainpageBannerBg from '../../../../images/the-future-of-health-is-on-your-wrist.jpg'
import { AiOutlineApple } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const MainPageBanner = () => {
  return (
    <section className="mainpage-banner">
      <div className="mainpage-banner-image">
        <img src={mainpageBannerBg} alt="" />
        <div className="mainpage-context">

          <div className="mainpage-context-top">
            <div className="logo-and-title">
              <div>
                <AiOutlineApple  color='white' size={37}/>
              </div>
              <p>WATCH</p>
            </div>
            <p className="version">Series 6</p>
          </div>

          <div className="mainpage-context-bottom">
            <h1>The future of health is on your wrist</h1>
            <Link  to="/" className='banner-link'>{`Daha çox öyrən >`} </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MainPageBanner
