import React from 'react';
import './index.css';

const Inform = () => {
    return (
        <div class="container">
            <div class="information__title">
                    <h2 class="title__section">
                        The easiest way to organize, unify,<br /> 
                        and secure all the digital assets<br />
                        of your business
                    </h2>
                    <span class="information__text">
                        Daminion is a Digital <a href="#" alt="">Asset Management solution for your team.</a><br /> It increases productivity of marketing, design and sales teams by 30% average
                    </span>

                <div class="information__text__search" action="#">
                        <input class="information__text__input" type="text" placeholder="Your business e-mail" />
                        <button class="information__text__btn" type="submit">Book a Demo</button>
                </div>
            </div>    
        </div>                 
  )
}

export default Inform