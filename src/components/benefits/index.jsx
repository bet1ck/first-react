import React from 'react';
import './style.css';
import Monsterbox from '../../images/monsterbox.svg';
import SearcheLupaComp from '../../images/searchelupacomp.svg';
import OrganizeWindow from '../../images/organizewindow.png';
import LeftsoftWindow from '../../images/leftsoftwindow.png';
import Mosterdoska from '../../images/mosterdoska.svg';
import Searchelupacomp from '../../images/searchelupacomp.svg';
import Cutcosts from '../../images/cutcosts.svg';
import Softwindowright from '../../images/softwindowright.png';

const Benefits = () => {
  return (
    <div className="container">
      <h2 className="title__section">Top 3 Daminion benefits</h2>

      <div className="container__benefits-block_right">
        <div className="benefits__block-right">
          <div className="benefits__section-icon_right">
            <img className="benefits__icon-right" src={Monsterbox} alt="#" />
          </div>
          <div className="benefits__content-right">
            <span className="benefits__content-title">Organize</span>
            <p className="benefits__content-subtitle">
              Daminion helps you organize all your digital media. Either automatically tag your
              images, or for the most accurate manual control Daminion affords you the batch tagging
              tools
            </p>
            <div className="benefits__content-block">
              <img className="benefits__content-block_icon" src={SearcheLupaComp} alt="#" />
              <span className="benefits__content-block_text">
                Searching for the right digital asset by tags is 100x times faster.
              </span>
            </div>
            <p className="benefits__content-text">
              Demotivated by manually going through all your files? What if you could narrow your
              searches by using tags. It will radically increase your productivity and preserve your
              sanity
            </p>
          </div>
        </div>
        <div className="benefits__section-right">
          <img className="benefits__section-img_right" src={OrganizeWindow} alt="" />
        </div>
      </div>

      <div className="container__benefits-block_left benefits__block__hiden">
        <div className="benefits__section-left">
          <img className="benefits__section-img_left" src={LeftsoftWindow} alt="" />
        </div>
        <div className="benefits__content-left">
          <div className="benefits__section-icon_left">
            <img className="benefits__icon-left" src={Mosterdoska} alt="" />
          </div>
          <div className="benefits__block-left">
            <span className="benefits__content-title">Instant Presentation</span>
            <p className="benefits__content-subtitle">
              Time is crucial when you need to quickly present just the right media to your clients.
            </p>
            <div className="benefits__content-block">
              <img className="benefits__content-block_icon" src={Searchelupacomp} alt="#" />
              <span className="benefits__content-block_text">
                Daminion allows you to instantly show them your expertise.
              </span>
            </div>
            <p className="benefits__content-text">
              Beat your competition with the fastest response.
            </p>
          </div>
        </div>
      </div>

      <div className="container__benefits-block_right">
        <div className="benefits__block-right">
          <div className="benefits__section-icon_right">
            <img className="benefits__icon-right" src={Cutcosts} alt="#" />
          </div>
          <div className="benefits__content-right">
            <span className="benefits__content-title">Cut Costs</span>
            <p className="benefits__content-subtitle">
              Use the existing digital assets without having to recreate them every time. Daminion
              will let you know you already have them.
            </p>
          </div>
        </div>
        <div className="benefits__section-right">
          <img className="benefits__section-img_right" src={Softwindowright} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
