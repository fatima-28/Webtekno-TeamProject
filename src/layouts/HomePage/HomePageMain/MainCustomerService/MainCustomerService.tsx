import React from 'react';
import './MainCustomerService.scss';
import safesvg from "../../../../images/SafeSvg.svg";
import deliversvg from "../../../../images/DeliverSvg.svg";
import likesvg from "../../../../images/LikeSvg.svg";

export const MainCustomerService = () => {
    return (
        <>
            <div className="customer-service">
                <div className="item">
                    <img src={likesvg} alt="" />
                    <div className="text">
                        <h5>100% MƏMNUNİYYƏT</h5>
                        <p>Müştəri məmnuniyyəti bizim əsas öhdəliyimizdir</p>
                    </div>
                </div>
                <div className="item">
                    <img src={deliversvg} alt="" />
                    <div className="text">
                        <h5>SÜRƏTLİ ÇATDIRILMA</h5>
                        <p>Online sifariş etdiyiniz məhsulları sürətli şəkildə çatdırırıq</p>
                    </div>
                </div>

                <div className="item">
                    <img src={safesvg} alt="" />
                    <div className="text">
                        <h5>ZƏMANƏT</h5>
                        <p>Bütün məhsullarımıza zəmanət veririk</p>
                    </div>
                </div>
            </div>
        </>
    )
}