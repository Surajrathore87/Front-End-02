import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Col, Container, Row } from 'react-bootstrap';

function NewsLetter(props) {
  const { newsData } = props;
  //console.log(newsData);
  return (
    <>
      <section className="news-letter camps-section py-lg-5 bg-white">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="team-wrapper">
                <h1 className="blue-color fw-600 heading-color fs-35 text-center mb-lg-4 my-2">
                  Ashapurna Newsletters
                </h1>
              </div>
              <Row className="pt-4">
                {newsData.getNewsletters &&
                  newsData.getNewsletters.map((item, key) => {
                    return (
                      <Col lg={6} md={12} className="mb-lg-4 mb-3" key={key}>
                        <div className="media-card bg-white d-lg-flex overflow-hidden">
                          <a
                            className="media-box-img d-block"
                            style={{ background: `url(${newsData.newsletter_image_path + item.image})` }}
                          ></a>
                          <div className="p-lg-4 p-3 d-flex flex-column">
                            <h3 className="blue-color fw-500 fs-19 lh-30">{item.title}</h3>
                            <div className="text-color lh-24 fs-14 mb-3 line-clamp-6">
                              {ReactHtmlParser(item.description)}
                            </div>
                            <Link href={newsData.newsletter_image_path + item.pdf_file}>
                              <a target="_blank" rel="noreferrer" className="golden-color read-more fs-16 fw-600">
                                Read More
                                <span className="ms-2">
                                  <FontAwesomeIcon icon={faArrowRight} width="14" height={14} />
                                </span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default NewsLetter;
