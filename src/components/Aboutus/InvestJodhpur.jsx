import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function InvestJodhpur(props) {
  const { whyInvestData } = props;
  return (
    <>
      <section className="investJodhpur-main">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="investjodhpur-heading mb-5">
                <h2 className="blue-color fs-35 fw-600 text-center text-uppercase">
                  {whyInvestData.getWhyInvestJodhpur.title}
                </h2>
              </div>
            </Col>
            <Col lg={4} md={12}>
              <div className="investjodhpur-left border text-center rounded-1 p-2 shadow">
                <img
                  className="img-fluid"
                  src={whyInvestData.why_invest_in_jodhpur_image_path + whyInvestData.getWhyInvestJodhpur.image}
                  alt={'Invest in Jodhpur'}
                />
              </div>
            </Col>
            <Col lg={8} md={12}>
              <div className="investjodhpur-right mt-4 mt-lg-0 px-lg-4 d-flex align-items-center h-100">
                <div>
                  <h3 className="light-blue-color fs-24 fw-600">{whyInvestData.getWhyInvestJodhpur.tagline}</h3>
                  <div className="text-color lh-24 fs-14">
                    {ReactHtmlParser(whyInvestData.getWhyInvestJodhpur.description)}
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="investjodhpur-bottom">
                <h3 className="blue-color lh-30 fs-24 fw-600">{whyInvestData.getWhyInvestJodhpur.top_reason_title}</h3>
                <div className="investjodhpur-btmContent pt-2 text-color lh-24 fs-14 pe-lg-3">
                  {ReactHtmlParser(whyInvestData.getWhyInvestJodhpur.top_reason_description)}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
