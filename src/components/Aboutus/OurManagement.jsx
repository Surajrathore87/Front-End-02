import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const ManegementModal = dynamic(import('components/Modals/ManegementModal'));

export default function OurManagement(props) {
  const { managementData } = props;
  //console.log(managementData);
  const [showModal, setShowModal] = useState(false);
  const [readMoreData, setReadMoreData] = useState(null);

  function readMore(data) {
    setShowModal(true);
    setReadMoreData(data);
  }
  return (
    <>
      {showModal && <ManegementModal setShowModal={setShowModal} readMoreData={readMoreData} />}
      <section className="ourManagement-main">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="management-top mb-60">
                <h1 className="blue-color fs-35 fw-600 text-center mb-15">
                  {managementData.getManagementSpeakPageContent.title}
                </h1>
                <div className="text-color text-lg-center lh-24 fs-14">
                  {ReactHtmlParser(managementData.getManagementSpeakPageContent.description)}
                </div>
              </div>
            </Col>
          </Row>

          {managementData.getManagementSpeaks &&
            managementData.getManagementSpeaks.reverse().map((item, key) => {
              return (
                <Row className={`${(item.id % 2 == 0 && 'flex-row-reverse') || ''} founderRow mb-4 mb-lg-5`} key={key}>
                  <Col lg={7}>
                    <div className="testimonial-block bg-light-golden-color rounded-2 position-relative pt-4 pb-5 px-2 px-lg-5 mb-4">
                      <span className="text-uppercase light-blue-color subtitle position-relative pe-3">
                        {item.position}
                      </span>
                      <h2 className="blue-color text-capitalize fw-700 mb-15 fs-26">{item.name}</h2>
                      <div className="text-color fw-400 lh-24 fs-14 line-clamp-7 mb-2">
                        {ReactHtmlParser(item.description)}
                      </div>
                      <button
                        className="button-blue w-auto fs-16 px-3 py-1 h-auto me-auto ms-0"
                        onClick={() => readMore(item)}
                      >
                        Read more
                      </button>
                      <div className="position-absolute end-0 bottom-0 me-3 mb-2">
                        <img src={'/images/icons/quotes.png'} height={57} width={63} alt={'Quotes'} />
                      </div>
                    </div>
                  </Col>
                  <Col lg={5}>
                    <div className="d-flex align-items-center h-100 justify-content-center management-image mx-auto">
                      <img
                        src={managementData.management_speak_image_path + item.image}
                        className="img-fluid"
                        alt="Client"
                      />
                    </div>
                  </Col>
                </Row>
              );
            })}
        </Container>
      </section>
    </>
  );
}
