import React from 'react';
import './style.css';
import SoftWindow from '../../images/Soft window.png';

const Preview = () => {
  return (
    <div className="container">
        <h2 className="title__section">Just 2 clicks to find any file anytime</h2>
        <span className="preview__subtitle">
          Daminion’s proprietary tagging system is 100X faster <br /> Single, secure access point to
          all your digital assets.
        </span>
        <img className="preview__img" src={SoftWindow} alt="#" />
    </div>
  );
};

export default Preview;
