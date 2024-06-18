import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Slider from 'react-slick';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

export default function Testimonials(props) {
  const { getTestimonialData, imagePath, testimonialsData } = props;

  const testimonialSettings = {
    dots: true,
    infinite: true,
    focusOnSelect: true,
    speed: 700,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="bg-light-blue-color testimonials-main">
        <Container>
          <Row>
            <Col xl={4} lg={5} className="d-flex align-items-center">
              <div className="testimonial-left">
                <div>
                  <span className="text-uppercase golden-color subtitle position-relative pe-3">
                    {getTestimonialData.our_testimonial_title}
                  </span>
                  <h3 className="text-white fs-35 mt-2">{getTestimonialData.our_testimonial_tagline}</h3>
                  <div className="text-white lh-24 fs-14 pe-4 mt-4 mb-0 mb-md-4">
                    {ReactHtmlParser(getTestimonialData.our_testimonial_description)}
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={{ offset: 1, span: 7 }} lg={7}>
              <div className="testimonial-right position-relative">
                <Slider {...testimonialSettings}>
                  {/* Item Start */}
                  {testimonialsData &&
                    testimonialsData.map((item, key) => {
                      return (
                        <div className="testimonial-block position-relative bg-white pb-5 px-2 px-lg-5" key={key}>
                          <div className="d-flex mb-0 mb-md-4">
                            <div className="testimonial-image position-relative me-2 me-lg-4">
                              <Image src={imagePath + item.image} width={187} height={187} alt={item.name} />
                            </div>

                            <div className="testimonial-info pt-20">
                              <h5 className="golden-color text-capitalize fw-700 mb-1">{item.name}</h5>
                              <span className="fw-500 text-color d-block mb-1">{item.position}</span>
                            </div>
                          </div>
                          <div className="blue-color-2 fw-400 fs-15 lh-24">{ReactHtmlParser(item.message)}</div>
                          <div className="testimonial-quotes position-absolute end-0 bottom-0 me-3 mb-2">
                            <Image src={'images/icons/quotes.png'} height={57} width={63} alt={'Quotes'} />
                          </div>
                        </div>
                      );
                    })}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
