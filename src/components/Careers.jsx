import { faClock, faMapMarkerAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CareerModal = dynamic(import('components/Modals/CareerModal'));

export default function Careers(props) {
  const { careersData } = props;
  //console.log(careersData);
  const [showCareer, setShowCareer] = useState(false);
  const [careerJobId, setCareerJobId] = useState(null);

  function showCareerModal(id) {
    setShowCareer(true);
    setCareerJobId(id);
  }

  function renderCareers() {
    return careersData.getCareers.map((item, key) => {
      return (
        <div className="career-card p-lg-4 p-3 my-4" key={key}>
          <div className="d-lg-flex justify-content-between align-items-start mb-lg-2 mb-3">
            <h3 className="fs-19 fw-500 blue-color mb-2">{item.title}</h3>
            <div className="label-color-1 fs-14 fw-500 ls-1 time-exp px-3 py-2 skills-list-item">{item.experience}</div>
          </div>
          <ul className="list-unstyled text-color d-flex align-items-center mb-4">
            <li className="me-3 me-lg-4">
              <FontAwesomeIcon icon={faClock} width={17} className="me-1 golden-color" /> {item.job_type}
            </li>
            <li className="me-3 me-lg-4">
              <FontAwesomeIcon icon={faUsers} width={22} className="me-1 golden-color" /> {item.number_of_vacancy}
            </li>
            <li className="me-3 me-lg-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} width={15} className="me-1 golden-color" /> {item.location}
            </li>
          </ul>
          <div className="d-flex justify-content-between align-items-end">
            <div>
              <h4 className="fs-17 fw-500 blue-color">Skills</h4>
              <ul className="list-unstyled m-0">
                {item.career_skills.map((skill, key) => (
                  <li key={key} className="text-color fs-14 fw-400 px-3 py-2 me-2 d-inline-block mb-2 skills-list-item">
                    {skill.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <button
                onClick={() => showCareerModal(item.id)}
                className="mb-2 fa-16 btn button-golden text-nowrap w-auto h-auto px-lg-4 px-3 career-apply fw-500"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      {showCareer && (
        <CareerModal
          setShowCareer={setShowCareer}
          positions={careersData.getPositions}
          qualifications={careersData.getQualifications}
          careerJobId={careerJobId}
        />
      )}
      <section className="careers-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="row">
                <div className="col-lg-6 text-center">
                  <img
                    className="img-fluid"
                    src={careersData.career_image_path + careersData.getCareerContent.career_image}
                    alt={careersData.getCareerContent.career_tagline}
                  />
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="aboutmain-right pt-4 pt-lg-0 ps-0 ps-lg-3">
                    <span className="text-uppercase golden-color subtitle career-bgtext position-relative pe-3">
                      {careersData.getCareerContent.career_title}
                    </span>
                    <h1 className="blue-color fw-600 fs-35 mb-10">{careersData.getCareerContent.career_tagline}</h1>
                    <div className="lh-24 text-color pt-3 fs-14">
                      {ReactHtmlParser(careersData.getCareerContent.career_description)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-lg-center my-lg-5 py-4">
                <h2 className="blue-color text-capitalize fs-30 mb-25 fw-600">
                  {careersData.getCareerContent.our_work_title}
                </h2>
                <div className="text-color lh-24 fs-14">
                  {ReactHtmlParser(careersData.getCareerContent.our_work_description)}
                </div>
              </div>
              <div className="my-lg-5">
                <h2 className="text-center blue-color text-capitalize mb-25 fs-30 fw-600">
                  {careersData.getCareerContent.we_are_hiring_title}
                </h2>
                {careersData && renderCareers()}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

Careers.propTypes = {
  careersData: PropTypes.object,
};
