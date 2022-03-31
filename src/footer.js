// import Tele from "./images/whtele.jpg"
// import Att from "./images/wa.png"
// import Pin from "./images/location.jpg"
// import Wifi from "./imgsur/wifipy.png"
// import Paypal from "./imgsur/paypal.png"

import "./footer.css"
import callicon from './project_images/callicon.png'
import attherate from './project_images/atthearte.png'
import location from './project_images/location.png'
import fb from './project_images/fb.png'
import play from './project_images/play.png'
import linkedin from './project_images/linkedin.png'




const Footer = () => {
    return (
        <div className="footer">

            <div className="contents">
                <div className="aboutus">
                    <h5>COMPANY</h5><br />
                    <ul>
                        <li>About Us</li>
                        <li>Sell With Us</li>
                        <li>Our Sellers</li>
                    </ul>
                </div>

                <div className="customerservice">
                    <h5 style={{ width: "150px" }}>CUSTOMER SERVICE</h5>
                    <br />
                    <ul>
                        <li>Help and FAQs</li>
                        <li>Exchange and Returns Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>

                <div className="ourstores">
                    <h5>OUR STORES</h5><br />
                    <ul>
                        <li>Stores and Services</li>
                        <li>Location and Hours</li>
                        <li>Catalogs</li>
                    </ul>
                </div>

            </div>
            <div className="searchbar">
                <p>Subscribe Newsletter</p>
                <input type="text" placeholder="Enter your email address" />
                <button>Submit</button>
            </div>

            <div className="support">
                <img src={callicon} alt="" width="15px" height="15px" /><br/>
                <img src={attherate} alt="" idth="15px" height="15px" />
            </div>

            <div className="supporttext">
                <p>1800 420 0707</p>
                <p>customercare@company.com</p>
            </div>

            <div className="location">
                <img src={location} alt="" width="15px" height="15px" /> 
                <p>Address line 1</p>
            </div>

            <div className="copyrt">
                <p>Copyrights © 2021 Company Ltd. All rights reserved.</p>
            </div>

            <div className="fb">
                <img src={fb} alt="" width="25px" height="25px"/>
            </div>
            <div className="play">
                <img src={play} alt="" width="25px" height="25px"/>
            </div>
            <div className="linkedin">
                <img src={linkedin} alt="" width="25px" height="25px"/>
            </div>

            
                



        </div>

    );
}

export default Footer;
