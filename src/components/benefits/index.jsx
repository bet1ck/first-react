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
    <div class="container">

        <h2 class="title__section">Top 3 Daminion benefits</h2>

        <div class="container__benefits__block__right">
            <div class="container__benefits__right">
                <div class="container__benefits__icon__right">
                    <img class="container__benefits__img" src={Monsterbox} alt="#" />
                </div>
                <div class="container__benefits__section__content">
                    <span class="container__benefits__section_content__title">Organize</span>
                    <p class="container__benefits__section_content__subtitle">Daminion helps you organize all your<br /> digital media. Either automatically tag<br /> your images, or for the most accurate<br /> manual control Daminion affords you<br /> the batch tagging tools</p>
                    <div  class="container__benefits__section_content__block">
                        <img class="container__benefits__section__content__block__img" src={SearcheLupaComp} alt="#" />
                        <span  class="container__benefits__section_content__block__text">Searching for the right digital asset <br /> by tags is 100x times faster.
                        </span>
                    </div>
                    <p  class="container__benefits__section_content__text">Demotivated by manually going through all your<br /> files? What if you could narrow your searches by<br /> using tags. It will radically increase your<br /> productivity and preserve your sanity</p>
                </div>
            </div>
            <img  class="container__benefits__right__img" src={OrganizeWindow} alt="" />
        </div>

        <div class="container__benefits__block__left benefits__block__hiden">

            <img  class="container__benefits__left__img" src={LeftsoftWindow} alt="" />

            <div class="container__benefits__left">
                <div class="container__benefits__icon__left">
                    <img class="container__benefits__img__left" src={Mosterdoska} alt="" />
                </div>
                <div class="container__benefits__section__content">
                    <span class="container__benefits__section_content__title">Instant Presentation</span>
                    <p class="container__benefits__section_content__subtitle">Time is crucial when you need to quickly <br /> present just the right media to your clients.</p>
                    <div  class="container__benefits__section_content__block">
                        <img class="container__benefits__section__content__block__img" src={Searchelupacomp} alt="#" />
                        <span  class="container__benefits__section_content__block__text">Daminion allows you to instantly <br /> show them your expertise.
                        </span>
                    </div>
                    <p  class="container__benefits__section_content__text">Beat your competition with the fastest response.</p>
                </div>
            </div>
                
        </div>

        <div class="container__benefits__block__right benefits__block__hiden">
            <div class="container__benefits__right">
                <div class="container__benefits__icon__right">
                    <img class="container__benefits__img" src={Cutcosts} alt="#" />
                </div>
                <div class="container__benefits__section__content">
                    <span class="container__benefits__section_content__title">Cut Costs</span>
                    <p class="container__benefits__section_content__subtitle">Use the existing digital assets
                        without having to recreate them every time. Daminion will let you know you already have them. </p>
                    </div>
            </div>
            <img  class="container__benefits__right__img" src={Softwindowright} alt="#" />
        </div>
    </div>        
  )
}

export default Benefits

