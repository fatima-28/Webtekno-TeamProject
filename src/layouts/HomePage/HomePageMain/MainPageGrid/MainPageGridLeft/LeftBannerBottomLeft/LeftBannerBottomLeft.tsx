import React from 'react'
import GridImg2 from '../../../../../../images/smartwatch-banner.jpg'
import BannerButton from '../../../../../../components/BannerButton/BannerButton'
import './LeftBannerBottomLeft.scss'

const LeftBannerBottomLeft = () => {
    return (
        <div className="left-banner-2-1">
            <img className="left-banners-img" src={GridImg2} alt="img" />
            <h3 className="left-banners-h3">Saat və aksesuarlar</h3>
            <BannerButton />
        </div>
    )
}

export default LeftBannerBottomLeft
