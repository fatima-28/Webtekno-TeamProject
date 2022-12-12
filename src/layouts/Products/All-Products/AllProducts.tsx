import React, { useEffect, useState } from 'react';

import './AllProducts.scss';
import ProductCard from "../../../components/SingleProductCard/SingleProductCard";
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
            <Images data={images} />
            <div className="main-products none-main-products">
                <ProductCard />
          
               
            </div>
           
        </section>
    )
}
export default AllProducts