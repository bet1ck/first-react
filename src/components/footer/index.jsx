import React from 'react';
import './index.css';
import ArrowUp from '../../images/footershevrontop.svg';
import ArrowDown from '../../images/footershevronbottom.svg';
import LogoFooter from '../../images/logofotter.svg';


const Footer = () => {
    return (
    <footer>
        <div class="footer__container">
            <div class="container">
                <div class="footer__title">
                    <ul>
                        <li class="footer__link__list"><span class="footer__title__list">Product</span></li>
                        <div class="footer__subtitle">
                            <li>
                                <button class="footer__link__btn">Get Pricing</button>
                            </li>
                            <li>
                                <button class="footer__link__btn btn__link__second">Book a Demo</button>
                            </li>
                        </div>    
                        <li class="footer__link__list"><a class="footer__link" href="#">Calculator</a></li>
                        <li class="footer__link__list"><a class="footer__link" href="#">Presentation for your</a></li>
                        <li class="footer__link__list"><a class="footer__link" href="#">Decision Maker</a></li>
                    </ul>
                    <div>
                        <div class="footer__link__list__title">
                            <span class="footer__title__list">Features</span>
                            <img class="footer__link__list__title__img" src={ArrowUp} alt="#" />
                        </div>
                        <ul class="footer__list__show">
                            <li class="footer__link__list"><a class="footer__link" href="#">Checklist: do you need Daminion?</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Local vs Cloud</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Supported Formats</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Integrations</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Daminion Tour</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">GPS/GIS/Maps</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Daminion vs Other Solutions</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Developer Resources</a></li>
                        </ul>
                    </div>
                    <div>
                        <div class="footer__link__list__title">
                            <span class="footer__title__list">Case Studies</span>
                            <img class="footer__link__list__title__img" src={ArrowDown} alt="#" />
                        </div>
                        <ul class="footer__list__hiden">
                            <li class="footer__link__list"><a class="footer__link" href="#">Marketing & Communications</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Design & Production</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Video Production</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Sales</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">GIS Specialists</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Benefits for IT Managers</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Testimonials</a></li>
                        </ul>
                    </div>
                    <div>
                        <div class="footer__link__list__title">
                            <span class="footer__title__list">Resources</span>
                            <img class="footer__link__list__title__img" src={ArrowDown}  alt="#" />
                        </div>
                        <ul class="footer__list__hiden">
                            <li class="footer__link__list"><a class="footer__link" href="#">Q & A</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Documentation</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Blog</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Forum</a></li>
                        </ul>
                    </div>
                    <div>
                        <div class="footer__link__list__title">
                            <span class="footer__title__list">About</span>
                            <img class="footer__link__list__title__img" src={ArrowDown}  alt="#" />
                        </div>
                        <ul class="footer__list__hiden">
                            <li class="footer__link__list"><a class="footer__link" href="#">About Daminion</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Contact Us</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Terms of service</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Privacy policy</a></li>
                            <li class="footer__link__list"><a class="footer__link" href="#">Cookie settings</a></li>
                        </ul>
                    </div>
                </div>    

                <div class="footer__copyright">
                    <span class="footer__copyright__text">Copyright © 2020 Daminion Software. All Rights Reserved</span>
                    <a class="footer__copyright__link" href="#"><img class="footer__copyright__img" src={LogoFooter} alt="logofooter" /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer