import React from "react";
import BasketProduct from "../../components/BasketProduct/BasketProduct";
import "./Basket.scss";
import white11 from  "../../images/11-white.jpeg";
import purple12 from  "../../images/12-mini.jpeg";
import white12 from  "../../images/white12.png";
import { Link } from "react-router-dom";

export const Basket = () => {
  return (
    <div className="basket-section">

      <h2>Səbət</h2>
      <div className="basket-main">
        <div className="basket-main__left">
          <BasketProduct srcValue={white11} nameValue={"iPhone 11 64 GB | White (ağ)"} priceValue={1380.00} typeValue={"Smartfon"} count={1} />
          <BasketProduct srcValue={purple12} nameValue={"iPhone 12 Mini 64 GB | Purple (bənövşəyi)"} priceValue={1550.00} typeValue={"Smartfon"} count={1} />
          <BasketProduct srcValue={white12} nameValue={"iPhone 12 Mini 64 GB | White (ağ)"} priceValue={1550.00} typeValue={"Smartfon"} count={1} />
          <BasketProduct srcValue={white11} nameValue={"iPhone 11 64 GB | White (ağ)"} priceValue={1380.00} typeValue={"Smartfon"} count={1} />

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
              <span className="total-price-"> 3260.00 ₼</span>
            </div>
            <Link className="order-btn" to="/delivery" >Sifarişi rəsmiləşdir</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
