import React from "react";
import "./footer.css";
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="container">
                <div className="left-box">
                    <div className="box">
                        <div className="icon-box">
                            <FaPiggyBank />
                        </div>
                        <div className="detail">
                            <h3>Great Saving</h3>
                            <p>Electronics enrich your life with technology</p>
                        </div>
                    </div>
                        <div className="box">
                        <div className="icon-box">
                            <FaShippingFast />
                        </div>
                        <div className="detail">
                            <h3>free delivery</h3>
                            <p>Electronics enrich your life with technology</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FaHeadphonesAlt />
                        </div>
                        <div className="detail">
                            <h3>24X7 support</h3>
                            <p>Electronics enrich your life with technology</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FaWallet />
                        </div>
                        <div className="detail">
                            <h3>money back</h3>
                            <p>Electronics enrich your life with technology</p>
                        </div>
                    </div>
                </div>
                <div className="right-box">
                    <div className="header">
                        <img src="images/logo.webp" alt=""></img>
                        <p>Lorem ipsum dolor sit amet, consectetur Nuliscing elit. Duis faucibus ipsum id sem Putconsequat Text.</p>
                    </div>
                    <div className="bottom">
                        <div className="box">
                            <h3>Your Account</h3>
                            <ul>
                                <li>About us</li>
                                <li>Account</li>
                                <li>Payment</li>
                                <li>sales</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>products</h3>
                            <ul>
                                <li>Delivery</li>
                                <li>Track Oder</li>
                                <li>New product</li>
                                <li>old product</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>contact us</h3>
                            <ul>
                                <li>Electronics</li>
                                <li>+20 102 559 4394</li>
                                <li>info@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer