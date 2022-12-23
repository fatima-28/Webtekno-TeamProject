import React from "react";
import "./Navbars.scss";
import itemImg from "../../../images/itemBasket.jpeg";

import { SlBasket } from "react-icons/sl";
import { FiUserPlus } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { ImHeadphones, ImWhatsapp } from "react-icons/im";
import { BsPhone, BsTelephone } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useState } from "react";
//? Images
import projectlogo from "../../../images/projectlogo.png";
import BasketDropdownProduct from "../../BasketDropdownProduct/BasketDropdownProduct";
import { GrClose } from "react-icons/gr";
import { Login } from "../../Login/Login";

const Navbars = () => {
  const [active, setActive] = useState(false);

  const [close, setClose] = useState(false);
  const closePopup = () => {
    setClose(!close);
  };

  const handleClick = () => {
    setActive(!active);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  function showBasketDropdown() {
    setShowDropdown(!showDropdown);
  }
  // let searchBar = document.getElementsByClassName('find-space');
  // let productNames = document.getElementsByClassName('card-item-title');
  // searchBar.addEventListener('keyup', function () {
  //   productNames.forEach(name => {


  //     let product = name.parentNode.parentNode.parentNode;
  //     if (name.innerHTML.toLowerCase().includes(searchBar.value.toLowerCase())) {
  //       product.style = 'display:block';
  //     }
  //     else {
  //       product.style = 'display:none';
  //     }
  //   })
  // })

  return (
    <>
      <nav className="navbartop">
        <div className="logo-container">
          <Link to="/">
            <img src={projectlogo} alt="" />
          </Link>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <Link className="links" to="">
                Ana Səhifə
              </Link>
            </li>
            <li>
              <Link className="links" to="products">
                Məhsullar
              </Link>
            </li>
            <li>
              <Link className="links" to="">
                Önərilənlər
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-icons">
          <div className="hamburger-menu">
            <GiHamburgerMenu size={38} color="#001" />
          </div>

          <button onClick={showBasketDropdown} className="basket">
            <SlBasket className="storeicon" size={38} />
            <div className="countsquare">0</div>
            <div
              className="basket-dropdown"
              style={{ display: showDropdown ? "block" : "none" }}
            >
              <div className="basket-products">
                <BasketDropdownProduct
                  srcValue={itemImg}
                  nameValue={"Iphone 11 64 GB | white(ağ)"}
                  priceValue={1380}
                  count={1}
                />
                <BasketDropdownProduct
                  srcValue={itemImg}
                  nameValue={"Iphone 11 64 GB | white(ağ)"}
                  priceValue={2500}
                  count={2}
                />
                <BasketDropdownProduct
                  srcValue={itemImg}
                  nameValue={"Iphone 11 64 GB | white(ağ)"}
                  priceValue={3400}
                  count={1}
                />
              </div>

              <div className="basket-price">
                Toplam : <span>5500 ₼</span>
              </div>
              <Link className="btn-link-basket" to="/basket">
                {" "}
                Səbətə get
              </Link>
            </div>
          </button>

          {/* <div className="login">
            <button>
              <FiUserPlus className="usericon" size={30} />
            </button>
          </div> */}
          <Login/>

          <div className="logout">
            <button className="logout-link">Log Out</button>
          </div>
        </div>
      </nav>

      <nav className="navbarbottom">
        <div className="categories">
          <button
            type="button"
            className="showcatogories-button"
            onClick={handleClick}
          >
            <GiHamburgerMenu color="white" size={28} />
            <p className="showcatogories">Kateqoriyaları Göstər</p>
          </button>
          <div
            className={!active ? "passive selections" : "selections"}
            style={{ display: active ? "flex" : "none" }}
          >
            <ul>
              <li>
                <Link className="selection-link selection-link1" to="">
                  <div className="icon-part">
                    <BsPhone className="icon" size={40} color="black" />
                  </div>
                  <p className="text-part">Telefonlar</p>
                </Link>
              </li>

              <li>
                <Link className="selection-link" to="">
                  <div className="icon-part">
                    <ImHeadphones className="icon" size={40} color="black" />
                  </div>
                  <p className="text-part">Qulaqlıqlar</p>
                </Link>
              </li>

              <li>
                <Link className="selection-link" to="">
                  <div className="icon-part">
                    <MdOutlineComputer
                      className="icon"
                      size={40}
                      color="black"
                    />
                  </div>
                  <p className="text-part">Komputerlər və Notbuklar</p>
                </Link>
              </li>

              <li>
                <Link className="selection-link selection-link2" to="">
                  <div className="icon-part">
                    <BsSmartwatch className="icon" size={40} color="black" />
                  </div>
                  <p className="text-part">Smart Saatlar</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="search">
          <div className="find-space">
            <input type="text" name="" id="" placeholder="Məhsul axtar" />
            <button className="findericon">
              <HiMagnifyingGlass color="green" size={30} />
            </button>
          </div>
        </div>
        <div className="contact">
          <button className="contactbutton">
            <FiPhoneCall className="fiphonecall" size={26} />
            <p className="contactword">Əlaqə</p>
          </button>

          <div
            className={!close ? "popup" : "popup showpopup"}
            style={{ visibility: close ? "visible" : "hidden" }}
          >
            <div className="inner">
              <div className="top-inner">
                <button className="closeButtonInInner" onClick={closePopup}>
                  <GrClose
                    color="black"
                    size={20}
                    className="closeButtonIconInInner"
                  />
                </button>
              </div>
              <h1 className="popup-header-text">Əlaqə</h1>
              <button className="contactWithUs">
                <ImWhatsapp color="white" size={20} />
                <h4 className="contactWithUsText">Whatsapp</h4>
              </button>
              <button className="callUs">
                <BsTelephone />
                <h4 className="callUsText">Bizə zəng et</h4>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbars;
