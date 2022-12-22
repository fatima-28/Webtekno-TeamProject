import React, { FC } from "react";
import "./BasketProduct.scss";

type totalProps = {
  srcValue: string;
  nameValue: string;
  priceValue: number;
  typeValue:string;
  count: number;
};
const BasketProduct: FC<totalProps> = ({
  srcValue,
  nameValue,
  typeValue,
  priceValue,
  count,
}) => {
  return (
    <div className="basket-product">

      <div className="product-img">
        <img src={srcValue} alt="" />
      </div>
      <div className="product-name">
        <span>{typeValue}</span>
        <h3>{nameValue}</h3>
      </div>
      <div className="product-count">
        <button className="minus">-</button>
        <div className="input-count">
          <span>2</span>
        </div>
        <button className="plus">+</button>
      </div>
      <div className="product-price">
        <h3>{priceValue} ₼
            <span>{` x (${count})`} </span></h3>
      </div>




    </div>
  );
};
export default BasketProduct;
