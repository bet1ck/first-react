import React from 'react';
import './style.css';
import G from '../../images/g2.svg';
import Avatarusersay from '../../images/avatarusersay.svg';
import Medal from '../../images/medal 1.svg';
import Vectorleft from '../../images/Vectorleft.svg';
import Star from '../../images/Star 1.svg';
import Vectorright from '../../images/Vectorright.svg';



const Usercomment = () => {

  return (
    <div class="container">
        <div class="container__slider__comment">
            <h2 class="title__section">
                What <img class="container__slider__comment__title__img" src={G} alt="" /> users say
            </h2>
            <div class="container__slider__comment__user">
                <div class="container__slider__comment__user__information__left">
                    <img class="container__slider__comment__user__information__avatar" src={Avatarusersay} alt="" />
                    <div>
                        <span class="container__slider__comment__user__information__title">Crystal Rouble</span>
                        <p class="container__slider__comment__user__information__text">Facility Manager and Senior Field Biologist<br />Conservation Fisheries , Environmental Services</p>
                    </div>    
                </div>
                <div class="container__slider__comment__user__information__right">
                    <span class="container__slider__comment__user__information__text">Source: <a class="container__slider__comment__user__information__link" href="">G2Crowd Reviews</a></span>
                    <img class="container__slider__comment__user__information__img" src={Medal} alt="" />
                </div>
            </div>

            <div class="container__slider__btn__left">
                <img src={Vectorleft} alt="" />
            </div>

            <div class="container__slider__comment__content">
                <div class="container__slider__comment__content__estimation">
                    <img class="container__slider__comment__content__estimation__img" src={Star} alt="" />
                    <img class="container__slider__comment__content__estimation__img" src={Star} alt="" />
                    <img class="container__slider__comment__content__estimation__img" src={Star} alt="" />
                    <img class="container__slider__comment__content__estimation__img" src={Star} alt="" />
                    <img class="container__slider__comment__content__estimation__img" src={Star} alt="" />
                </div>
                <span class="container__slider__comment__content__title">"Great network tagging and catalog solution"</span>
                <p class="container__slider__comment__content__text">For years Conservation Fisheries was looking for a way to utilize their photos in a more<br /> constructive way. We wanted to make the photos searchable, but on a network. Daminion was the<br />first software out to help us do that. We also love the prompt customer service that we recieve<br />from the Daminion staff if we do happen to encounter any issues.
                    <br /><br />
                    The great thing about Daminion for CFI is that we can tag photos with locations, field notes,<br />people, and species that we find. We are so excited to be able to keep track of this data and have it<br />so easily searchable and workable anywhere on our network. </p>
            </div>

            <div class="container__slider__btn__right">
                <img src={Vectorright} alt="" />
            </div>
 
        </div>
    </div>
  )
}

export default Usercomment

