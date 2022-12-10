import React from 'react'
import './MainPageGrid.scss'
import MainPageGridLeft from './MainPageGridLeft/MainPageGridLeft'
import MainPageGridRight from './MainPageGridRight/MainPageGridRight'



const MainPageGrid = () => {
    return (
        <section id="grid-banner">

            <div className="grid-banner">
                <div className="banners">
                    <MainPageGridLeft />
                    <MainPageGridRight />
                </div>
            </div>

        </section>

    )
}

export default MainPageGrid
