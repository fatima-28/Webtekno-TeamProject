import React, { useEffect, useState } from 'react';

import './AllProducts.scss';

import Images from "../../../components/images"

const AllProducts = () => {
    // let products = document.getElementsByClassName("main-products")
    let products = document.querySelector(".main-products")
    const [images, setImages] = useState([]);
    //fixed
    const link = "http://localhost:3000/cards";
    useEffect(() => {
        fetch(link).then(

            response => response.json().then(data => {
                setImages(data);
            })
        )
        //fix:  Use props

    }, [])
    return (
        <section className='all-products'>
            <div className="main-products  ">
                <Images data={images} />
            </div>

        </section>
    )
}
export default AllProducts
