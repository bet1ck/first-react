import React from 'react';
import './style.css';

import Plusik from '../../images/plusik.svg';

const Calculate = () => {
  return (
    <div className="container">
      <h2 className="title__section">
        Calculate Your
        <br />
        Return on Investment (ROI)
      </h2>

      <div className="container__calculator">
        <div className="calculator__inner">
          <span className="calculator__inner-subtitle">Number of people</span>
          <span className="calculator__inner-text">who work with your digital assets</span>
        </div>

        <div className="calculator__block">
          <input className="calculator__range" type="range" />
        </div>

        <div className="calculator__inner">
          <span className="calculator__inner-subtitle">10</span>
          <span className="calculator__inner-text">(designers, marketers, etc...)</span>
        </div>
      </div>

      <div className="container__calculator">
        <div className="calculator__inner">
          <span className="calculator__inner-subtitle">Average Annual Salary</span>
        </div>

        <div className="calculator__block">
          <input className="calculator__range" type="range" />
        </div>

        <div className="calculator__inner">
          <span className="calculator__inner-subtitle">$75.000 USD</span>
        </div>
      </div>

      <button className="calculator__btn">Calculate your Daminion ROI</button>

      <div className="calculator__wrapper">
        <img className="calculator__wrapper-img" src={Plusik} alt="" />
        <a className="calculator__wrapper-link" href="#">
          Open advanced calculator
        </a>
      </div>
    </div>
  );
};

export default Calculate;
