import React from 'react';
import carouselimg1 from "../../images/iphone.png";


const CarouselCard = () => {
  return (
    <>
    <div className="carousel-card">
              <div className="img">
                <img src={carouselimg1} alt="" />
              </div>
              <div className="desc">
                <h5>iPhone 13 mini 128 GB | Pink (çəhrayı)</h5>
                <p className="price-product">null</p>
              </div>
            </div>
    </>
  )
}
export default CarouselCard
