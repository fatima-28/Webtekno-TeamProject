import React from 'react'
import './ProductsCategoriesInside.scss'
import CategoriesTitle from './Categories-Title/CategoriesTitle'
import CategoriesList from './Categories-List/CategoriesList'
import CategoriesPriceRangeTitle from './Categories-Price-Range-Title/CategoriesPriceRangeTitle'
import CategoriesPriceRange from './Categories-Price-Range/CategoriesPriceRange'
import CategoriesBrends from './Categories-Brends/CategoriesBrends'

const ProductsCategoriesInside = () => {
    return (
        <div className='categories-inside'>
            <CategoriesTitle />
            <hr style={{ border: 'solid .1px #f8f9fa' }} />
            <CategoriesList />
            <CategoriesPriceRangeTitle />
            <hr style={{ marginTop: '20px', border: 'solid .1px #f8f9fa' }} />
            <CategoriesPriceRange />
            <hr style={{ marginTop: '20px', border: 'solid .1px #f8f9fa' }} />
            <CategoriesBrends />
        </div>
    )
}

export default ProductsCategoriesInside
