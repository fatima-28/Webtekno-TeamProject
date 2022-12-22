import React from 'react'
import GridImg4 from '../../../../../images/iphone12promax-banner.png'
import './MainPageGridRight.scss'
import '../../../../../responsibilty/MainPageGridRightIphoneSe.scss'
import BannerButton from '../../../../../components/BannerButton/BannerButton'
const MainPageGridRight = () => {
    return (
        <div className="right-banner">
            <img src={GridImg4} alt="iphone12promax" className='right-banners-img' />
            <h3 className="right-banners-h3">Smartfonlar</h3>
            <BannerButton />
        </div>
    )
}

export default MainPageGridRight
