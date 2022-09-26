import React from "react";
import "./style.css";
import Unify from "../../images/Unify.svg";
import Forgetseingdouble from "../../images/Forgetseingdouble.svg";
import Integrations from "../../images/Integrations.svg";
import Wordpress from "../../images/wordpress 1.svg";
import CC from "../../images/creative-cloud-cc 1.svg";
import Dropbox from "../../images/dropbox.svg";
import MO from "../../images/Microsoft_Office_logo_(2019–present) 1.svg";
import Oneclicksharing from "../../images/One-clicksharing.svg";
import Resizeonthefly from "../../images/Resizeon-the-fly.svg";
import Previewallmediaformats from "../../images/Previewallmediaformats.svg";

const Featur = () => {
  return (
    <div className="container">
      <div className="container__featur">
        <h2 className="title__section">Other helpful Daminion features</h2>
        <div className="container__featur__content featur__content__show">
          <div>
            <img className="container__featur__img" src={Unify} alt="" />
          </div>
          <div>
            <span className="container__featur__subtitle">Unify</span>
            <p className="container__featur__text">
              Daminion unifies all the media scattered accross all your
              computers,
              <br />
              storage, and different locations by centralizing it in one access
              point.
            </p>
            <p className="container__featur__desc">
              All your team members, local or remote, can now get all the
              <br />
              files they need in an instant.
            </p>
          </div>
        </div>

        <div className="container__featur__content featur__content__hide">
          <div className="container__featur__img">
            <img src={Forgetseingdouble} alt="" />
          </div>
          <div>
            <span className="container__featur__subtitle">
              Forget seing double
            </span>
            <p className="container__featur__text">
              Daminion prevents re-importing the same file, so no duplicates are
              <br />
              created in the first place, ever. It also finds and lets you
              eliminate
              <br />
              existing duplicates.
            </p>
            <p className="container__featur__desc">
              No more document versions collision or confusion among your
              colleagues.
            </p>
          </div>
        </div>

        <div className="container__featur__content featur__content__hide">
          <div className="container__featur__img">
            <img src={Integrations} alt="" />
          </div>
          <div>
            <span className="container__featur__subtitle">Integrations</span>
            <p className="container__featur__text">
              Daminion can be easily integrated with your local and cloud
              solutions, for
              <br />
              example corporate CMS, Adobe Creative Suite, Dropbox, MS Office,
              etc.
            </p>
            <div>
              <img
                className="container__featur__content__img"
                src={Wordpress}
                alt="#"
              />
              <img
                className="container__featur__content__img"
                src={CC}
                alt="#"
              />
              <img
                className="container__featur__content__img"
                src={Dropbox}
                alt="#"
              />
              <img
                className="container__featur__content__img"
                src={MO}
                alt="#"
              />
            </div>
          </div>
        </div>

        <div className="container__featur__content featur__content__hide">
          <div className="container__featur__img">
            <img src={Oneclicksharing} />
          </div>
          <div>
            <span className="container__featur__subtitle">
              One-click sharing
            </span>
            <p className="container__featur__text">
              Old-school sharing methods, for instance via email, have severe
              <br />
              file size limitations.
            </p>
            <p className="container__featur__desc">
              Share your digital assets by link with Daminion, without any size
              limit, instantly.
            </p>
          </div>
        </div>

        <div className="container__featur__content featur__content__hide">
          <div className="container__featur__img">
            <img src={Resizeonthefly} alt="#" />
          </div>
          <div>
            <span className="container__featur__subtitle">
              Resize on-the-fly
            </span>
            <p className="container__featur__text">
              You don’t need to install Photoshop on all your company computers
              just
              <br />
              to download a resized image copy.
            </p>
            <p className="container__featur__desc">
              With only 2 clicks in Daminion, you can download a JPG resized to
              your custom preset
              <br />
              instead of a huge PSD file; optimize file size for Retina
              displays; remove metadata;
              <br />
              apply watermark; add your copyright; and more.
            </p>
          </div>
        </div>

        <div className="container__featur__content featur__content__hide">
          <div className="container__featur__img">
            <img src={Previewallmediaformats} alt="#" />
          </div>
          <div>
            <span className="container__featur__subtitle">
              Preview all media formats
            </span>
            <p className="container__featur__text">
              Daminion lets you instantly preview 100+ media formats including
              all
              <br />
              photos, videos, vector images, office documents, PDFs, audio, CAD
              <br />
              formats, etc.
            </p>
            <p className="container__featur__desc">
              You are no longer forced to open each file with a generic icon
              (using Adobe Illustrator,
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
