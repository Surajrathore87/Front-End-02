import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ProjectBrochure() {
  return (
    <>
      <div
        className="high-fields-box position-relative overflow-hidden
        text-center text-lg-start d-lg-flex justify-content-between align-items-center"
      >
        <div className="d-md-flex">
          <div className="d-lg-flex align-items-center h-100 text-center text-lg-start ">
            <img
              src="/images/logo/logo-transparent.svg"
              width={156}
              height={94}
              alt="Logo"
              className="img-fluid me-lg-3"
            />
            <img
              src="/images/icons/vertical-line.svg"
              width={3}
              height={121}
              alt="Line"
              className="img-fluid d-none d-lg-inline"
            />
          </div>
          <div className="high-field-content">
            <h1 className="fs-30 fw-600 m-0">Ashapurna High Fields</h1>
            <p className="text-color fw-400 fs-16">
              ISB Rd, Financial District, Nanakram Guda, Hyderabad , 500032.
              <a href="#" className="text-decoration-none ms-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" /> Get Directions
              </a>
            </p>
            <span className="d-block text-white fs-16 fw-400 w-max-content">1* Crore onwards</span>
          </div>
        </div>
        <div className="d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
          <a
            href="#"
            className="me-lg-4 mx-2 mx-lg-0 text-decoration-none golden-color d-flex align-items-center justify-content-center fs-16 fw-500 brochure-btn"
          >
            <img
              src="/images/icons/download-icon-gold.svg"
              width={20}
              height={14}
              alt="Download"
              className="img-fluid me-2 arrow-gold"
            />
            <img
              src="/images/icons/download-icon-white.svg"
              width={20}
              height={14}
              alt="Download"
              className="img-fluid me-2 d-none arrow-white"
            />
            Brochure
          </a>
          <a
            href="tel:9887766554"
            className="mx-2 mx-lg-0 text-decoration-none text-white d-flex align-items-center justify-content-center fs-16 fw-500 call-btn"
          >
            <FontAwesomeIcon icon={faPhoneAlt} className="me-1" />
            9887766554
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectBrochure;
