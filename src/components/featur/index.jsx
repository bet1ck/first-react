import React from 'react';
import './style.css';
import Unify from '../../images/Unify.svg';
import Forgetseingdouble from '../../images/Forgetseingdouble.svg';
import Integrations from '../../images/Integrations.svg';
import Wordpress from '../../images/wordpress 1.svg';
import CC from '../../images/creative-cloud-cc 1.svg';
import Dropbox from '../../images/dropbox.svg';
import MO from '../../images/Microsoft_Office_logo_(2019–present) 1.svg';
import Oneclicksharing from '../../images/One-clicksharing.svg';
import Resizeonthefly from '../../images/Resizeon-the-fly.svg';
import Previewallmediaformats from '../../images/Previewallmediaformats.svg';

const Featur = () => {
  return (
    <div className="container">
      <div className="container__featur">
        <h2 className="title__section">Other helpful Daminion features</h2>

        <div className="container__featur-block">
          <div className="container__featur-img">
            <img src={Unify} alt="" />
          </div>
          <div>
            <span className="container__featur-subtitle">Forget seing double</span>
            <p className="container__featur-text">
              Daminion prevents re-importing the same file, so no duplicates are
              <br />
              created in the first place, ever. It also finds and lets you eliminate
              <br />
              existing duplicates.
            </p>
            <p className="container__featur-desc">
              No more document versions collision or confusion among your colleagues.
            </p>
          </div>
        </div>

        <div className="container__featur-block">
          <div className="container__featur-img">
            <img src={Forgetseingdouble} alt="" />
          </div>
          <div>
            <span className="container__featur-subtitle">Forget seing double</span>
            <p className="container__featur-text">
              Daminion prevents re-importing the same file, so no duplicates are
              <br />
              created in the first place, ever. It also finds and lets you eliminate
              <br />
              existing duplicates.
            </p>
            <p className="container__featur-desc">
              No more document versions collision or confusion among your colleagues.
            </p>
          </div>
        </div>

        <div className="container__featur-block">
          <div className="container__featur-img">
            <img src={Integrations} alt="" />
          </div>
          <div>
            <span className="container__featur-subtitle">Integrations</span>
            <p className="container__featur-text">
              Daminion can be easily integrated with your local and cloud solutions, for
              <br />
              example corporate CMS, Adobe Creative Suite, Dropbox, MS Office, etc.
            </p>
            <div>
              <img className="featur__desc-img_first" src={Wordpress} alt="#" />
              <img className="featur__desc-img_second" src={CC} alt="#" />
              <img className="featur__desc-img_third" src={Dropbox} alt="#" />
              <img className="featur__desc-img_fourth" src={MO} alt="#" />
            </div>
          </div>
        </div>

        <div className="container__featur-block">
          <div className="container__featur-img">
            <img src={Oneclicksharing} />
          </div>
          <div>
            <span className="container__featur-subtitle">One-click sharing</span>
            <p className="container__featur-text">
              Old-school sharing methods, for instance via email, have severe
              <br />
              file size limitations.
            </p>
            <p className="container__featur-desc">
              Share your digital assets by link with Daminion, without any size limit, instantly.
            </p>
          </div>
        </div>

        <div className="container__featur-block">
          <div className="container__featur-img">
            <img src={Resizeonthefly} alt="#" />
          </div>
          <div>
            <span className="container__featur-subtitle">Resize on-the-fly</span>
            <p className="container__featur-text">
              You don’t need to install Photoshop on all your company computers just
              <br />
              to download a resized image copy.
            </p>
            <p className="container__featur-desc">
              With only 2 clicks in Daminion, you can download a JPG resized to your custom preset
              <br />
              instead of a huge PSD file; optimize file size for Retina displays; remove metadata;
              <br />
              apply watermark; add your copyright; and more.
            </p>
          </div>
        </div>

        <div className="container__featur-block">
          <div className="container__featur-img">
            <img src={Previewallmediaformats} alt="#" />
          </div>
          <div>
            <span className="container__featur-subtitle">Preview all media formats</span>
            <p className="container__featur-text">
              Daminion lets you instantly preview 100+ media formats including all
              <br />
              photos, videos, vector images, office documents, PDFs, audio, CAD
              <br />
              formats, etc.
            </p>
            <p className="container__featur-desc">
              You are no longer forced to open each file with a generic icon (using Adobe
              Illustrator,
              <br />
              InDesign or alike) just to see what’s in it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featur;
