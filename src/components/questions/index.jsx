import React from 'react';
import './style.css';
import Question from '../../images/question.svg';
import Kovichki from '../../images/kovichki.svg';
import Vectortop from '../../images/Vectortop.svg';
import Vectorminibottom from '../../images/Vectorminibottom.svg';
import Plusik from '../../images/plusik.svg';


const Questions = () => {

  return (
    <div class="container__questions">
        <div class="container">
            <h2 class="title__section">Frequently Asked Questions</h2>
            <div class="container__questions__content">
                <div class="container__questions__content__show">
                    <div class="container__questions__content__icon">
                        <img src={Question} alt="" />
                    </div>
                    <div class="container__questions__content__wrapper">
                        <span class="container__questions__container__subtitle">Who will be tagging all our files and how long will it take?</span>
                        <ul class="container__questions__container__title">
                            <li class="container__questions__container__list">Daminion’s AI can do it for you automatically.</li>
                            <li class="container__questions__container__list">Daminion auto-imports ALL the existing tags and metadata from your files, giving you a jump-start</li>
                            <li class="container__questions__container__list">Your team can add to it manually using the easy Daminion tagging</li>
                            <li class="container__questions__container__list">Daminion offers an optional tagging service by our experts</li>    
                        </ul>
                        <div  class="container__questions__content__comment">
                            <img class="container__questions__content__comment__icon" src={Kovichki} alt="" />
                            <span class="container__questions__content__comment__text">For every minute spent organizing, an hour is earned.</span>
                            <span class="container__questions__content__comment__ps">— Benjamin Franklin</span>
                        </div>
                        <span class="container__questions__content__desc">For a team of 20 people every single minute invested in organizing will save your company 20 hours.</span>
                    </div>
                </div>    
                <div>
                    <img class="container__questions__content__vector" src={Vectortop} alt="" />
                </div>    
            </div>

            <div class="container__questions__content">
                <div class="container__questions__content__hide">
                    <div class="container__questions__content__icon">
                        <img src={Question} alt="" />
                    </div>
                    <div class="container__questions__content__wrapper">
                        <span class="container__questions__container__subtitle__hide">Can this system be used with an existing photo directory structure without moving files?<br />We want to layer it on top of a shared folder.</span>
                    </div>   
                </div>    
                <div class="container__questions__content__vector">
                    <img src={Vectorminibottom} alt="" />
                </div>      
            </div>    

            <div class="container__management__link">
                <img class="container__management__img" src={Plusik} alt="" />
                <span class="container__management__text"><a class="container__management__text" href="#">Click here</a> to expand all the benefits</span>
            </div>
            
        </div>    
    </div>   
  )
}

export default Questions

