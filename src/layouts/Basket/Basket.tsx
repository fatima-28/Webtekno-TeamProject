import React from "react";
import BasketProduct from "../../components/BasketProduct/BasketProduct";
import "./Basket.scss";

export const Basket = () => {
  return (
    <>
      <h2>Səbət</h2>
      <div className="basket-main">
        <div className="basket-main__left">
          <BasketProduct />
          <BasketProduct />
          <BasketProduct />
        </div>
        <div className="basket-main__right">
          <div className="complete-order">
            <div className="discount">
              <h4>Endirim</h4>
              <span> 0 AZN</span>
            </div>
            <div className="shipping">
              <h4>Çatdırılma</h4>
              <span> 0 AZN</span>
            </div>
            <div className="total-price">
              <h3>Toplam</h3>
              <span> 3260.00 ₼</span>
            </div>
            <button className="order-btn"></button>
          </div>
        </div>
      </div>
    </>
  );
};
