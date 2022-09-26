import React from 'react';
import './style.css';
import ArrowUp from '../../images/footershevrontop.svg';
import ArrowDown from '../../images/footershevronbottom.svg';
import LogoFooter from '../../images/logofotter.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="container">
          <div className="footer__title">
            <ul>
              <li className="footer__link__list">
                <span className="footer__title__list">Product</span>
              </li>
              <div className="footer__subtitle">
                <li>
                  <button className="footer__link__btn">Get Pricing</button>
                </li>
                <li>
                  <button className="footer__link__btn btn__link__second">Book a Demo</button>
                </li>
              </div>
              <li className="footer__link__list">
                <a className="footer__link" href="#">
                  Calculator
                </a>
              </li>
              <li className="footer__link__list">
                <a className="footer__link" href="#">
                  Presentation for your
                </a>
              </li>
              <li className="footer__link__list">
                <a className="footer__link" href="#">
                  Decision Maker
                </a>
              </li>
            </ul>
            <div>
              <div className="footer__link__list__title">
                <span className="footer__title__list">Features</span>
                <img className="footer__link__list__title__img" src={ArrowUp} alt="#" />
              </div>
              <ul className="footer__list__show">
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Checklist: do you need Daminion?
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Local vs Cloud
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Supported Formats
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Integrations
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Daminion Tour
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    GPS/GIS/Maps
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Daminion vs Other Solutions
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Developer Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer__link__list__title">
                <span className="footer__title__list">Case Studies</span>
                <img className="footer__link__list__title__img" src={ArrowDown} alt="#" />
              </div>
              <ul className="footer__list__hiden">
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Marketing & Communications
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Design & Production
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Video Production
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Sales
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    GIS Specialists
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Benefits for IT Managers
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer__link__list__title">
                <span className="footer__title__list">Resources</span>
                <img className="footer__link__list__title__img" src={ArrowDown} alt="#" />
              </div>
              <ul className="footer__list__hiden">
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Q & A
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Documentation
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Blog
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Forum
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer__link__list__title">
                <span className="footer__title__list">About</span>
                <img className="footer__link__list__title__img" src={ArrowDown} alt="#" />
              </div>
              <ul className="footer__list__hiden">
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    About Daminion
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Terms of service
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__link__list">
                  <a className="footer__link" href="#">
                    Cookie settings
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__copyright">
            <span className="footer__copyright__text">
              Copyright © 2020 Daminion Software. All Rights Reserved
            </span>
            <a className="footer__copyright__link" href="#">
              <img className="footer__copyright__img" src={LogoFooter} alt="logofooter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
