import React from 'react'
import './LeftBannerBottomRight.scss'
import GridImg3 from '../../../../../../images/headphones-banner.jpg'
import BannerButton from '../../../../../../components/BannerButton/BannerButton'
const LeftBannerBottomRight = () => {
    return (
        <div className="left-banner-2-2">
            <img className="left-banners-img" src={GridImg3} alt="img" />
            <h3 className="left-banners-h3">Qulaqlıqlar</h3>
            <BannerButton />
        </div>
    )
}

export default LeftBannerBottomRight
