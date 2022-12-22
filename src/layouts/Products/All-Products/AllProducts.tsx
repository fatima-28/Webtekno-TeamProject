import React, { useEffect, useState } from 'react';
import '../../../Resonsivities/Product/ProductCards/_productCard.scss';
import './AllProducts.scss';

import Images from "../../../components/images"

const AllProducts = (props: any) => {
    // let products = document.querySelector(".main-products")
    const [images, setImages] = useState([]);
    //fixed
    const link = "https://married-electric-anaconda.glitch.me/cards";
    useEffect(() => {
        fetch(link).then(
            response => response.json().then(data => {
                setImages(data);
                console.log(images);
            })
        )
        //fix:  Use props
    }, [])

    return (
        <section className='all-products'>
            <div className="main-products  ">
                <Images category = {props.category} brend={props.brend} rangePrice={props.rangePrice} data={images} />
            </div>
        </section>
    )
}
export default AllProducts
