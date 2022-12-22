import React, { useState } from 'react'
import './Products.scss'

import ProductsCategories from './Products-categories/ProductsCategories'
import AllProducts from './All-Products/AllProducts'

const Products = () => {

  const [rangePrice, setRangePrice] = useState(10000);
  const [brend,setBrend] = useState('');
  const [category,setCategory] = useState('');
  //Props Drilling //Redux //Context Api
  return (
    <main>
      <ProductsCategories setCategory = {setCategory} setBrend = {setBrend} setRangePrice={setRangePrice} />
      <AllProducts category = {category} brend = {brend} rangePrice={rangePrice} />
    </main>
  )
}

export default Products;
