import React from 'react';
import './style.css';
import SoftWindow from '../../images/Soft window.png';


const Preview = () => {
  return (
    <div class="container">
        <div class="container__preview">
            <h2 class="title__section">Just 2 clicks to find any file anytime</h2>
            <span class="container__preview__text">Daminion’s proprietary tagging system is 100X faster <br /> Single, secure access point to all your digital assets.</span>
            <img class="header__nav__list__img__preview" src={SoftWindow} alt="#" />
        </div>
    </div>
  )
}

export default Preview