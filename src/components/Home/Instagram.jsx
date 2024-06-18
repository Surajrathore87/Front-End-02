import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'react-ig-feed/dist/index.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import InstagramFeed from 'react-ig-feed';

export default function Instagram() {
  return (
    <>
      <section className="bg-light-golden-color instagramMain">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="instagramHeading d-flex flex-wrap justify-content-between align-items-center mb-50">
                <h2 className="text-capitalize fw-600 blue-color fs-35">Instagram Feed</h2>
                <div className="d-none d-md-block">
                  <Link href={'https://www.instagram.com/ashapurnabuildconltd/'}>
                    <a className="button-light-blue" target="_blank">
                      See All
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="mobile-allbtn mt-4 mt-md-0 d-md-none">
                <Link href={''}>
                  <a className="button-light-blue">View All</a>
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="instagramFeed">
              <InstagramFeed
                token="IGQVJWbmZA1UTY4ckprVFNxQWl0RzV1cE5adjFCZAVMycFBlN0JDVkJRTnpGSllPaWlwdHl1TVRZAV19JMkxEUjEyb1ZAaaXp1QVhvZAjRQak90TXVYVlhSeThpVU5SMEQ2a05BMnpXMGs5ZA3FQYl9uR1N1XwZDZD"
                className="row"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
