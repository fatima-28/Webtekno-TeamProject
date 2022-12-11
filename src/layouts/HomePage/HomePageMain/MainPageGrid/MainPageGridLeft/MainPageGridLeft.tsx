import React from 'react'
import './MainPageGridLeft.scss'
import LeftBannerTop from './LeftBannerTop/LeftBannerTop'
import LeftBannerBottomLeft from './LeftBannerBottomLeft/LeftBannerBottomLeft'
import LeftBannerBottomRight from './LeftBannerBottomRight/LeftBannerBottomRight'





const MainPageGridLeft = () => {
    return (
        <div className="left-banner">
            <LeftBannerTop />
            <div className="left-banner-2">
                <LeftBannerBottomLeft />
                <LeftBannerBottomRight />
            </div>
        </div>
    )
}

export default MainPageGridLeft
