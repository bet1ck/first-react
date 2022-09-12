import React from 'react';
import './style.css';
import DaminionLocalLogo from '../../images/monsterbox.svg';
import Cloud from '../../images/cloud.svg';
import Networkfolders from '../../images/networkfolders.svg';
import Gdrive from '../../images/gdrive.svg';
import Db from '../../images/db.svg';
import Od from '../../images/od.svg';
import Customsolution from '../../images/customsolution.svg';
import Galochka from '../../images/galochka.svg';
import Krestik from '../../images/krestik.svg';



const Table = () => {
  return (
    <div class="container">
        
        <div class="container__table">

            <h2 class="title__section">Daminion vs. Other Solutions</h2>

            <div class="container__table__content">
                <ul class="container__table__list">
                    <li class="table__list__empty">
                    </li>
                    <li class="table__list__information__title__daminion">
                        <img class="table__list__information__img__daminion" src={DaminionLocalLogo} alt="#" />
                        <span class="table__list__information__text__daminion">Daminion<br /> Local</span>
                    </li>
                    <li class="table__list__information__title__daminion">
                        <div class="table__list__information__img__logo">
                            <img class="table__list__information__img__daminion" src={DaminionLocalLogo} alt="#" />
                            <img class="list__img__absolut" src={Cloud} alt="#" />
                        </div>
                        <span class="table__list__information__text__daminion">Daminion<br /> Cloud</span>
                    </li>
                    <li class="table__list__information__title">
                        <img class="table__list__information__img" src={Networkfolders} alt="#" />
                        <span class="table__list__information__text">Network <br />Folders</span>
                    </li>
                    <li class="table__list__information__title">
                        <div class="list__img__information">
                            <img class="table__list__information__img__mini" src={Gdrive} alt="#" />
                            <img class="table__list__information__img__mini" src={Db} alt="#" />
                            <img class="table__list__information__img__mini" src={Od} alt="#" />
                        </div>
                        <span class="table__list__information__text">Dropbox,<br />GDrive, OneDrive</span>
                    </li>
                    <li class="table__list__information__title">
                        <img class="table__list__information__img" src={Customsolution} alt="#" />
                        <span class="table__list__information__text">Custom <br />Solution</span>
                    </li>
                </ul>

                <ul class="container__table__list__check">
                    <li class="table__list__check__subtitle">Multi-platform</li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">Optionally</span></li>
                </ul>
                <ul class="container__table__list__check">
                    <li class="table__list__check__subtitle">Multi-platform</li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">Optionally</span></li>
                </ul>
                <ul class="container__table__list__check container__table__bottom">
                    <li class="table__list__check__subtitle ">Local version that works behind your firewall</li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">Optionally</span></li>
                </ul>

                <ul class="container__table__list__check container__table__top">
                    <li class="table__list__check__subtitle ">Basic tagging<br />(usually flat keywords)</li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">Optionally</span></li>
                </ul>
                <ul class="container__table__list__check">
                    <li class="table__list__check__subtitle">Auto-tagging</li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">Optionally</span></li>
                </ul>
                <ul class="container__table__list__check">
                    <li class="table__list__check__subtitle ">Taxonomy and<br />Tag Management</li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">Optionally</span></li>
                </ul>
                <ul class="container__table__list__check">
                    <li class="table__list__check__subtitle">Multi-platform</li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check__item "><div class="table__list__check__block"><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                </ul>
                <ul class="container__table__list__check">
                    <li class="table__list__check__subtitle">One-click sharing</li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">Optionally</span></li>
                </ul>
                <ul class="container__table__list__check container__table__bottom">
                    <li class="table__list__check__subtitle">Versioning</li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">Optionally</span></li>
                </ul>

                <ul class="container__table__list__check container__table__top">
                    <li class="table__list__check__subtitle">Granular Permissions</li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">Optionally</span></li>
                </ul>
                <ul class="container__table__list__check">
                    <li class="table__list__check__subtitle">Branding</li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">Optionally</span></li>
                </ul>
                <ul class="container__table__list__check">
                    <li class="table__list__check__subtitle">Media conversion</li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check "><div class="table__list__check__block "><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">Optionally</span></li>
                </ul>
                <ul class="container__table__list__check">
                    <li class="table__list__check__subtitle">Versioning</li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">Optionally</span></li>
                </ul>
                <ul class="container__table__list__check container__table__bottom">
                    <li class="table__list__check__subtitle">Multi-platform</li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Krestik} alt="#" /></div></li>
                    <li class="table__list__check"><div class="table__list__check__block"><img class="table__list__check__img" src={Galochka} alt="#" /></div></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">Optionally</span></li>
                </ul>

                <ul class="container__table__list__check container__table__top">
                    <li class="table__list__check__subtitle">File storage pricing</li>
                    <li class="table__list__check"><span class="table__list__check__text__strong list__green">Free</span></li>
                    <li class="table__list__check">
                        <div class="table__list__check__block">
                            <span class="table__list__check__text__strong">100GB</span>
                            <span class="table__list__check__text">$10US</span>
                        </div>    
                    </li>
                    <li class="table__list__check"><span class="table__list__check__text">Free</span></li>
                    <li class="table__list__check"><span class="table__list__check__text">Depends from plans</span></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">Depends from <br /> storage provider</span></li>
                </ul>

                <ul class="container__table__list__check">
                    <li class="table__list__check__subtitle subtitle__big">Pricing</li>
                    <li class="table__list__check list__green"><button class="table__list__btn">Contact us</button></li>
                    <li class="table__list__check ">
                        <div class="table__list__check__block">
                            <span class="table__list__check__text">Starts from</span>
                            <span class="table__list__check__text__strong">$299/m</span>
                        </div>    
                    </li>
                    <li class="table__list__check"><span class="table__list__check__text">Free</span></li>
                    <li class="table__list__check"><span class="table__list__check__text">Depends from plans</span></li>
                    <li class="table__list__check__item">
                        <div class="table__list__check__block">
                            <span class="table__list__check__text list__red">>1M</span>
                            <span class="table__list__check__text">(a team developers,  testers, team lead, architect, support)</span>
                        </div>     
                    </li>
                </ul>

                <ul class="container__table__list__check">
                    <li class="table__list__check__subtitle">Deployment time</li>
                    <li class="table__list__check"><span class="table__list__check__text__strong">1-3 days</span></li>
                    <li class="table__list__check"><span class="table__list__check__text__strong">1-3 days</span></li>
                    <li class="table__list__check"><div>-</div></li>
                    <li class="table__list__check"><span class="table__list__check__text">1-3 days</span></li>
                    <li class="table__list__check__item"><span class="table__list__check__text list__red">700+ days</span></li>
                </ul>

                <ul class="container__table__list__check">
                    <li class="table__list__check__subtitle subtitle__big">                           
                        <div class="table__list__check__block__title">
                            <span class="table__list__check__text__strong">Average time <br /> to find 1 image </span>
                            <span class="table__list__check__text__title">by multiple criterias <br /> in 100k media archive.</span>
                        </div>
                    </li>
                    <li class="table__list__check"><span class="table__list__check__text__strong">10-30 sec</span></li>
                    <li class="table__list__check"><span class="table__list__check__text__strong">10-30 sec</span></li>
                    <li class="table__list__check"><span class="table__list__check__text">3-6 hours</span></li>
                    <li class="table__list__check"><span class="table__list__check__text">3-6 hours</span></li>
                    <li class="table__list__check__item"><span class="table__list__check__text">10-30 sec</span></li>
                </ul>
            </div>

        </div>    

    </div>        
  )
}

export default Table

