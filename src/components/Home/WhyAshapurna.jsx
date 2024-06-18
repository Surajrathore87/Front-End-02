import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function WhyAshapurna(props) {
  const { whyusProperty, whyusImagePath, whyusData } = props;
  return (
    <>
      <section className="whyAshapurna-main">
        <Container>
          <Row>
            <Col lg={4} className="d-flex align-items-center">
              <div className="whyAshapurna-left">
                <span className="text-uppercase golden-color subtitle position-relative pe-3">
                  {whyusData.why_us_title}
                </span>
                <h1 className="blue-color fw-600 fs-35 mb-2 text-capitalize">{whyusData.why_us_tagline} </h1>
                <div className="fw-400 text-color lh-24 fs-14">{ReactHtmlParser(whyusData.why_us_description)}</div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="whyAshapurna-right ps-xl-5 position-relative">
                <div className="whyAshapurnaBlocks-wrapper">
                  <Row>
                    {whyusProperty &&
                      whyusProperty.map((item, key) => {
                        return (
                          <Col lg={6} md={6} key={key}>
                            <div className="whyashapurna-blocks my-3 me-lg-3">
                              <span>
                                <img src={whyusImagePath + item.image} width={60} alt={item.title} />
                              </span>
                              <div className="empty-block position-absolute"></div>
                              <h3 className="fw-600 mt-3 fs-24 mb-15">{item.title}</h3>
                              <div className="title-underline"></div>
                              <p className="text-color lh-24 fs-14 mt-3 mb-0">{item.description}</p>
                            </div>
                          </Col>
                        );
                      })}
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
