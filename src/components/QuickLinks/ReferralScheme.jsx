import { faDotCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { maxLengthCheck, validEmail, validName } from '_helper/regex';
import { toastConfig } from '_helper/toastConfig';
import { callAPI } from '_services/CallAPI';
import ReactHtmlParser from 'react-html-parser';

function ReferralScheme(props) {
  const { referralData } = props;
  const [locationData, setLocationData] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [unitNumber, setUnitNumber] = useState('');
  const [projectName, setProjectName] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    fullName: '',
    email: '',
    mobileNo: '',
    message: '',
    unitNumber: '',
    projectName: '',
    location: '',
  });
  // Get Locations
  useEffect(() => {
    getLocations();
  }, []);

  function getLocations() {
    callAPI('POST', process.env.REFERRAL_LOCATIONS, {}, (res) => {
      if (res.status) {
        setLocationData(res.data.getLocations);
      }
    });
  }

  function renderLocations() {
    return locationData.map((item, key) => {
      return (
        <option key={key} value={item.id}>
          {item.name}
        </option>
      );
    });
  }

  function formValidation() {
    let fullNameMsg = '';
    let emailMsg = '';
    let mobileNoMsg = '';
    let unitNumberMsg = '';
    let projectNameMsg = '';
    let locationMsg = '';
    let isValid = false;

    if (!fullName) {
      fullNameMsg = 'Please enter full name';
    }
    if (fullName && !validName(fullName)) {
      fullNameMsg = 'Please enter valid name';
    }
    if (!email) {
      emailMsg = 'Please enter email address';
    }

    if (email && !validEmail(email)) {
      emailMsg = 'Please enter valid email';
    }

    if (mobileNo) {
      if (String(mobileNo).length !== 10) {
        mobileNoMsg = 'Mobile number must be 10 digits only';
      }
    }

    if (!mobileNo) {
      mobileNoMsg = 'Please enter mobile number';
    }

    if (!unitNumber) {
      unitNumberMsg = 'Please enter unit number';
    }

    if (!projectName) {
      projectNameMsg = 'Please enter project name';
    }
    if (projectName && !validName(projectName)) {
      projectNameMsg = 'Please enter valid project name';
    }
    if (!location) {
      locationMsg = 'Please select location';
    }

    if (!fullNameMsg && !emailMsg && !mobileNoMsg && !unitNumberMsg && !projectNameMsg && !locationMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        fullName: '',
        email: '',
        mobileNo: '',
        unitNumber: '',
        projectName: '',
        location: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        fullName: fullNameMsg,
        email: emailMsg,
        mobileNo: mobileNoMsg,
        unitNumber: unitNumberMsg,
        projectName: projectNameMsg,
        location: locationMsg,
      });
      return false;
    }
  }

  function submitForm() {
    if (formValidation()) {
      const params = {
        name: fullName,
        email: email,
        mobile_number: mobileNo,
        unit_number: Number(unitNumber),
        project_name: projectName,
        location_id: Number(location),
      };
      setIsSubmitted(true);
      callAPI('POST', process.env.REFERRAL_FORM, params, (res) => {
        if (res.status) {
          toast.success(res['message'], toastConfig);
          setFullName('');
          setEmail('');
          setMobileNo('');
          setUnitNumber('');
          setProjectName('');
          setLocation('');
          setIsSubmitted(false);
        } else {
          toast.error(res['message'], toastConfig);
          setIsSubmitted(false);
        }
      });
    }
  }

  return (
    <>
      <section className="news-letter">
        <Container className="pb-md-5">
          <h1 className="blue-color fs-35 fw-600 text-center mb-lg-5 my-3">Referral Scheme</h1>
          <Row className="referral-scheme-section">
            {referralData.getReferralSchemaStep &&
              referralData.getReferralSchemaStep.map((item, key) => {
                return (
                  <Col lg={6} className="mb-4 mx-auto" key={key}>
                    <div className="d-flex align-items-start pt-4 referral-scheme-box">
                      <div className="me-3">
                        <div className="count-box d-flex align-items-center justify-content-center">{item.id}</div>
                      </div>
                      <div>
                        <h3 className="fs-22 blue-color mb-0 text-capitalize">{item.title}</h3>
                        <div className="m-0 fs-14 lh-24">{ReactHtmlParser(item.description)}</div>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
        <section className="whyAshapurna-main py-lg-5 py-3 mb-0">
          <Container>
            <Row>
              <h2 className="blue-color fs-35 fw-600 text-center mb-lg-5 my-3">Process Flowchart</h2>
              {referralData.getReferralSchemaProcessFlow &&
                referralData.getReferralSchemaProcessFlow.map((item, key) => {
                  return (
                    <Col
                      lg={3}
                      md={6}
                      xs={6}
                      className={`${(item.id % 2 == 0 && 'mt-lg-5') || 'mb-lg-5'} pb-lg-0 pb-3`}
                      key={key}
                    >
                      <div
                        className={`${(item.id == 1 && 'flowchart-bg') || ''} process-flowchart-box w-100 text-center`}
                      >
                        <div className="flowchart-inner p-lg-5 p-4 rounded-circle border text-white bg-dark-golden-color-1 m-auto">
                          <FontAwesomeIcon icon={faUser} className="fs-40" width={50} height={50} />
                        </div>
                        <div className="px-lg-4 px-3 mt-2 mb-0 fs-16 lh-24 fw-500">
                          {ReactHtmlParser(item.description)}
                        </div>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          </Container>
        </section>
        <section className="contact-section pb-5">
          <Container>
            <Row>
              <Col lg="6" className="d-none">
                <div className="mb-5 mb-lg-0">
                  <span className="text-uppercase golden-color subtitle position-relative pe-3">Register</span>
                  <h2 className="blue-color fw-600 fs-35 mb-15">Register Now</h2>
                  <ul className="mt-4 list-unstyled contact-info pt-lg-3 w-75">
                    <li className="mb-lg-4 mb-3">
                      <div className="d-flex align-items-start">
                        <FontAwesomeIcon icon={faDotCircle} className="fs-20 mt-1 golden-color me-3" width={22} />
                        <div>
                          <h4>Registration</h4>
                          <p className="text-color mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-lg-4 mb-3">
                      <div className="d-flex align-items-start">
                        <FontAwesomeIcon icon={faDotCircle} className="fs-20 mt-1 golden-color me-3" width={22} />
                        <div>
                          <h4>Why Ashapurna....?</h4>
                          <p className="text-color mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="mb-lg-4 mb-3">
                      <div className="d-flex align-items-start">
                        <FontAwesomeIcon icon={faDotCircle} className="fs-20 mt-1 golden-color me-3" width={22} />
                        <div>
                          <h4>Company</h4>
                          <p className="text-color mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="6" className="mx-auto">
                <div className="contact-form p-4 position-relative overflow-hidden">
                  <h2 className="blue-color text-capitalize">Register for Program</h2>
                  <form className="careeruiryModal-form career-form mt-lg-4">
                    <div className="row">
                      <div className="mb-4 col-md-6">
                        <div className="outlined-input">
                          <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            value={fullName.trimStart().replace(/  +/g, ' ') || ''}
                            onChange={(event) => setFullName(event.target.value.trimStart().replace(/  +/g, ' '))}
                            className="w-100"
                            placeholder=" "
                          />
                          <label>Full Name</label>
                        </div>
                        {error && errorMessage.fullName && (
                          <small className="mt-3 text-danger">{errorMessage.fullName}</small>
                        )}
                      </div>

                      <div className="mb-4 col-md-6">
                        <div className="outlined-input">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-100"
                            placeholder=" "
                            value={email || ''}
                            onChange={(event) => setEmail(event.target.value)}
                          />
                          <label>Email</label>
                        </div>
                        {error && errorMessage.email && (
                          <small className="mt-3 text-danger">{errorMessage.email}</small>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="outlined-input">
                        <input
                          type="number"
                          className="w-100"
                          placeholder=" "
                          maxLength="10"
                          onInput={maxLengthCheck}
                          value={mobileNo || ''}
                          onChange={(event) => setMobileNo(event.target.value)}
                        />
                        <label>Mobile No.</label>
                      </div>
                      {error && errorMessage.mobileNo && (
                        <small className="mt-3 text-danger">{errorMessage.mobileNo}</small>
                      )}
                    </div>

                    <div className="row">
                      <div className="mb-4 col-md-6">
                        <div className="outlined-input">
                          <input
                            type="number"
                            name="unitNumber"
                            id="unitNumber"
                            className="w-100"
                            placeholder=" "
                            value={unitNumber || ''}
                            onChange={(event) => setUnitNumber(event.target.value)}
                          />
                          <label>Unit Number</label>
                        </div>
                        {error && errorMessage.unitNumber && (
                          <small className="mt-3 text-danger">{errorMessage.unitNumber}</small>
                        )}
                      </div>

                      <div className="mb-4 col-md-6">
                        <div className="outlined-input">
                          <input
                            type="text"
                            name="projectName"
                            id="projectName"
                            className="w-100"
                            placeholder=" "
                            value={projectName.trimStart().replace(/  +/g, ' ') || ''}
                            onChange={(event) => setProjectName(event.target.value.trimStart().replace(/  +/g, ' '))}
                          />
                          <label>Project Name</label>
                        </div>
                        {error && errorMessage.projectName && (
                          <small className="mt-3 text-danger">{errorMessage.projectName}</small>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="outlined-select">
                        <select
                          required
                          name="location"
                          id="location"
                          className="w-100"
                          value={location || ''}
                          onChange={(event) => setLocation(event.target.value)}
                        >
                          <option className="option-hidden"></option>
                          {locationData && renderLocations()}
                        </select>
                        <label className="fs-16">Location</label>
                      </div>
                      {error && errorMessage.location && (
                        <small className="mt-3 text-danger">{errorMessage.location}</small>
                      )}
                    </div>

                    <div className="mb-4 col-12">
                      <Button
                        type="button"
                        className="button-golden ms-auto"
                        onClick={submitForm}
                        disabled={isSubmitted}
                      >
                        {isSubmitted && <Spinner className="me-2" animation="border" variant="light" size="sm" />}
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </>
  );
}

export default ReferralScheme;
