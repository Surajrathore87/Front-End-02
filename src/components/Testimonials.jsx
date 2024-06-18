import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Col, Container, Row } from 'react-bootstrap';

export default function Testimonials(props) {
  const { testimonialsData } = props;
  //console.log(testimonialsData);
  return (
    <>
      <section className="testimonials-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <h2 className="blue-color fw-600 fs-35 mb-15 mb-lg-5 mb-4">
                  Don&apos;t take our words for it. Trust our customers
                </h2>
              </div>
              <div className="card-columns">
                {testimonialsData.getTestimonials &&
                  testimonialsData.getTestimonials.map((item, key) => {
                    return (
                      <div className="d-inline-block" key={key}>
                        <div className="elementor-testimonial">
                          <div className="elementor-testimonial_header">
                            <div className="elementor-testimonial__image">
                              <img
                                height={90}
                                className="rounded-circle"
                                src={testimonialsData.testimonial_image_path + item.image}
                                alt={item.name}
                              />
                            </div>
                            <p className="elementor-testimonial__cite">
                              <span className="elementor-testimonial__name">{item.name}</span>
                              <span className="elementor-testimonial__title">{item.position}</span>
                            </p>
                          </div>
                          <div className="elementor-testimonial__content">
                            <div className="elementor-testimonial__text fs-14 lh-24">
                              {ReactHtmlParser(item.message)}
                            </div>
                            <span className="text-white fw-500 fs-15">{item.date}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
