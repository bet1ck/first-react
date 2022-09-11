import React, {useState} from 'react';
import './style.css';
import BurgerIcon from '../../images/burger.svg';
import ArrowDown from '../../images/vectorbottom.svg';
import Logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header>
        <div class="container">
            <div class="header__container">

                <img class="header__burger" src={BurgerIcon} alt="" />

                <a class="header__logo__link" href="#">
                  <img class="header__logo__link__img" src={Logo} alt="logo" />
                </a>
                <div class="header__container__mobile__menu__open">
                    <ul>
                        <li class="header__container__mobile__menu__list">
                            <span class="header__container__mobile__menu__text">Case Studies</span>
                            <img class="header__container__mobile__menu__text__img" src={ArrowDown} alt="" />
                        </li>
                        <li class="header__container__mobile__menu__list">
                            <span class="header__container__mobile__menu__text">Pricing</span>
                            <img class="header__container__mobile__menu__text__img" src={ArrowDown} alt="" />
                        </li>
                        <li class="header__container__mobile__menu__list">
                            <span class="header__container__mobile__menu__text">Contact Us</span>
                            <img class="header__container__mobile__menu__text__img" src={ArrowDown} alt="" />
                        </li>
                    </ul>
                </div>

                <div class="header__nav">
                    <ul class="header__nav__list">
                        <li class="header__nav__item">
                            <span class="header__nav__list__text">Case Studies</span>
                            <img class="header__nav__list__img" src={ArrowDown} alt="" />
                        </li>
                        <li class="header__nav__item">
                            <span class="header__nav__list__text">Pricing</span>
                            <img class="header__nav__list__img" src={ArrowDown} alt="" />
                        </li>
                        <li class="header__nav__item">
                            <span class="header__nav__list__text">Contact Us</span>
                            <img class="header__nav__list__img" src={ArrowDown} alt="" />
                        </li>
                    </ul>
                    <button class="header__btn">Book a Demo</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header