import React from 'react';
import './style.css';
import Monsterdubina from '../../images/monsterdubina.svg';
import Searchelupacomp from '../../images/searchelupacomp.svg';
import Windowlogin from '../../images/windowlogin.png';
import LeftsoftWindow from '../../images/leftsoftwindow.png';
import MonsterDoska from '../../images/mosterdoska.svg';
import Cutcosts from '../../images/cutcosts.svg';
import SearchelupaComp from '../../images/searchelupacomp.svg';
import Softwindowright from '../../images/softwindowright.png';


const Expertize = () => {
  return (
    <div class="container">
        <h2 class="title__section">Daminion’s expertize for your business</h2>

        <div class="container__benefits__block__right container__benefits__block__show">
            <div class="container__expertize__right">
                <div class="container__expertize__icon__right">
                    <img class="container__expertize__img" src={Monsterdubina} alt="#" />
                </div>
                <div class="container__expertize__section__content">
                    <span class="container__expertize__section_content__title">Data security</span>
                    <p class="container__expertize__section_content__subtitle">Daminion protects access to your data by roles and on the<br />file level. Be as granular as you like. Assign<br />Daminion-managed roles to your users. Roles will set and<br />control the user’s access to functionality any way you like. </p>
                    <div  class="container__expertize__section_content__block">
                        <img class="container__expertize__section__content__block__img" src={Searchelupacomp} alt="#" />
                        <span  class="container__expertize__section_content__block__text">Searching for the right digital asset <br /> by tags is 100x times faster.
                        </span>
                    </div>
                    <p class="container__expertize__section_content__text">Daminion role structure is as flexibleas you need it to be.</p>
                </div>
            </div>
            <img class="container__expertize__right__img" src={Windowlogin} alt="#" />
        </div>

        <div class="container__benefits__block__left container__benefits__block__hiden">

            <img class="container__expertize__left__img" src={LeftsoftWindow} alt="#" />

            <div class="container__expertize__left">
                <div class="container__expertize__icon__left">
                    <img class="container__expertize__img__left" src={MonsterDoska} alt="#" />
                </div>
                <div class="container__expertize__section__content">
                    <span class="container__expertize__section_content__title">Geotagging</span>
                    <p class="container__expertize__section_content__subtitle">Where in the world was Whaldo? Visualize on the map the actual locations your photos were taken. Or, if geodata is missing, just drag images to the map right inside Daminion. Done!</p>
                </div>
            </div>
            
        </div>

        <div class="container__benefits__block__right container__benefits__block__hiden">
            <div class="container__expertize__right">
                <div class="container__expertize__icon__right">
                    <img class="container__expertize__img" src={Cutcosts} alt="#" />
                </div>
                <div class="container__expertize__section__content">
                    <span class="container__expertize__section_content__title">Cut Costs</span>
                    <p class="container__expertize__section_content__subtitle">Are you using the tools for collaboration that were<br />not even designed for collaboration?</p> 
                    <div  class="container__expertize__section_content__block">
                        <img class="container__expertize__section__content__block__img" src={SearchelupaComp} alt="#" />
                        <span  class="container__expertize__section_content__block__text">Marketers and designers can collaborate<br />x10 times faster by using Daminion. </span>
                    </div>
                    <div  class="container__expertize__section_content__block">
                        <img class="container__expertize__section__content__block__img" src={SearchelupaComp} alt="#" />
                        <span  class="container__expertize__section_content__block__text">Email or messengers hide your works among thousands<br />of other, unrelatedand irrelevant messages.</span>
                    </div>
                    <p class="container__expertize__section_content__text">But with Daminion’s built-in tools, manage document versions,<br />comment and annotate your work, collaborate away – all in one place.</p> 
                </div>
            </div>
            <img class="container__expertize__right__img" src={Softwindowright} alt="#" />
        </div>

    </div>        
  )
}

export default Expertize

