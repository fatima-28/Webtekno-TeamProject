import React from 'react'
import './SingleProductCard.scss'

import ProductImg from '../../images/productIphone.png'
const SingleProductCard = (
) => {
  
  return (
      <div className="product-single-card">
          <div className="single-card-item card-item-img">
              <img src={ProductImg} className="card-image" alt="image" />
          </div>
          <div className="single-card-item card-item-context">
              <div className="card-item-text-part">
                  <p className="card-item-title card-text-part">Iphone 13 pro max</p>
                  <p className="card-item-price card-text-part">19.99 $</p>
              </div>
              <div className="card-item-icon-main">
                  <div className="card-item-icon">
                      {/* <i className="fa-solid fa-bag-shopping"></i> */}
                      <p>Add to cart</p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default SingleProductCard
