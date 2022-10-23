import React from 'react';
import './style.css';

const Inform = () => {
  return (
    <div className="container">
      <div className="container__inform">
        <h2 className="title__section">
          The easiest way to organize, unify,
          <br />
          and secure all the digital assets
          <br />
          of your business
        </h2>
        <span className="information__subtitle">
          Daminion is a Digital{' '}
          <a className="information__subtitle-link" href="#" alt="">
            Asset Management solution for your team.
          </a>
          <br /> It increases productivity of marketing, design and sales teams by 30% average
        </span>

        <div className="information__search" action="#">
          <input
            className="information__search-input"
            type="text"
            placeholder="Your business e-mail"
          />
          <button className="information__search-btn" type="submit">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inform;
