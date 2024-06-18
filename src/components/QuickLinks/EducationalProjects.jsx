import { faHouseDamage, faMapMarker, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function EducationalProjects() {
  return (
    <section className="news-letter pt-80 pb-60">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="team-wrapper mb-60">
                <h1 className="blue-color fw-600 text-center ">Educational Projects</h1>
                <div className="teamContent text-color lh-40"></div>
              </div>
              <Row className=''>
                <Col lg={12} className="p-3 mb-3">
                  <div className="news-letter-card shadow p-4 rounded">
                      <div className=" d-flex">
                      <div className="card-inner">
                        <img src="/images/instagram/instagram1.jpg" alt="" className='' width={500} height={300}/>
                      </div>
                      <div className="ps-5 teamContent text-color lh-40">
                        <div className="">
                          <h2 className='fs-28 mb-0'>Overview of Buddha Institutions</h2>
                          <p className='fs-17 '>
                            (An Integrated Campus Approved by AICTAE, New Delhi & affiliated to RTU , Kota )
                          </p>
                          <p className='fs-17 m-0'>Seth Ji Ki Kundal , N.H. - 8 , Near IIM , Balicha , Udaipur ( Raj.)</p>
                          <p className='fs-17 m-0'><b>Phone :</b> 0294 - 6450002 , 6450307 , 6450308 , Mobile : 9001893747</p>
                          <p className='fs-17 m-0'><b>Email :</b> Buddha@ashapurna.com / Website : buddhagroup.org</p>
                          <div className='d-flex align-items-center  pb-3'>
                            <div className="">
                            <p className='fs-17 m-0 me-5'>
                            <b><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" width={15} height={15}/></b>
                              Near Indo American School, NH - 8, Udaipur, Rajasthan
                            </p>
                            </div>
                            <div className="">
                              <p className='fs-17 m-0'>
                                <Link href="/"><><b><FontAwesomeIcon icon={faHouseDamage} className="me-2" width={15} height={15}/></b>
                                  Ready</>
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div className="">
                              <button className='visit-btn'>Visit</button>
                            </div>
                        </div>
                      </div>
                    </div>
                      {/* <div className="table-responsive mt-4 data-table">
                          <table className=''>
                            <thead>
                              <tr>
                                <td>S. No.</td>
                                <td>Course</td>
                                <td>Eligibility</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B. Arch (Architecture)</td>
                                <td>12th Pass with 50% &amp; NATA Examination Clear</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>B. Tech.</td>
                                <td>12th pass in PCM with 45 %</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Master in Computer Application (MCA)</td>
                                <td>BCA &amp; BSC (Computer Science ) with 50%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div> */}
                    </div>
                </Col>
                <Col lg={12} className="p-3 mb-3">
                  <div className="news-letter-card shadow p-4 rounded">
                      <div className=" d-flex">
                      <div className="card-inner">
                        <img src="/images/instagram/instagram1.jpg" alt="" className='' width={500} height={300}/>
                      </div>
                      <div className="ps-5 teamContent text-color lh-40">
                        <div className="">
                          <h2 className='fs-28 mb-0'>Overview of Buddha Institutions</h2>
                          <p className='fs-17 '>
                            (An Integrated Campus Approved by AICTAE, New Delhi & affiliated to RTU , Kota )
                          </p>
                          <p className='fs-17 m-0'>Seth Ji Ki Kundal , N.H. - 8 , Near IIM , Balicha , Udaipur ( Raj.)</p>
                          <p className='fs-17 m-0'><b>Phone :</b> 0294 - 6450002 , 6450307 , 6450308 , Mobile : 9001893747</p>
                          <p className='fs-17 m-0'><b>Email :</b> Buddha@ashapurna.com / Website : buddhagroup.org</p>
                          <div className='d-flex align-items-center  pb-3'>
                            <div className="">
                            <p className='fs-17 m-0 me-5'>
                            <b><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" width={15} height={15}/></b>
                              Near Indo American School, NH - 8, Udaipur, Rajasthan
                            </p>
                            </div>
                            <div className="">
                              <p className='fs-17 m-0'>
                                <Link href="/"><><b><FontAwesomeIcon icon={faHouseDamage} className="me-2" width={15} height={15}/></b>
                                  Ready</>
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div className="">
                              <button className='visit-btn'>Visit</button>
                            </div>
                        </div>
                      </div>
                    </div>
                      {/* <div className="table-responsive mt-4 data-table">
                          <table className=''>
                            <thead>
                              <tr>
                                <td>S. No.</td>
                                <td>Course</td>
                                <td>Eligibility</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B. Arch (Architecture)</td>
                                <td>12th Pass with 50% &amp; NATA Examination Clear</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>B. Tech.</td>
                                <td>12th pass in PCM with 45 %</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Master in Computer Application (MCA)</td>
                                <td>BCA &amp; BSC (Computer Science ) with 50%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div> */}
                    </div>
                </Col>
                <Col lg={12} className="p-3 mb-3">
                  <div className="news-letter-card shadow p-4 rounded">
                      <div className=" d-flex">
                      <div className="card-inner">
                        <img src="/images/instagram/instagram1.jpg" alt="" className='' width={500} height={300}/>
                      </div>
                      <div className="ps-5 teamContent text-color lh-40">
                        <div className="">
                          <h2 className='fs-28 mb-0'>Overview of Buddha Institutions</h2>
                          <p className='fs-17 '>
                            (An Integrated Campus Approved by AICTAE, New Delhi & affiliated to RTU , Kota )
                          </p>
                          <p className='fs-17 m-0'>Seth Ji Ki Kundal , N.H. - 8 , Near IIM , Balicha , Udaipur ( Raj.)</p>
                          <p className='fs-17 m-0'><b>Phone :</b> 0294 - 6450002 , 6450307 , 6450308 , Mobile : 9001893747</p>
                          <p className='fs-17 m-0'><b>Email :</b> Buddha@ashapurna.com / Website : buddhagroup.org</p>
                          <div className='d-flex align-items-center  pb-3'>
                            <div className="">
                            <p className='fs-17 m-0 me-5'>
                            <b><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" width={15} height={15}/></b>
                              Near Indo American School, NH - 8, Udaipur, Rajasthan
                            </p>
                            </div>
                            <div className="">
                              <p className='fs-17 m-0'>
                                <Link href="/"><><b><FontAwesomeIcon icon={faHouseDamage} className="me-2" width={15} height={15}/></b>
                                  Ready</>
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div className="">
                              <button className='visit-btn'>Visit</button>
                            </div>
                        </div>
                      </div>
                    </div>
                      {/* <div className="table-responsive mt-4 data-table">
                          <table className=''>
                            <thead>
                              <tr>
                                <td>S. No.</td>
                                <td>Course</td>
                                <td>Eligibility</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B. Arch (Architecture)</td>
                                <td>12th Pass with 50% &amp; NATA Examination Clear</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>B. Tech.</td>
                                <td>12th pass in PCM with 45 %</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Master in Computer Application (MCA)</td>
                                <td>BCA &amp; BSC (Computer Science ) with 50%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div> */}
                    </div>
                </Col>
                <Col lg={12} className="p-3 mb-3">
                  <div className="news-letter-card shadow p-4 rounded">
                      <div className=" d-flex">
                      <div className="card-inner">
                        <img src="/images/instagram/instagram1.jpg" alt="" className='' width={500} height={300}/>
                      </div>
                      <div className="ps-5 teamContent text-color lh-40">
                        <div className="">
                          <h2 className='fs-28 mb-0'>Overview of Buddha Institutions</h2>
                          <p className='fs-17 '>
                            (An Integrated Campus Approved by AICTAE, New Delhi & affiliated to RTU , Kota )
                          </p>
                          <p className='fs-17 m-0'>Seth Ji Ki Kundal , N.H. - 8 , Near IIM , Balicha , Udaipur ( Raj.)</p>
                          <p className='fs-17 m-0'><b>Phone :</b> 0294 - 6450002 , 6450307 , 6450308 , Mobile : 9001893747</p>
                          <p className='fs-17 m-0'><b>Email :</b> Buddha@ashapurna.com / Website : buddhagroup.org</p>
                          <div className='d-flex align-items-center  pb-3'>
                            <div className="">
                            <p className='fs-17 m-0 me-5'>
                            <b><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" width={15} height={15}/></b>
                              Near Indo American School, NH - 8, Udaipur, Rajasthan
                            </p>
                            </div>
                            <div className="">
                              <p className='fs-17 m-0'>
                                <Link href="/"><><b><FontAwesomeIcon icon={faHouseDamage} className="me-2" width={15} height={15}/></b>
                                  Ready</>
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div className="">
                              <button className='visit-btn'>Visit</button>
                            </div>
                        </div>
                      </div>
                    </div>
                      {/* <div className="table-responsive mt-4 data-table">
                          <table className=''>
                            <thead>
                              <tr>
                                <td>S. No.</td>
                                <td>Course</td>
                                <td>Eligibility</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>B. Arch (Architecture)</td>
                                <td>12th Pass with 50% &amp; NATA Examination Clear</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>B. Tech.</td>
                                <td>12th pass in PCM with 45 %</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Master in Computer Application (MCA)</td>
                                <td>BCA &amp; BSC (Computer Science ) with 50%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div> */}
                    </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
  )
}

export default EducationalProjects