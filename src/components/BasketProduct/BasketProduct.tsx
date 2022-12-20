import React from "react";

const BasketProduct = () => {
  return (
    <>
      <div className="product-img"></div>
      <div className="product-name">
        <span>Smartfon</span>
        <h3>Iphone 11 64 GB | White (ağ) </h3>
      </div>
      <div className="product-count">
        <button className="minus">-</button>
        <div className="input-count">
          <span>3</span>
        </div>
        <button className="plus">+</button>
      </div>
      <div className="product-price">
        <h3> 2760.00 ₼ </h3>
      </div>
    </>
  );
};
export default BasketProduct;
