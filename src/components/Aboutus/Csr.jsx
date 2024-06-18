import CsrContentModal from 'components/Modals/CsrContentModal';
import { useState } from 'react';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Col, Container, Row } from 'react-bootstrap';

export default function Csr(props) {
  const { csrData } = props;
  const [showMore, setShowMore] = useState(false);
  const [readMoreData, setReadMoreData] = useState(null);

  function handleModalData(data) {
    setShowMore(true);
    setReadMoreData(data);
  }
  return (
    <>
      {showMore && (
        <CsrContentModal
          setShowMore={setShowMore}
          readMoreData={readMoreData}
          imageBasePAth={csrData.csr_social_resposibilities_image_path}
        />
      )}
      <section className="csr-main">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="csr-heading mb-60">
                <span className="text-uppercase golden-color subtitle position-relative pe-3">
                  {csrData.getCsrSocialEvents.title}
                </span>
                <h1 className="blue-color fs-35 fw-600 mb-4"> {csrData.getCsrSocialEvents.tagline}</h1>
                <div className="text-color lh-24 fs-14">{ReactHtmlParser(csrData.getCsrSocialEvents.description)}</div>
              </div>
            </Col>
          </Row>

          {csrData.getCsrSocialResponsibilities &&
            csrData.getCsrSocialResponsibilities.map((item, key) => {
              return (
                <Row
                  className={`${(item.id % 2 == 0 && 'flex-row-reverse') || ''} align-items-center mb-4 mb-lg-5`}
                  key={key}
                >
                  <Col lg={6} md={6}>
                    <div className="csr-imageContent pe-lg-4">
                      <span className="text-uppercase golden-color subtitle position-relative pe-3">{item.title}</span>
                      <h3 className="blue-color fs-26 fw-500 mb-15 fw-600">{item.tagline}</h3>
                      <div className="text-color fs-14 lh-30 pe-3">{ReactHtmlParser(item.description)}</div>
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="csr-image text-center p-2 shadow-sm position-relative">
                      <img
                        src={csrData.csr_social_resposibilities_image_path + item.image}
                        alt={item.tagline}
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                </Row>
              );
            })}

          <Row>
            <Col lg={12}>
              <div className="csr-blocks text-center mt-lg-4 mb-30">
                <h2 className="blue-color fs-35 fw-600">Social Updates</h2>
              </div>
            </Col>
            {csrData.getCsrSocialUpdates &&
              csrData.getCsrSocialUpdates.map((item, key) => {
                return (
                  <Col lg={4} md={6} key={key}>
                    <div className="shadow-sm bg-light-golden-color rounded csr-blockWrapper p-3">
                      <div className="block-csrImage text-center bg-white mb-25 shadow-sm">
                        <img
                          src={csrData.csr_social_updates_image_path + item.image}
                          alt={item.title}
                          className="rounded img-fluid"
                        />
                      </div>
                      <div className="block-csrContent">
                        <h4 className="light-blue-color text-capitalize fw-500 fs-20">{item.tagline}</h4>
                        <h6 className="golden-color fw-400 mb-10 fs-15">{item.title}</h6>
                        <div className="text-color line-clamp-2 lh-24 fs-14">{ReactHtmlParser(item.description)}</div>
                        <a
                          onClick={() => handleModalData(item)}
                          className="cursor-pointer py-2 me-auto ms-0 mt-3 fs-16 px-3 w-max-content csr-read-more-btn d-flex align-items-center btn button-golden"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </section>
    </>
  );
}
