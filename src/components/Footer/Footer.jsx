import React from "react";
import './FooterStyle.css';

const Footer = () =>{
    return(
        <footer className ="footer">
            <div className="footerInfo">
                <div className="footerLogo">
                    <p className="footerLogoMText">LY ROSE</p>
                    <p className="footerLogoAddText">flower boutique</p>
                </div>

                <div className="footerInfoContainer">
                    <p>Про нас</p>
                    <p>Оплата/Доставка</p>
                </div>

                <div className="footerInfoContainer">
                    <p>Instagram</p>
                    <p>Telegram</p>
                    <p>tel: +380661364233</p>
                </div>
            </div>
        </footer>

    )
};
export default Footer;
