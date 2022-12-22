import React from 'react'
import './ProductsCategories.scss'
import ProductsCategoriesInside from './Products-categories-inside/ProductsCategoriesInside'

const ProductsCategories = (props: any) => {
    return (
        <section className="products-categories">
            <ProductsCategoriesInside setCategory = {props.setCategory} setBrend = {props.setBrend} setRangePrice = {props.setRangePrice} />
        </section>
    )
}

export default ProductsCategories
