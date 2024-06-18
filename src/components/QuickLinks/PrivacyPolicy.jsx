import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Col, Container, Row } from 'react-bootstrap';

function PrivacyPolicy(props) {
  const { privacyData } = props;
  //console.log(privacyData.privacyPolicy);
  return (
    <>
      <section className="news-letter">
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="blue-color fs-35 fw-600 text-center mb-lg-4 my-3">{privacyData.privacyPolicy.title}</h1>
              <div className="lh-24 fs-14 windmills-inner">
                {ReactHtmlParser(privacyData.privacyPolicy.description)}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PrivacyPolicy;
