import React from 'react';
import './style.css';
import Kavichki from '../../images/kavichki.svg';
import Avatarpl from '../../images/avatarpl.png';
import Dyssey from '../../images/dyssey.png';


const Comment = () => {
  return (
    <div class="container__comment__gradient">
        <div class="container">
            <div class="container__comment">
                <div class="container__comment__left">
                    <img class="container__comment__left__img" src={Kavichki} alt="#" />
                    <p class="container__comment__left__text">Daminion helps us to catalog a large amount of hi-res images and videos and organize them in a quick and easy way to be able to retrieve them as we need it.<br />
                            <br />
                            Instead of having pics spread across different locations without tags, Daminion giv
                            es us a central access point to them and helps to track and find them quickly.”</p>
                </div>
                <div class="container__comment__right">
                    <img class="container__comment__right__img" src={Avatarpl} alt="#" />
                    <span class="container__comment__right__title">Phil Lyndeman</span>
                    <span class="container__comment__right__text"><strong> Marine Exploration (NASDAQ: OMEX)</strong> <br /> The largest American company engaged in the salvage of deep-water shipwrecks.</span>
                    <img class="container__comment__right__img__logo" src={Dyssey} alt="#" />
                </div>    
            </div>    
        </div>
    </div>
  )
}

export default Comment

