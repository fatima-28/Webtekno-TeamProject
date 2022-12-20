import React from 'react';
import {FC} from 'react'
type totalProps = {srcValue : string, nameValue : string, priceValue : number, count : number }
 const BasketDropdownProduct:FC<totalProps> = ({srcValue, nameValue, priceValue, count}) => {
  return (
    <>
     <li className="basket-products-item">
                <div className="item-img"><img src={srcValue} alt="" /></div>
                <div className="item-content">
                  <h4 className="item-name">{nameValue}</h4>
                  <p className="item-price">{priceValue}<span>{`x ${count}`}</span></p>
                </div>
                <div className="item-delete"></div>
              </li>
    </>
  )
}
export default BasketDropdownProduct
