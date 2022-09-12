import React from 'react';
import './style.css';
import Book from '../../images/Book a Free online  Demo of Daminion now.svg';

const Request = () => {

  return (
    <div class="container__request">
        <div class="container">
            <div class="container__request__wrapper">
                <div class="container__request__block__img">
                    <img class="container__request__img" src={Book} alt="" />
                </div>
                <div class="container__request__content">
                    <span class="container__request__content__subtitle">Book a Free online<br />Demo of Daminion now</span>
                    <div class="information__text__search" action="#">
                        <input class="information__text__input" type="text" placeholder="Your business e-mail" />
                        <button class="information__text__btn" type="submit">Book a Demo</button>
                </div>
                </div>
            </div>    
        </div>
    </div>    
  )
}

export default Request

