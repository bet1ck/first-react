import React from 'react';
import './style.css';

const Need = () => {
  return (
    <div class="container">
        <div class="container__need">
            <h2 class="title__section">Who needs Daminion:</h2>
            <span class="container__need__text">Daminion is universally useful. But a couple of specialized cases <br /> are described below for your convenience</span>
            <div class="container__need__list__menu">
                <div class="container__need__list__menu__btn">
                    <button class="container__need__list__btn need__btn__active">Design</button>
                    <button class="container__need__list__btn">Marketing & Communications</button>
                    <button class="container__need__list__btn">Sales</button>
                    <button class="container__need__list__btn">GIS Specialists</button>
                    <button class="container__need__list__btn">Video & Photo Production</button>
                </div>

                    <ol class="container__need__list__menu__title">
                        <li class="container__need__list__menu__information"><strong>Designers</strong> can increase a number of finished projects by 30% on average without extra effort.</li>
                        <li class="container__need__list__menu__information"><strong>Quickly finding</strong> the existing assets that can be re-used saves time and money. No need to create duplicate content.</li>
                        <li class="container__need__list__menu__information"><strong>Versioning</strong> helps to revert back to the best design and avoid document collisions. </li>
                        <li class="container__need__list__menu__information">Daminion makes communicating with other departments that much easier, natively.</li>
                        <li class="container__need__list__menu__information">In a well-designed system like Daminion, you can quickly find 10x more inspirational material to easily start your designs.</li>
                    </ol>

            </div>
        </div>
    </div>
  )
}

export default Need