import React from 'react'
import Navbars from '../../components/Header/Navbars/Navbars'
import Footer from '../../components/Footer/Footer'
import './Products.scss'

const Products = () => {
  return (
    <div className='products'>
      <Navbars />
      <main>
        <section className="products-categories"></section>
        <section className="all-products"></section>
      </main>
      <Footer />
    </div>
  )
}

export default Products
