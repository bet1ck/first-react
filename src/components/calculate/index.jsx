import React from 'react';
import './style.css';

const Calculate = () => {
  return (
    <div class="container">
        <div class="container__calculate">
            <h2 class="title__section">Calculate Your<br />Return on Investment (ROI)</h2>

            <div class="container__calculate__quantity__staff">
                <div class="container__calculate__quantity__block calculate__block__left">
                    <span class="container__calculate__quantity__block__subtitle">Number of people</span>
                    <span class="container__calculate__quantity__block__text">who work with your digital assets</span>
                </div>

                <div>
                    <input class="container__calculate__slider" type="range" />
                </div>

                <div class="container__calculate__quantity__block">
                    <span class="container__calculate__quantity__block__subtitle">10</span>
                    <span class="container__calculate__quantity__block__text">(designers, marketers,  etc...)</span>
                </div>

            </div>

            <div class="container__calculate__quantity__staff">
                <div class="container__calculate__quantity__block calculate__block__left">
                    <span class="container__calculate__quantity__block__subtitle">Average Annual Salary</span>
                </div>
                
                <div>
                    <input class="container__calculate__slider" type="range" />
                </div>

                <div class="container__calculate__quantity__block">
                    <span class="container__calculate__quantity__block__subtitle">$75.000 USD</span>
                </div>

            </div>
        </div>
    </div>        
  )
}

export default Calculate

