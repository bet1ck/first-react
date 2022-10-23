import React from 'react';
import './style.css';
import Book from '../../images/Book a Free online  Demo of Daminion now.svg';

const Request = () => {
  return (
    <div className="container__request">
      <div className="container">
        <div className="container__request-wrapper">
          <img className="request__img" src={Book} alt="" />
          <div>
            <span className="request__title">
              Book a Free online
              <br />
              Demo of Daminion now
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
      </div>
    </div>
  );
};

export default Request;
