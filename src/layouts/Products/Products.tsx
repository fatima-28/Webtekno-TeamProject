import React from 'react'
import './Products.scss'

import ProductsCategories from './Products-categories/ProductsCategories'
import AllProducts from './All-Products/AllProducts'

const Products = () => {
  return (
    <main>
      <ProductsCategories />
      <AllProducts />
    </main>
  )
}

export default Products
