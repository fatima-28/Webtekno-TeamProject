import React ,{useEffect,useState} from 'react';

import './AllProducts.scss';
import ProductCards from "../../../components/AllProductsCards/AllProductsCards";
import Images from "../../../components/images"
const AllProducts = () => {
  let products=document.querySelector(".main-products")
  const [images,setImages]=useState([]);
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(

    response=>response.json().then(data=>
      {
        setImages(data);
      })
    )
    //Task is not finished and I will create my own fake Api and I willl use this link

   },[])
  return (
    <section className='all-products'>
  <div className="main-products">
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
  </div>
  <div>
    <Images data={images}/>
  </div>
    </section>
  )
}

export default AllProducts
