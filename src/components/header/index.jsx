import React from 'react';
import './style.css';
import BurgerIcon from '../../images/burger.svg';
import ArrowDown from '../../images/vectorbottom.svg';
import Logo from '../../images/logo.svg';

{
  /*все стили стили напистаь в соотвествии с БЭМ блок__элемент-продолжение-имени_модификатор*/
}
{
  /*header__logo-large-link_black*/
}
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__container">
          <img className="header__burger" src={BurgerIcon} alt="" />
          <a className="header__logo-link" href="#">
            <img className="header__logo-img" src={Logo} alt="logo" />
          </a>
          <div className="header__nav-mobile">
            <ul>
              <li className="nav__list-mobile">
                <a className="nav__list-mobile-text">Case Studies</a>
                {/* <img className="nav__list-mobile-img" src={ArrowDown} alt="" /> */}
              </li>
              <li className="nav__list-mobile">
                <span className="nav__list-mobile-text">Pricing</span>
                <img className="nav__list-mobile-img" src={ArrowDown} alt="" />
              </li>
              <li className="nav__list-mobile">
                <span className="nav__list-mobile-text">Contact Us</span>
                <img className="nav__list-mobile-img" src={ArrowDown} alt="" />
              </li>
            </ul>
          </div>

          <div className="header__nav">
            <ul className="header__nav-list">
              <li className="nav__item">
                <div>
                  <div className="nav__item-text">Case Studies</div>
                  <ul className="nav__item-dropdown">
                    <li>
                      <a className="dropdown__link" href="">Marketing & Communications</a>
                    </li>
                    <li>
                      <a className="dropdown__link" href="">Marketing & Communications</a>
                    </li>
                    <li>
                      <a className="dropdown__link" href="">Marketing & Communications</a>
                    </li>
                    <li>
                      <a className="dropdown__link" href="">Marketing & Communications</a>
                    </li>
                    <li>
                      <a className="dropdown__link" href="">Marketing & Communications</a>
                    </li>
                    <li>
                      <a className="dropdown__link" href="">Marketing & Communications</a>
                    </li>
                    <li>
                      <a className="dropdown__link" href="">Marketing & Communications</a>
                    </li>
                  </ul>
                </div>
                <img className="nav__item-img" src={ArrowDown} alt="" />
              </li>
              <li className="nav__item">
                <span className="nav__item-text">Pricing</span>
                <img className="nav__item-img" src={ArrowDown} alt="" />
              </li>
              <li className="nav__item">
                <span className="nav__item-text">Contact Us</span>
                <img className="nav__item-img" src={ArrowDown} alt="" />
              </li>
            </ul>
            <button className="header__btn">Book a Demo</button>
          </div>
        </div>

        {/* <div className="modal__window">
                    <div>
                        <span>Book a Demo</span>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <span>Your name</span>
                        <input type="search" placeholder="Jonh Doe" />
                    </div>

                    <div>
                        <span>Your name</span>
                        <input type="phone" placeholder="+" />
                    </div>

                    <div>
                        <span>Your name</span>
                        <input type="text" placeholder="Tell us about" />
                    </div>
                    <button className="">Book a Daminion Demo </button>
                </div>*/}
      </div>
    </header>
  );
};

export default Header;
