import { faHouseDamage, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function HospitalityProjects() {
  return (<>
  <section className="news-letter">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="">
                <h1 className="blue-color fw-600 text-center mb-lg-5 my-3">Hospitality Projects</h1>
                <div className="teamContent text-color lh-40"></div>
              </div>
              <Row className=''>
                <Col lg={12} className="p-3">
                  <div className="news-letter-card shadow p-3 rounded">
                      <div className="d-lg-flex">
                        <div className="card-inner">
                          <img src="/images/instagram/instagram1.jpg" alt="" className='mb-3 mb-lg-0' width={280} height={280}/>
                        </div>
                        <div className="ps-lg-3 teamContent text-color lh-40">
                          <div className="">
                            <h2 className='fs-28'>Ashapurna Hotel</h2>
                            <p className='fs-17'>
                              The Ashapurna Hospitality Projects are finest chain of up-scale hotels and has been created by the promoter of Ashapurna Buildcon. These hotels deliver unbeatable value-for-money. All The Ashapurna Hotels are bright, hygienic, safe, clean and contemporary. They have been designed for the business and leisure traveler who is more discerning today and not willing to compromise on basic standards of hygiene, quality of accommodation and safety on very competitive price.
                            </p>
                            <div className='d-md-flex align-items-center pb-md-3'>
                              <div className="me-lg-5 me-3">
                                <p className='fs-17'>
                                  <b><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" width={15} height={15}/></b>
                                      Subhash Nagar, Jaipur
                                </p>
                              </div>
                              <div className="me-lg-5 me-3">
                                <p className='fs-17'>
                                  <Link href="/"><><b><FontAwesomeIcon icon={faHouseDamage} className="me-2" width={15} height={15}/></b>
                                    4 Star</>
                                  </Link>
                                </p>
                              </div>
                              <div className="me-lg-5 me-3">
                                <button className='visit-btn'>Visit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </Col>
                <Col lg={12} className="p-3">
                  <div className="news-letter-card shadow p-3 rounded">
                      <div className="d-lg-flex">
                        <div className="card-inner">
                          <img src="/images/instagram/instagram1.jpg" alt="" className='mb-3 mb-lg-0' width={280} height={280}/>
                        </div>
                        <div className="ps-lg-3 teamContent text-color lh-40">
                          <div className="">
                            <h2 className='fs-28'>Hotel Residency Palace</h2>
                            <p className='fs-17'>
                             Hotel Residency Palace invites you to its world of luxury, traditional hospitality and personalized service with its tastefully designed rooms with modern amenities.Our hotel promises the tourist & business traveler alike a highly satisfying, enjoyable and memorable stay. It’s a budget Hotel for budget travelers and corporate travelers. It’s more suitable as family Hotels or Home Stay with prime location add an extra mark for this Hotel in Blue City Jodhpur. A distinctive feature of the hotel is the highly motivated and well-trained staff that provides the attentive and sensitive service.
                            </p>
                            <div className='d-md-flex align-items-center pb-md-3'>
                              <div className="me-lg-5 me-3">
                                <p className='fs-17'>
                                  <b><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" width={15} height={15}/></b>
                                    Ratanada, Jodhpur
                                </p>
                              </div>
                              <div className="me-lg-5 me-3">
                                <p className='fs-17'>
                                  <Link href="/"><><b><FontAwesomeIcon icon={faHouseDamage} className="me-2" width={15} height={15}/></b>
                                    4 Star</>
                                  </Link>
                                </p>
                              </div>
                              <div className="me-lg-5 me-3">
                                <button className='visit-btn'>Visit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </Col>
                <Col lg={12} className="p-3">
                  <div className="news-letter-card shadow p-3 rounded">
                      <div className="d-lg-flex">
                        <div className="card-inner">
                          <img src="/images/instagram/instagram1.jpg" alt="" className='mb-3 mb-lg-0' width={280} height={280}/>
                        </div>
                        <div className="ps-lg-3 teamContent text-color lh-40">
                          <div className="">
                            <h2 className='fs-28'>Ashapurna Palace</h2>
                            <p className='fs-17'>
                              Ashapurna Palace invites you to its world of luxury, traditional hospitality and personalized service with its tastefully designed rooms with modern amenities.Our hotel promises the tourist & business traveler alike a highly satisfying, enjoyable and memorable stay. It’s a budget Hotel for budget travelers and corporate travelers. It’s more suitable as family Hotels or Home Stay with prime location add an extra mark for this Hotel in Blue City Jodhpur. A distinctive feature of the hotel is the highly motivated and well-trained staff that provides the attentive and sensitive service.   
                            </p>
                            <div className='d-md-flex align-items-center pb-md-3'>
                              <div className="me-lg-5 me-3">
                                <p className='fs-17'>
                                  <b><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" width={15} height={15}/></b>
                                  Ratanada, Jodhpur
                                </p>
                              </div>
                              <div className="me-lg-5 me-3">
                                <p className='fs-17'>
                                  <Link href="/"><><b><FontAwesomeIcon icon={faHouseDamage} className="me-2" width={15} height={15}/></b>
                                    4 Star</>
                                  </Link>
                                </p>
                              </div>
                              <div className="me-lg-5 me-3">
                                <button className='visit-btn'>Visit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </Col>         
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
  </>);
}

export default HospitalityProjects;
