import React from 'react';
import './style.css';
import EasyConifuration from '../../images/easy configuration.svg';
import Backups from '../../images/backups.svg';
import UsersCatalog from '../../images/userscatalog.svg';
import Plusik from '../../images/plusik.svg';

const Management = () => {
  return (
    <div className="container">
      <div className="container__management">
        <h2 className="title__section">
          Easy deployment & management <br /> <strong>for IT System Managers/Admins</strong>
        </h2>

        <div className="container__management-wrapper">
          <div className="management__wrapper-content">
            <img className="management__wrapper-content_img" src={EasyConifuration} alt="#" />
            <span className="management__wrapper-content_title">Easy configuration</span>
            <span className="management__wrapper-content_text">
              We support both Active Directory and built-in Daminion user management.
            </span>
          </div>
          <div className="management__wrapper-content">
            <img className="management__wrapper-content_img" src={Backups} alt="#" />
            <span className="management__wrapper-content_title">
              Company data is well protected with Scheduled Backups
            </span>
          </div>
          <div className="management__wrapper-content">
            <img className="management__wrapper-content_img" src={UsersCatalog} alt="#" />
            <span className="management__wrapper-content_title">
              Your involvment is not needed to add or remove users: catalog admin can do it easily.
            </span>
          </div>
        </div>

        <div className="container__management-block">
          <img className="container__management-img" src={Plusik} alt="#" />
          <span className="container__management-text">
            <a className="container__management-link" href="#">
              Click here
            </a>{' '}
            to expand all the benefits
          </span>
        </div>
      </div>
    </div>
  );
};

export default Management;
