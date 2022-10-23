import React from 'react';
import './style.css';
import Question from '../../images/question.svg';
import Kovichki from '../../images/kovichki.svg';
import Vectortop from '../../images/Vectortop.svg';
import Vectorminibottom from '../../images/Vectorminibottom.svg';
import Plusik from '../../images/plusik.svg';

const Questions = () => {
  return (
    <div className="container__questions">
      <div className="container">
        <h2 className="title__section">Frequently Asked Questions</h2>
        <div className="container__questions-wrapper">
          <div className="questions-wrapper">
            <div className="questions-wrapper-icon">
              <img src={Question} alt="" />
            </div>
            <div className="">
              <span className="questions__subtitle">
                Who will be tagging all our files and how long will it take?
              </span>
              <ul className="questions__list">
                <li className="questions__item">Daminion’s AI can do it for you automatically.</li>
                <li className="questions__item">
                  Daminion auto-imports ALL the existing tags and metadata from your files, giving
                  you a jump-start
                </li>
                <li className="questions__item">
                  Your team can add to it manually using the easy Daminion tagging
                </li>
                <li className="questions__item">
                  Daminion offers an optional tagging service by our experts
                </li>
              </ul>
              <div className="questions__comment">
                <img className="questions__comment-icon" src={Kovichki} alt="" />
                <span className="questions__comment-text">
                  For every minute spent organizing, an hour is earned.
                </span>
                <span className="questions__comment-copyright">— Benjamin Franklin</span>
              </div>
              <span className="questions__comment-desc">
                For a team of 20 people every single minute invested in organizing will save your
                company 20 hours.
              </span>
            </div>
          </div>
          <div>
            <img className="questions__vector" src={Vectortop} alt="" />
          </div>
        </div>

        <div className="container__questions-wrapper">
          <div className="questions-wrapper">
            <div className="questions-wrapper-icon">
              <img src={Question} alt="" />
            </div>
            <div className="">
              <span className="questions__subtitle">
                Can this system be used with an existing photo directory structure without moving
                files?
                <br />
                We want to layer it on top of a shared folder.
              </span>
            </div>
          </div>
          <div className="questions__vector">
            <img src={Vectorminibottom} alt="" />
          </div>
        </div>

        <div className="questions__inner">
            <img className="questions__inner-icon" src={Plusik} alt="" />
            <a className="questions__inner-link" href="#">See more questions</a>
        </div>
      </div>
    </div>
  );
};

export default Questions;
