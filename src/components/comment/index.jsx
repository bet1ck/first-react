import React from 'react';
import './style.css';
import Kavichki from '../../images/kavichki.svg';
import Avatarpl from '../../images/avatarpl.png';
import Dyssey from '../../images/dyssey.png';

const Comment = () => {
  return (
    <div className="container__comment-gradient">
      <div className="container">
        <div className="container__comment">
          <div className="container__comment-left">
            <img className="comment__left-img" src={Kavichki} alt="#" />
            <p className="comment__left-text">
              Daminion helps us to catalog a large amount of hi-res images and videos and organize
              them in a quick and easy way to be able to retrieve them as we need it.
              <br />
              <br />
              Instead of having pics spread across different locations without tags, Daminion giv es
              us a central access point to them and helps to track and find them quickly.”
            </p>
          </div>
          <div className="container__comment-right">
            <img className="comment__right-img" src={Avatarpl} alt="#" />
            <span className="comment__right-title">Phil Lyndeman</span>
            <span className="comment__right-text">
              <strong> Marine Exploration (NASDAQ: OMEX)</strong> <br /> The largest American
              company engaged in the salvage of deep-water shipwrecks.
            </span>
            <img className="comment__right-img_logo" src={Dyssey} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
