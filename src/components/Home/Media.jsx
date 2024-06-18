import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Media(props) {
  const { eventPath, eventData } = props;
  const projectsSettings = {
    dots: true,
    className: 'slider pt-15',
    infinite: true,
    speed: 700,
    focusOnSelect: true,
    centerPadding: '50px',
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="bg-white projectsMain">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="instagramHeading d-flex flex-wrap justify-content-between align-items-center mb-30">
                <h2 className="text-capitalize fw-600 blue-color fs-35">Media and Event</h2>
                <div className="d-none d-md-block">
                  <Link href={'/media-and-events'}>
                    <a className="button-light-blue">See All</a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Slider {...projectsSettings}>
                {eventData &&
                  eventData.map((item, key) => {
                    return (
                      <div key={key} className="projects-wrapper pb-2 bg-white">
                        <div className="text-center px-2 position-relative">
                          <div
                            style={{ background: `url(${eventPath + item.image})` }}
                            className="img-media w-100 mt-2"
                          ></div>
                          <div className="projectHeading ps-2 ps-lg-3">
                            <h3 className="text-start my-3">
                              <Link href={'/media-and-events/' + item.slug}>
                                <a className="light-blue-color fw-600 cursor-pointer fs-17 line-clamp-1">
                                  {item.title}
                                </a>
                              </Link>
                            </h3>
                            <ul className="list-unstyled m-0 text-start">
                              <li className="fs-14 text-color mb-2 line-clamp-1">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fs-15 golden-color me-2" width={15} />
                                <span>{item.location}</span>
                              </li>
                              <li className="fs-14 text-color mb-2">
                                <FontAwesomeIcon icon={faClock} className="fs-15 golden-color me-2" width={15} />
                                <span>{item.date}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </Slider>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="mobile-allbtn mt-5 mt-md-0 d-md-none">
                <Link href={'/media-and-events'}>
                  <a className="button-light-blue">View All</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
