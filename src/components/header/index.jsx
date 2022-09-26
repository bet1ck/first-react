import React from 'react';
import './style.css';
import BurgerIcon from '../../images/burger.svg';
import ArrowDown from '../../images/vectorbottom.svg';
import Logo from '../../images/logo.svg';

{/*все стили стили напистаь в соотвествии с БЭМ блок__элемент-продолжение-имени_модификатор*/}
{/*header__logo-large-link_black*/}
const Header = () => {
  return (
    <header>
      <span className="header__main-menu">Albert</span>
      <span className="header__main-menu header__main-menu_red">Albert</span>
      <span className="header__main-menu_red">Albert</span>
      <div className="container">
        <div className="header__container">
          <img className="header__burger" src={BurgerIcon} alt="" />{/*исправить, сделать div*3*/}

          <a className="header__logo__link" href="#">
            <img className="header__logo-link_img" src={Logo} alt="logo" />{/*убрать класс, перенести стили на ссылку*/}
          </a>
          <div className="header__container-mobile">{/**/}
            <ul>
              <li className="header__container__mobile__menu__list">
                <span className="header__container__mobile__menu__text">Case Studies</span>
                <img
                  className="header__container__mobile__menu__text__img"
                  src={ArrowDown}
                  alt=""
                />{/*добавить альты картинкам*/}
              </li>
              <li className="header__container__mobile__menu__list">
                <span className="header__container__mobile__menu__text">Pricing</span>
                <img
                  className="header__container__mobile__menu__text__img"
                  src={ArrowDown}
                  alt=""
                />
              </li>
              <li className="header__container__mobile__menu__list">
                <span className="header__container__mobile__menu__text">Contact Us</span>
                <img
                  className="header__container__mobile__menu__text__img"
                  src={ArrowDown}
                  alt=""
                />
              </li>
            </ul>
          </div>

          <div className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__item">
                <span className="header__nav__list__text">Case Studies</span>
                <img className="header__nav__list__img" src={ArrowDown} alt="" />
              </li>
              <li className="header__nav__item">
                <span className="header__nav__list__text">Pricing</span>
                <img className="header__nav__list__img" src={ArrowDown} alt="" />
              </li>
              <li className="header__nav__item">
                <span className="header__nav__list__text">Contact Us</span>
                <img className="header__nav__list__img" src={ArrowDown} alt="" />
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
