import React from 'react'
import './MainPageGrid.scss'
import GridImg1 from '../../../../images/notebook-banner.jpg'
import GridImg2 from '../../../../images/smartwatch-banner.jpg'
import GridImg3 from '../../../../images/headphones-banner.jpg'
import GridImg4 from '../../../../images/iphone12promax-banner.png'
//shekilleri komponente cheviremis ve css kodlarini duzeltmemish repoya atma

const MainPageGrid = () => {
  return (
    <section id="grid-banner">
    <div className="grid-banner">
        <div className="banners">
            <div className="left-banner">
                <div className="left-banner-1">
                    <img className="left-banners-img" src={GridImg1}/>
                    <h3 className="left-banners-h3">Notebooklar</h3>
                    <button className="left-banners-button">Daha ətraflı</button>
                </div>
                <div className="left-banner-2">
                    <div className="left-banner-2-1">
                        <img className="left-banners-img" src={GridImg2}/>
                        <h3 className="left-banners-h3">Saat və aksesuarlar</h3>
                        <button className="left-banners-button">Daha ətraflı</button>
                    </div>
                    <div className="left-banner-2-2">
                        <img className="left-banners-img" src={GridImg3}/>
                        <h3 className="left-banners-h3">Qulaqlıqlar</h3>
                        <button className="left-banners-button">Daha ətraflı</button>
                    </div>
                </div>
            </div>
            <div className="right-banner">
                    <img src={GridImg4} alt="iphone12promax" className='right-banners-img'/>
                    <h3 className="right-banners-h3">Smartfonlar</h3>
                    <button className="right-banners-button">Daha ətraflı</button>
            </div>
        </div>
    </div>
   </section>

  )
}

export default MainPageGrid
