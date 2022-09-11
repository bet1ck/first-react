import React, {useState} from 'react';
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
    <div class="container">
        <div class="container__presentation">
            <div class="container__presentation__left__content">
                <span class="container__presentation__left__title">600+</span>
                <span class="container__presentation__left__text">companies use <br /> Daminion for growth</span>
                <ul class="container__presentation__left__title__list">
                    <li class="container__presentation__left__list"><img class="container__presentation__left__img" src={ForestryC} alt="" /></li>
                    <li class="container__presentation__left__list"><img class="container__presentation__left__img" src={HB} alt="" /></li>
                    <li class="container__presentation__left__list"><img class="container__presentation__left__img" src={Icih} alt="" /></li>
                    <li class="container__presentation__left__list"><img class="container__presentation__left__img" src={Zhonc} alt="" /></li>
                    <li class="container__presentation__left__list"><img class="container__presentation__left__img" src={Jf} alt="" /></li>
                    <li class="container__presentation__left__list"><img class="container__presentation__left__img" src={Ss} alt="" /></li>
                </ul>
            </div>
            <div class="container__presentation__right">
                <img class="container__presentation__right__img" src={Phoneandcomp} alt="#" />
            </div>
        </div>
    </div>
  )
}

export default UseDaminion