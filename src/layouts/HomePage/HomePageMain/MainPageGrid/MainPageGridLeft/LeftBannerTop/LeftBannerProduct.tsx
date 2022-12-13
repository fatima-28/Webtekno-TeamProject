import React from 'react'
import './LeftBannerTop.scss'
import BannerButton from '../../../../../../components/BannerButton/BannerButton'
const LeftBannerProduct = (props:any) => {
    return (
        <div className={props.className}>
            <img className="left-banners-img" src={props.img} alt="img" />
            <h3 className="left-banners-h3">{props.title}</h3>
            <BannerButton />
        </div>
    )
}

export default LeftBannerProduct
