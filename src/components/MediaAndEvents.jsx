import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ReactHtmlParser from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MediaAndEvents(props) {
  const { mediaData } = props;
  //console.log(mediaData);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplaySpeed: 2500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="media-section py-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-lg-5">
              <span className="golden-color subtitle position-relative pe-3">{mediaData.getMediaEvents.tagline}</span>
              <h1 className="blue-color fs-35 fw-600 mb-15"> {mediaData.getMediaEvents.title}</h1>
              <div className="text-color lh-24 fs-14">
                <p>{mediaData.getMediaEvents.description}</p>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="media-slider">
                <Slider {...sliderSettings}>
                  {mediaData.getMediaEventImages &&
                    mediaData.getMediaEventImages.map((item, key) => {
                      return (
                        <div className="media-slide ps-0 p-4 position-relative" key={key}>
                          <div className="position-absolute bg-media-image"></div>
                          <img
                            src={mediaData.media_event_image_path + item.image}
                            alt={item.title}
                            className="img-fluid position-relative"
                          />
                        </div>
                      );
                    })}
                </Slider>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="ps-lg-4">
                <h2 className="blue-color mb-3 fw-600 fs-30"> {mediaData.getMediaEvents.life_ashapurna_title}</h2>
                <div className="lh-24 fs-14 text-color">
                  {ReactHtmlParser(mediaData.getMediaEvents.life_ashapurna_description)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="camps-section py-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="blue-color-2 fw-600 fs-35">Utsav and Camps</h2>
            </div>
          </div>
          <div className="row mt-lg-5 mt-4">
            {mediaData.getUtsavCamps &&
              mediaData.getUtsavCamps.map((item, key) => {
                return (
                  <div className="col-md-6 mb-lg-4 mb-3" key={key}>
                    <div className="media-card bg-white d-lg-flex overflow-hidden">
                      <Link href={'/media-and-events/' + item.slug}>
                        <a
                          className="media-box-img cursor-pointer d-block"
                          style={{ background: `url(${mediaData.utsav_camps_image_path + item.image})` }}
                        ></a>
                      </Link>
                      <div className="p-lg-4 p-3 d-flex flex-column">
                        <h3 className="blue-color fw-500 fs-20 lh-30">
                          <Link href={'/media-and-events/' + item.slug}>
                            <a className="blue-color fw-500 fs-18 lh-30 line-clamp-2">{item.title}</a>
                          </Link>
                        </h3>
                        <ul className="list-unstyled mb-1">
                          <li className="text-color fs-14 mb-2 d-flex align-items-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="golden-color" />
                            <span className="ps-2">{item.location}</span>
                          </li>
                          <li className="text-color fs-14 mb-2 d-flex align-items-center">
                            <FontAwesomeIcon icon={faClock} className="golden-color" />
                            <span className="ps-2">{item.date}</span>
                          </li>
                        </ul>
                        <p className="text-color lh-24 fs-14 line-clamp-2">{item.short_description}</p>
                        <Link href={'/media-and-events/' + item.slug}>
                          <a className="button-golden media-btn ms-0 me-auto mt-auto h-auto w-auto px-3 py-2 fs-16">
                            Read More
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default MediaAndEvents;
