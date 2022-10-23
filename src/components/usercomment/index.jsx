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
    <div className="container">
      <div className="container__usercomment">
        <h2 className="title__section">
          What <img className="container__usercomment-title_img" src={G} alt="" /> users say
        </h2>
        <div className="usercomment__block">
          <div className="usercomment__block-left">
            <img className="usercomment__block-left_img" src={Avatarusersay} alt="" />
            <div>
              <span className="usercomment__block-left_title">Crystal Rouble</span>
              <p className="usercomment__block-left_text">
                Facility Manager and Senior Field Biologist
                <br />
                Conservation Fisheries , Environmental Services
              </p>
            </div>
          </div>
          <div className="usercomment__block-right">
            <span className="usercomment__block-right_text">
              Source:{' '}
              <a className="usercomment__block-right_link" href="">
                G2Crowd Reviews
              </a>
            </span>
            <img className="usercomment__block-right_img" src={Medal} alt="" />
          </div>
        </div>

        <div className="container__usercomment-btn_left">
          <img src={Vectorleft} alt="" />
        </div>

        <div className="usercomment__content">
          <div className="usercomment__content-inner">
            <img className="usercomment__content-img" src={Star} alt="" />
            <img className="usercomment__content-img" src={Star} alt="" />
            <img className="usercomment__content-img" src={Star} alt="" />
            <img className="usercomment__content-img" src={Star} alt="" />
            <img className="usercomment__content-img" src={Star} alt="" />
          </div>
          <span className="usercomment__content-title">
            Great network tagging and catalog solution
          </span>
          <p className="usercomment__content-text">
            For years Conservation Fisheries was looking for a way to utilize their photos in a more
            <br /> constructive way. We wanted to make the photos searchable, but on a network.
            Daminion was the
            <br />
            first software out to help us do that. We also love the prompt customer service that we
            recieve
            <br />
            from the Daminion staff if we do happen to encounter any issues.
            <br />
            <br />
            The great thing about Daminion for CFI is that we can tag photos with locations, field
            notes,
            <br />
            people, and species that we find. We are so excited to be able to keep track of this
            data and have it
            <br />
            so easily searchable and workable anywhere on our network.{' '}
          </p>
        </div>

        <div className="container__usercomment-btn_right">
          <img src={Vectorright} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Usercomment;
