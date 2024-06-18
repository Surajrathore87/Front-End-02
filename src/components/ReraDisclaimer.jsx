import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function ReraDisclaimer(props) {
  const { reraData } = props;
  return (
    <>
      <section className="corporateProfile-main">
        <Container>
          <Row>
            <Col lg={9} md={8}>
              <div className="pe-lg-4 pe-xl-5">
                <span className="text-uppercase golden-color subtitle position-relative pe-3">
                  {reraData.getDisclaimer.title}
                </span>
                <h1 className="blue-color fs-35 fw-600 mb-15">{reraData.getDisclaimer.tagline}</h1>
                <div className="text-color fs-14 lh-24">{ReactHtmlParser(reraData.getDisclaimer.description)}</div>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className="d-flex w-100 h-100 align-items-center justify-content-center">
                <img
                  className="shadow-sm border rounded p-2"
                  height={200}
                  src={reraData.rera_disclaimer_image_path + reraData.getDisclaimer.image}
                  alt={reraData.getDisclaimer.tagline}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
