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
          <div className="footer__list">
            <ul>
              <li className="list__item">
                <span className="list__item-title">Product</span>
              </li>
              <div className="list__wrapper">
                <li>
                  <button className="list__btn list__btn-blue">Get Pricing</button>
                </li>
                <li>
                  <button className="list__btn list__btn-yellow">Book a Demo</button>
                </li>
              </div>
              <li className="list__item">
                <a className="footer__link" href="#">
                  Calculator
                </a>
              </li>
              <li className="list__item">
                <a className="footer__link" href="#">
                  Presentation for your
                </a>
              </li>
              <li className="list__item">
                <a className="footer__link" href="#">
                  Decision Maker
                </a>
              </li>
            </ul>
            <div>
              <div className="footer__list-wrapper">
                <span className="list__item-title">Features</span>
                <img className="list__item-img" src={ArrowUp} alt="#" />
              </div>
              <ul className="footer__list-show">
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Checklist: do you need Daminion?
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Local vs Cloud
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Supported Formats
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Integrations
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Daminion Tour
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    GPS/GIS/Maps
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Daminion vs Other Solutions
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Developer Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer__list-wrapper">
                <span className="list__item-title">Case Studies</span>
                <img className="list__item-img" src={ArrowDown} alt="#" />
              </div>
              <ul className="footer__list-show">
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Marketing & Communications
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Design & Production
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Video Production
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Sales
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    GIS Specialists
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Benefits for IT Managers
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer__list-wrapper">
                <span className="list__item-title">Resources</span>
                <img className="list__item-img" src={ArrowDown} alt="#" />
              </div>
              <ul className="footer__list-show">
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Q & A
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Documentation
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Blog
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Forum
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer__list-wrapper">
                <span className="list__item-title">About</span>
                <img className="list__item-img" src={ArrowDown} alt="#" />
              </div>
              <ul className="footer__list-show">
                <li className="list__item">
                  <a className="footer__link" href="#">
                    About Daminion
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Terms of service
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Privacy policy
                  </a>
                </li>
                <li className="list__item">
                  <a className="footer__link" href="#">
                    Cookie settings
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__copyright">
            <span className="footer__copyright-text">
              Copyright © 2020 Daminion Software. All Rights Reserved
            </span>
            <a href="#">
              <img src={LogoFooter} alt="logofooter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
