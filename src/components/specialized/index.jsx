import React from 'react';
import './style.css';

const Specialized  = () => {
  return (
    <div className="container">
      <div className="container__specialized">
        <h2 className="title__section">Who needs Daminion:</h2>
        <span className="specialized__subtitle">
          Daminion is universally useful. But a couple of specialized cases <br /> are described
          below for your convenience
        </span>
        <div className="specialized__wrapper">
          <div className="specialized__list-left">
            <button className="specialized__btn-left specialized__left-pointer">Design</button>
            <button className="specialized__btn-left specialized__left-pointer">Marketing & Communications</button>
            <button className="specialized__btn-left specialized__left-pointer">Sales</button>
            <button className="specialized__btn-left specialized__left-pointer">GIS Specialists</button>
            <button className="specialized__btn-left specialized__left-pointer">Video & Photo Production</button>
          </div>

          <ol className="specialized__list-right">
            <li className="specialized__item-right">
              <strong>Designers</strong> can increase a number of finished projects by 30% on
              average without extra effort.
            </li>
            <li className="specialized__item-right">
              <strong>Quickly finding</strong> the existing assets that can be re-used saves time
              and money. No need to create duplicate content.
            </li>
            <li className="specialized__item-right">
              <strong>Versioning</strong> helps to revert back to the best design and avoid document
              collisions.{' '}
            </li>
            <li className="specialized__item-right">
              Daminion makes communicating with other departments that much easier, natively.
            </li>
            <li className="specialized__item-right">
              In a well-designed system like Daminion, you can quickly find 10x more inspirational
              material to easily start your designs.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Specialized;
