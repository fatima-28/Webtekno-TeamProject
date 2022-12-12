import React, { useEffect, useState } from 'react';

import './AllProducts.scss';

import Images from "../../../components/images"

const AllProducts = () => {
    let products = document.querySelector(".main-products")
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch("  http://localhost:3000/cards").then(

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