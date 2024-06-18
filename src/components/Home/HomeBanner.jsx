import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import { maxLengthCheck, validEmail, validName } from '_helper/regex';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { toastConfig } from '_helper/toastConfig';
import { callAPI } from '_services/CallAPI';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeEnquiryModal = dynamic(import('components/Modals/HomeEnquiryModal'));

export default function HomeBanner(props) {
  const { sliderPath, bannerData } = props;
  const [enquiryModal, setEnquiryModal] = useState(false);
  const [propertyData, setPropertyData] = useState(null);
  const [homeEnqName, setHomeEnqName] = useState('');
  const [homeEnqPhone, setHomeEnqPhone] = useState(null);
  const [homeEnqEmail, setHomeEnqEmail] = useState('');
  const [homeEnqProperty, setHomeEnqProperty] = useState('');
  const [homeEnqMessage, setHomeEnqMessage] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    message: '',
  });

  // Properties Data
  useEffect(() => {
    investorProperties();
  }, []);

  function investorProperties() {
    callAPI('POST', process.env.ENQUIRY_SUBJECTS, {}, (res) => {
      if (res.status) {
        setPropertyData(res.data.getProperties);
      }
    });
  }

  function renderProperties() {
    return propertyData.map((item, key) => {
      return (
        <option key={key} value={item.id}>
          {item.name}
        </option>
      );
    });
  }

  // Validate Form
  function formValidation() {
    let nameMsg = '';
    let emailMsg = '';
    let phoneMsg = '';
    let propertyMsg = '';
    let messageMsg = '';
    let isValid = false;

    if (!homeEnqName) {
      nameMsg = 'Enter name';
    }
    if (homeEnqName && !validName(homeEnqName)) {
      nameMsg = 'Enter valid name';
    }

    if (homeEnqPhone) {
      if (String(homeEnqPhone).length !== 10) {
        phoneMsg = 'Mobile number must be 10 digits only';
      }
    }
    if (!homeEnqPhone) {
      phoneMsg = 'Enter phone number';
    }

    if (!homeEnqEmail) {
      emailMsg = 'Enter email address';
    }
    if (homeEnqEmail && !validEmail(homeEnqEmail)) {
      emailMsg = 'Enter valid email';
    }
    if (!homeEnqProperty) {
      propertyMsg = 'Select Property';
    }

    if (!homeEnqMessage) {
      messageMsg = 'Enter message';
    }

    if (!nameMsg && !phoneMsg && !emailMsg && !propertyMsg && !messageMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        name: '',
        phone: '',
        email: '',
        property: '',
        message: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        name: nameMsg,
        phone: phoneMsg,
        email: emailMsg,
        property: propertyMsg,
        message: messageMsg,
      });
      return false;
    }
  }

  // Form button submission
  function submitForm() {
    if (formValidation()) {
      const params = {
        name: homeEnqName,
        email: homeEnqEmail,
        phone: homeEnqPhone,
        message: homeEnqMessage,
        project_id: Number(homeEnqProperty),
      };
      setIsSubmitted(true);
      callAPI('POST', process.env.ENQUIRY_FORM, params, (res) => {
        if (res.status) {
          toast.success(res['message'], toastConfig);
          setHomeEnqName('');
          setHomeEnqPhone('');
          setHomeEnqEmail('');
          setHomeEnqProperty('');
          setHomeEnqMessage('');
          setIsSubmitted(false);
        } else {
          toast.error(res['message'], toastConfig);
          setIsSubmitted(false);
        }
      });
    }
  }

  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <>
      <section className="homeBanner-main">
        <Container className="p-0 px-lg-3">
          <Row className="home-banner-row">
            <Col lg={12} className="p-0 px-lg-3 position-relative">
              <Slider {...sliderSettings}>
                {bannerData &&
                  bannerData.map((item, key) => {
                    return (
                      <div className="position-relative h-100" key={key}>
                        <div
                          className="homeBanner-wrapper position-relative"
                          style={{ background: `url(${sliderPath + item.image})` }}
                        ></div>
                        <div className="homeContent d-flex justify-content-center h-100 align-items-center">
                          <div className="text-center d-flex align-items-center">
                            <h2 className="text-white text-center">
                              Experience The <br />
                              <span className="golden-color">Heritage Lifestyle</span>
                            </h2>
                            {/* <Button
                        size="sm"
                        onClick={() => setEnquiryModal(true)}
                        className="bg-golden-color enquiryBtnModal border-0 d-block d-lg-none mx-auto text-white"
                      >
                        Enquire Now
                      </Button> */}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </Slider>
              <div className="homeEnquiry d-none d-lg-block bg-white mx-auto">
                <div className="w-100 homeEnquiry-inner position-relative">
                  <div className="always-promise bg-golden-color text-white fw-600 position-absolute text-capitalize">
                    Always Living Up to our Promise
                  </div>
                  <form className="searchForm">
                    <Row className="justify-content-center align-items-end">
                      <Form.Group as={Col} className="mb-1 mb-lg-0">
                        {error && errorMessage.name && <small className="mt-3 text-danger">{errorMessage.name}</small>}
                        <Form.Control
                          size="lg"
                          type="text"
                          placeholder="Name"
                          name="searchname"
                          id="searchname"
                          className="rounded-1 fs-16"
                          value={homeEnqName.trimStart().replace(/  +/g, ' ') || ''}
                          onChange={(event) => setHomeEnqName(event.target.value.trimStart().replace(/  +/g, ' '))}
                        />
                      </Form.Group>
                      <Form.Group as={Col} className="mb-1 mb-lg-0">
                        {error && errorMessage.email && (
                          <small className="mt-3 text-danger">{errorMessage.email}</small>
                        )}
                        <Form.Control
                          size="lg"
                          type="email"
                          placeholder="Email"
                          name="searchemail"
                          id="searchemail"
                          value={homeEnqEmail || ''}
                          className="rounded-1 fs-16"
                          onChange={(event) => setHomeEnqEmail(event.target.value)}
                        />
                      </Form.Group>
                      <Form.Group as={Col} className="mb-1 mb-lg-0">
                        {error && errorMessage.phone && (
                          <small className="mt-3 text-danger">{errorMessage.phone}</small>
                        )}
                        <Form.Control
                          size="lg"
                          type="number"
                          placeholder="Phone"
                          name="searchphone"
                          id="searchphone"
                          maxLength="10"
                          onInput={maxLengthCheck}
                          value={homeEnqPhone || ''}
                          className="rounded-1 fs-16"
                          onChange={(event) => setHomeEnqPhone(event.target.value)}
                        />
                      </Form.Group>
                      <Form.Group as={Col} className="mb-1 mb-lg-0">
                        {error && errorMessage.property && (
                          <small className="mt-3 text-danger">{errorMessage.property}</small>
                        )}
                        <Form.Select
                          size="lg"
                          className="rounded-1 fs-16 text-black fs-16"
                          value={homeEnqProperty || ''}
                          onChange={(event) => setHomeEnqProperty(event.target.value)}
                        >
                          <option>Select Property</option>
                          {propertyData && renderProperties()}
                        </Form.Select>
                      </Form.Group>
                      <Form.Group as={Col} className="mb-1 mb-lg-0">
                        {error && errorMessage.message && (
                          <small className="mt-3 text-danger">{errorMessage.message}</small>
                        )}
                        <Form.Control
                          size="lg"
                          type="text"
                          placeholder="Explain Your Query"
                          name="searchquery"
                          id="searchquery"
                          className="rounded-1 fs-16"
                          value={homeEnqMessage.trimStart().replace(/  +/g, ' ') || ''}
                          onChange={(event) => setHomeEnqMessage(event.target.value.trimStart().replace(/  +/g, ' '))}
                        />
                      </Form.Group>
                      <Form.Group as={Col} className="mb-1 mb-lg-0 col-lg-12 col-xl-auto">
                        <Button
                          size="lg"
                          onClick={submitForm}
                          disabled={isSubmitted}
                          className="bg-golden-color fw-400 w-100 rounded-1 border-0 text-white fs-18"
                        >
                          {isSubmitted && <Spinner className="me-2" animation="border" variant="light" size="sm" />}
                          Submit
                        </Button>
                      </Form.Group>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {enquiryModal && <HomeEnquiryModal setEnquiryModal={setEnquiryModal} />}
    </>
  );
}
