import React from 'react';
import './style.css';
import ForestryC from '../../images/forestryC.svg';
import HB from '../../images/hb.svg';
import Icih from '../../images/icih.svg';
import Zhonc from '../../images/zgonc.svg';
import Jf from '../../images/jf.svg';
import Ss from '../../images/ss.svg';
import Phoneandcomp from '../../images/phoneandcomp.png';

const UseDaminion = () => {
  return (
    <div className="container">
      <div className="container__presentation">
        <div className="presentation__content-left">
          <span className="presentation__content-left_title">600+</span>
          <span className="presentation__content-left_subtitle">
            companies use <br /> Daminion for growth
          </span>
          <ul className="presentation__content-left_list">
            <li className="presentation__content-left_item">
              <img className="presentation__content-left_img" src={ForestryC} alt="" />
            </li>
            <li className="presentation__content-left_item">
              <img className="presentation__content-left_img" src={HB} alt="" />
            </li>
            <li className="presentation__content-left_item">
              <img className="presentation__content-left_img" src={Icih} alt="" />
            </li>
            <li className="presentation__content-left_item">
              <img className="presentation__content-left_img" src={Zhonc} alt="" />
            </li>
            <li className="presentation__content-left_item">
              <img className="presentation__content-left_img" src={Jf} alt="" />
            </li>
            <li className="presentation__content-left_item">
              <img className="presentation__content-left_img" src={Ss} alt="" />
            </li>
          </ul>
        </div>
        <div className="presentation__content-right">
          <img className="presentation__content-right_img" src={Phoneandcomp} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default UseDaminion;
