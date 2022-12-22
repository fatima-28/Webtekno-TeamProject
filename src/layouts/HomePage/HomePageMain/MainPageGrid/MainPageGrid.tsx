import React from 'react'
import './MainPageGrid.scss'
import '../../../../responsibilty/GridBannerIphoneSe.scss'
import MainPageGridLeft from './MainPageGridLeft/MainPageGridLeft'
import MainPageGridRight from './MainPageGridRight/MainPageGridRight'



const MainPageGrid = () => {
    return (
        <section className="grid-banner">


                <div className="banners">
                    <MainPageGridLeft />
                    <MainPageGridRight />
                </div>


        </section>

    )
}

export default MainPageGrid
