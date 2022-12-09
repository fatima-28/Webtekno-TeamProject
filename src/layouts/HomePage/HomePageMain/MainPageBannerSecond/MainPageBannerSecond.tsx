import React from 'react'
import './MainPageBannerSecond.scss'
import backtoschool from '../../../../images/backtoschool.jpeg'
const MainPageBannerSecond = () => {
    return (

        <section id="mainpage-second-banner">
            <div className="mainpage-banner2">
                <img src={backtoschool} alt="mektebe donus" />
                <div className="total-div">
                    <h1>Məktəbə dönüş</h1>
                    <p>Apple məhsulları ilə daha səmərəli çalışın</p>
                    <a className="product-link" href="#">Məhsullara bax</a>

                </div>
            </div>
        </section>


    )
}

export default MainPageBannerSecond
