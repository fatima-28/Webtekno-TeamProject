import React from 'react'
import './MainPageGridLeft.scss'
import '../../../../../responsibilty/MainPageGridLeftIphoneSe.scss'
import GridImg1 from '../../../../../images/notebook-banner.jpg'
import LeftBannerProduct from './LeftBannerProduct/LeftBannerProduct'
import GridImg2 from '../../../../../images/smartwatch-banner.jpg'
import GridImg3 from '../../../../../images/headphones-banner.jpg'


const MainPageGridLeft = () => {
    return (
        <div className="left-banner">
            <LeftBannerProduct
                title="Notebooklar"
                className="left-banner-1"
                img={GridImg1}
            />
            <div className="left-banner-2">
                <LeftBannerProduct
                    title="Saat və aksesuarlar"
                    className="left-banner-2-1"
                    img={GridImg2}
                />
                <LeftBannerProduct
                    title="Qulaqlıqlar"
                    className="left-banner-2-2"
                    img={GridImg3}
                />
            </div>
        </div>
    )
}


export default MainPageGridLeft
