import React from 'react';
import './style.css';

const Need = () => {
  return (
    <div className="container">
      <div className="container__need">
        <h2 className="title__section">Who needs Daminion:</h2>
        <span className="container__need__text">
          Daminion is universally useful. But a couple of specialized cases <br /> are described
          below for your convenience
        </span>
        <div className="container__need__list__menu">
          <div className="container__need__list__menu__btn">
            <button className="container__need__list__btn need__btn__active">Design</button>
            <button className="container__need__list__btn">Marketing & Communications</button>
            <button className="container__need__list__btn">Sales</button>
            <button className="container__need__list__btn">GIS Specialists</button>
            <button className="container__need__list__btn">Video & Photo Production</button>
          </div>

          <ol className="container__need__list__menu__title">
            <li className="container__need__list__menu__information">
              <strong>Designers</strong> can increase a number of finished projects by 30% on
              average without extra effort.
            </li>
            <li className="container__need__list__menu__information">
              <strong>Quickly finding</strong> the existing assets that can be re-used saves time
              and money. No need to create duplicate content.
            </li>
            <li className="container__need__list__menu__information">
              <strong>Versioning</strong> helps to revert back to the best design and avoid document
              collisions.{' '}
            </li>
            <li className="container__need__list__menu__information">
              Daminion makes communicating with other departments that much easier, natively.
            </li>
            <li className="container__need__list__menu__information">
              In a well-designed system like Daminion, you can quickly find 10x more inspirational
              material to easily start your designs.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Need;
