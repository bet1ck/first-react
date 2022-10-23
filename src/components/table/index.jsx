import React from 'react';
import './style.css';
import DaminionLocalLogo from '../../images/daminionlocallogo.svg';
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
    <div className="container">
      <div>
        <h2 className="title__section">Daminion vs. Other Solutions</h2>

        <div className="container__table">
          <ul className="container__table-list">
            <li className="table__item-title_empty"></li>

            <li className="table__item-title_logo">
              <img className="item__title-logo_img" src={DaminionLocalLogo} alt="#" />
              <span className="item__title-logo_text">
                Daminion
                <br /> Local
              </span>
            </li>
            <li className="table__item-title_logo">
              <div className="item__title-logo_inner">
                <img className="item__title-logo_img" src={DaminionLocalLogo} alt="#" />
                <img className="item__title-logo_icon" src={Cloud} alt="#" />
              </div>
              <span className="item__title-logo_text">
                Daminion
                <br /> Cloud
              </span>
            </li>
            <li className="table__item-title_any">
              <img className="item__title-any_img" src={Networkfolders} alt="#" />
              <span className="item__title-any_text">
                Network <br />
                Folders
              </span>
            </li>
            <li className="table__item-title_any">
              <div className="item__title-any_wrapper">
                <img className="item__wrapper-img_first" src={Gdrive} alt="#" />
                <img className="item__wrapper-img_second" src={Db} alt="#" />
                <img className="item__wrapper-img_third" src={Od} alt="#" />
              </div>
              <span className="item__title-any_text">
                Dropbox,
                <br />
                GDrive, OneDrive
              </span>
            </li>
            <li className="table__item-title_any">
              <img className="item__title-any_img" src={Customsolution} alt="#" />
              <span className="item__title-any_text">
                Custom <br />
                Solution
              </span>
            </li>
          </ul>

          <ul className="container__table-list_section">
            <li className="table__list-section_subtitle">Multi-platform</li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">Optionally</span>
            </li>
          </ul>
          <ul className="container__table-list_section">
            <li className="table__list-section_subtitle">Mobile access</li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">Optionally</span>
            </li>
          </ul>
          <ul className="container__table-list_section_big container__table__bottom">
            <li className="table__list-section_subtitle ">
              Local version that works behind your firewall
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">Optionally</span>
            </li>
          </ul>

          <ul className="container__table-list_section_big  container__table__top">
            <li className="table__list-section_subtitle ">
              Basic tagging
              <br />
              (usually flat keywords)
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">Optionally</span>
            </li>
          </ul>
          <ul className="container__table-list_section">
            <li className="table__list-section_subtitle">Auto-tagging</li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">Optionally</span>
            </li>
          </ul>
          <ul className="container__table-list_section_big">
            <li className="table__list-section_subtitle ">
              Taxonomy and
              <br />
              Tag Management
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">Optionally</span>
            </li>
          </ul>
          <ul className="container__table-list_section">
            <li className="table__list-section_subtitle">Multi-platform</li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check_inform ">
              <div className="list__check-inner">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
          </ul>
          <ul className="container__table-list_section">
            <li className="table__list-section_subtitle">One-click sharing</li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">Optionally</span>
            </li>
          </ul>
          <ul className="container__table-list_section container__table__bottom">
            <li className="table__list-section_subtitle">Versioning</li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">Optionally</span>
            </li>
          </ul>

          <ul className="container__table-list_section container__table__top">
            <li className="table__list-section_subtitle">Granular Permissions</li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">Optionally</span>
            </li>
          </ul>
          <ul className="container__table-list_section">
            <li className="table__list-section_subtitle">Branding</li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">Optionally</span>
            </li>
          </ul>
          <ul className="container__table-list_section">
            <li className="table__list-section_subtitle">Media conversion</li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner ">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">Optionally</span>
            </li>
          </ul>
          <ul className="container__table-list_section">
            <li className="table__list-section_subtitle">Versioning</li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">Optionally</span>
            </li>
          </ul>
          <ul className="container__table-list_section container__table__bottom">
            <li className="table__list-section_subtitle">Multi-platform</li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Krestik} alt="#" />
              </div>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <img className="list__check-img" src={Galochka} alt="#" />
              </div>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">Optionally</span>
            </li>
          </ul>

          <ul className="container__table-list_section container__table__top">
            <li className="table__list-section_subtitle">File storage pricing</li>
            <li className="table__list-check">
              <span className="list__check-inform_text_strong list__green">Free</span>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <span className="list__check-inform_text_strong">100GB</span>
                <span className="list__check-inform_text">$10US</span>
              </div>
            </li>
            <li className="table__list-check">
              <span className="list__check-inform_text">Free</span>
            </li>
            <li className="table__list-check">
              <span className="list__check-inform_text">Depends from plans</span>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">
                Depends from <br /> storage provider
              </span>
            </li>
          </ul>

          <ul className="container__table-list_section_huge">
            <li className="table__list-section_subtitle">Pricing</li>
            <li className="table__list-check">
              <button className="table__list-btn">Contact us</button>
            </li>
            <li className="table__list-check">
              <div className="list__check-inner">
                <span className="list__check-inform_text">Starts from</span>
                <span className="list__check-inform_text_strong">$299/m</span>
              </div>
            </li>
            <li className="table__list-check">
              <span className="list__check-inform_text">Free</span>
            </li>
            <li className="table__list-check">
              <span className="list__check-inform_text">Depends from plans</span>
            </li>
            <li className="table__list-check_inform">
              <div className="list__check-inner">
                <span className="list__check-inform_text list__red">&gt;1M</span>
                <span className="list__check-inform_text">
                  (a team developers, testers, team lead, architect, support)
                </span>
              </div>
            </li>
          </ul>

          <ul className="container__table-list_section">
            <li className="table__list-section_subtitle">Deployment time</li>
            <li className="table__list-check">
              <span className="list__check-inform_text_strong">1-3 days</span>
            </li>
            <li className="table__list-check">
              <span className="list__check-inform_text_strong">1-3 days</span>
            </li>
            <li className="table__list-check">
              <div>-</div>
            </li>
            <li className="table__list-check">
              <span className="list__check-inform_text">1-3 days</span>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text list__red">700+ days</span>
            </li>
          </ul>

          <ul className="container__table-list_section_huge">
            <li className="table__list-section_subtitle">
              <span className="list__check-inform_text_strong">
                <strong>
                  Average time <br /> to find 1 image <br />
                </strong>
                by multiple criterias <br /> in 100k media archive.
              </span>
            </li>
            <li className="table__list-check">
              <span className="list__check-inform_text_strong">10-30 sec</span>
            </li>
            <li className="table__list-check">
              <span className="list__check-inform_text_strong">10-30 sec</span>
            </li>
            <li className="table__list-check">
              <span className="list__check-inform_text">3-6 hours</span>
            </li>
            <li className="table__list-check">
              <span className="list__check-inform_text">3-6 hours</span>
            </li>
            <li className="table__list-check_inform">
              <span className="list__check-inform_text">10-30 sec</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Table;
