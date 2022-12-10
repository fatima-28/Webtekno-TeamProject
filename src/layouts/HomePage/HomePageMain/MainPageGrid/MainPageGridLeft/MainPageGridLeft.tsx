import React from 'react'
import './MainPageGridLeft.scss'
import BannerButton from '../../../../../components/BannerButton/BannerButton'
import GridImg1 from '../../../../../images/notebook-banner.jpg'
import GridImg2 from '../../../../../images/smartwatch-banner.jpg'
import GridImg3 from '../../../../../images/headphones-banner.jpg'


const MainPageGridLeft = () => {
    return (
        <div className="left-banner">
            <div className="left-banner-1">
                <img className="left-banners-img" src={GridImg1} alt="img" />
                <h3 className="left-banners-h3">Notebooklar</h3>
                <BannerButton />
            </div>
            <div className="left-banner-2">
                <div className="left-banner-2-1">
                    <img className="left-banners-img" src={GridImg2} alt="img" />
                    <h3 className="left-banners-h3">Saat və aksesuarlar</h3>
                    <BannerButton />
                </div>
                <div className="left-banner-2-2">
                    <img className="left-banners-img" src={GridImg3} alt="img" />
                    <h3 className="left-banners-h3">Qulaqlıqlar</h3>
                    <BannerButton />
                </div>
            </div>
        </div>
    )
}

export default MainPageGridLeft
