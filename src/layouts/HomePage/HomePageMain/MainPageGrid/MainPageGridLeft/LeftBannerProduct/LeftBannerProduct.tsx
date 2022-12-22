import React from 'react'
import {FC} from 'react'
import './LeftBannerProduct.scss'
import '../../../../../../responsibilty/LeftBannerProductIphoneSe.scss'
import BannerButton from '../../../../../../components/BannerButton/BannerButton'
type StrictComProps = {
    className : string,
    img: string,
    title: string
}
const LeftBannerProduct: FC<StrictComProps> = ({className, img, title}) => {
    return (
        <div className={className}>
            <img className="left-banners-img" src={img} alt="img" />
            <h3 className="left-banners-h3">{title}</h3>
            <BannerButton />
        </div>
    )
}

export default LeftBannerProduct
