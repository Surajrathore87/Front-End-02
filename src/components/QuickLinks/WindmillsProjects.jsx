import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function WindmillsProjects() {
  return (<>
      <section className="news-letter">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="team-wrapper">
                <h1 className="blue-color fw-600 text-center mb-lg-5 my-2">Windmills Projects</h1>
                <Row className='align-items-end windmills-inner'>
                  <Col lg={6}>
                    <img src="/images/quick-links/windmillsIcon.png" alt="" className='img-fluid'/>
                  </Col>
                  <Col lg={6}>
                    <div className="teamContent text-color lh-40">
                      <p className='mb-0 mt-3 mt-md-0'>
                        Ashapurna buildcon limited is rapidly growing towards windmill projects because
                        we believe in environment-friendly development that’s why Windmill  Project in
                        India are best suited to fulfill our daily electricity needs. Although we all
                        know what is windmills and how it works to generate electricity through nature
                        wind power. Another reason, Why Ashapurna Buildcon Limited is actively
                        working to start our windmill projects because of the geographical location of
                        Rajasthan. Rajasthan is the state where the velocity of winds is high and
                        that’s why these high-velocity winds are useful   to move the propeller of
                        windmill so that it can generate electricity.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  </>);
}

export default WindmillsProjects