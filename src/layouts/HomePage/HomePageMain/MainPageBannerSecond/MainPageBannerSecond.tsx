import React from 'react'
import './MainPageBannerSecond.scss'
import '../../../../responsibilty/MainPageBannerSecondIphoneSe.scss'
import backtoschool from '../../../../images/backtoschool.jpeg'
import { Link } from 'react-router-dom'
const MainPageBannerSecond = () => {
    return (
        <section id="mainpage-second-banner">
            <div className="mainpage-banner2">
                <img src={backtoschool} alt="mektebe donus" />
                <div className="total-div">
                    <h1 className='mainPageBannerHeaderText'>Məktəbə dönüş</h1>
                    <p>Apple məhsulları ilə daha səmərəli çalışın</p>
                    <Link className="product-link" to="/products" >Məhsullara bax</Link>
                </div>
            </div>
        </section>
    )
}
export default MainPageBannerSecond
