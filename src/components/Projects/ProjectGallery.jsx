import { faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProjectGallery() {
  const gallerySettings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="project-villa-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="fs-40 fw-600 blue-color text-center mb-4">Gallery</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 project-slider p-0">
              <Slider {...gallerySettings}>
                {Array(4)
                  .fill()
                  .map((_, key) => (
                    <div key={key} className="px-3">
                      <div
                        className="project-box position-relative overflow-hidden d-flex align-items-center mb-3"
                        style={{ background: 'url(/images/sections/project-img.jpg)' }}
                      >
                        <div className="project-content position-absolute w-100 h-100 d-flex flex-column">
                          <div className="mt-auto p-3">
                            <h3 className="fs-22 fw-600 golden-color m-0 py-2">Ashapurna Pachpadra</h3>
                            <ul className="list-unstyled mb-0 mt-2">
                              <li className="fs-16 fw-500 mb-2 text-white line-clamp-1">
                                <span>
                                  <FontAwesomeIcon icon={faMapMarkerAlt} className="golden-color me-1" />
                                </span>
                                Near HRRL Refinery, Rajasthan
                              </li>
                              <li className="fs-16 fw-500 text-white line-clamp-1">
                                <span>
                                  <FontAwesomeIcon icon={faHome} className="golden-color me-1" />
                                </span>
                                Under Construction
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="project-overlay position-absolute d-flex align-items-center justify-content-center">
                          <div className="text-center">
                            <Image
                              src={'/images/logo/pachpadra-logo.png'}
                              width={192}
                              height={84}
                              className="img-fluid mb-3"
                              alt="Logo"
                            />
                            <h4 className="light-blue-color fs-24 fw-600 mb-4">Ashapurna Pachpadra</h4>
                            <Link href={'/residential/ashapurna-pachpadra'}>
                              <a className="cursor-pointer button-golden px-0 fw-500 d-flex align-items-center justify-content-center">
                                Read More
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 py-lg-3">
              <h2 className="fs-40 fw-600 blue-color text-center mb-4">360 View</h2>
              <div className="text-center pt-lg-4">
                <img src="/images/sections/360view.jpg" alt="360Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectGallery;
