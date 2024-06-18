import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Col, Container, Row } from 'react-bootstrap';

function TermsAndConditions(props) {
  const { termsData } = props;
  //console.log(termsData.termCondition);
  return (
    <section className="news-letter">
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="blue-color fw-600 text-center mb-lg-5 my-3 fs-35">{termsData.termCondition.title}</h1>
            <div className="lh-24 fs-14 windmills-inner">{ReactHtmlParser(termsData.termCondition.description)}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TermsAndConditions;
