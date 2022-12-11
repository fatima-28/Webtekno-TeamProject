import React from 'react'
import './LeftBannerTop.scss'
import BannerButton from '../../../../../../components/BannerButton/BannerButton'
import GridImg1 from '../../../../../../images/notebook-banner.jpg'
const LeftBannerTop = () => {
    return (
        <div className="left-banner-1">
            <img className="left-banners-img" src={GridImg1} alt="img" />
            <h3 className="left-banners-h3">Notebooklar</h3>
            <BannerButton />
        </div>
    )
}

export default LeftBannerTop
