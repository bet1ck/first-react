import React from 'react';
import './style.css';
import EasyConifuration from '../../images/easy configuration.svg';
import Backups from '../../images/backups.svg';
import UsersCatalog from '../../images/userscatalog.svg';
import Plusik from '../../images/plusik.svg';

const Management = () => {
  return (
    <div class="container">
        <div class="container__management">
            <h2 class="title__section">Easy deployment & management <br /> <strong>for IT System Managers/Admins</strong></h2>
        
            <div class="container__management__facilities">
                <div class="container__management__facilities__chapter">
                    <img class="container__management__facilities__img" src={EasyConifuration} alt="#" />
                    <span class="container__management__facilities__title">Easy configuration</span>
                    <span class="container__management__facilities__text">We support both Active Directory and built-in Daminion user management.</span>
                </div>
                <div class="container__management__facilities__chapter">
                    <img class="container__management__facilities__img" src={Backups} alt="#" />
                    <span class="container__management__facilities__title">Company data is well protected with Scheduled Backups</span>
                </div>
                <div class="container__management__facilities__chapter">
                    <img class="container__management__facilities__img" src={UsersCatalog} alt="#" />
                    <span class="container__management__facilities__title">Your involvment is not needed to add or remove users: catalog admin can do it easily.</span>
                </div>
            </div>

            <div class="container__management__link">
                <img class="container__management__img" src={Plusik} alt="#" />
                <span class="container__management__text"><a class="container__management__text" href="#">Click here</a> to expand all the benefits</span>
            </div>
        </div>
    </div>
  )
}

export default Management