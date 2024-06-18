import { Col, Container, Row, Spinner } from 'react-bootstrap';
import React, { useState } from 'react';
import { maxLengthCheck, validEmail, validName } from '_helper/regex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { toastConfig } from '_helper/toastConfig';
import { callAPI } from '_services/CallAPI';
import Link from 'next/link';
import { useAuth } from '_contexts/auth';

export default function ContactUs() {
  const { getCompanyInfo } = useAuth();
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // Validate Form
  function formValidation() {
    let nameMsg = '';
    let phoneMsg = '';
    let emailMsg = '';
    let msgMsg = '';
    let isValid = false;

    if (!contactName) {
      nameMsg = 'Please enter name';
    }
    if (contactName && !validName(contactName)) {
      nameMsg = 'Please enter valid name';
    }
    if (contactPhone) {
      if (String(contactPhone).length !== 10) {
        phoneMsg = 'Mobile number must be 10 digits only';
      }
    }
    if (!contactPhone) {
      phoneMsg = 'Please enter phone number';
    }

    if (!contactEmail) {
      emailMsg = 'Please enter email address';
    }
    if (contactEmail && !validEmail(contactEmail)) {
      emailMsg = 'Please enter valid email';
    }
    if (!contactMessage) {
      msgMsg = 'Please enter message';
    }

    if (!nameMsg && !phoneMsg && !emailMsg && !msgMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        name: '',
        phone: '',
        email: '',
        msgMsg: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        name: nameMsg,
        phone: phoneMsg,
        email: emailMsg,
        message: msgMsg,
      });
      return false;
    }
  }

  function submitForm() {
    if (formValidation()) {
      const params = {
        name: contactName,
        email: contactEmail,
        phone: contactPhone,
        message: contactMessage,
        enquiry_type: 1,
        subject: contactSubject,
      };
      setIsSubmitted(true);
      callAPI('POST', process.env.CONTACT_US_FORM, params, (res) => {
        if (res.status) {
          toast.success(res['message'], toastConfig);
          setContactName('');
          setContactPhone('');
          setContactEmail('');
          setContactSubject('');
          setContactMessage('');
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
      <section className="contact-section">
        <Container>
          <Row className="mb-40">
            <Col lg={12}>
              <div className="text-center mb-40">
                <h1 className="blue-color fw-600 mb-3 fs-35">Get In Touch</h1>
                <p className="text-color fs-14 text-center">
                  To request a quote, contact us directly or fill out the form and we will get back to you promptly.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mx-auto">
              <div className="contact-info d-flex align-items-center justify-content-start shadow bg-golden-color rounded p-4 mb-3 mb-lg-4">
                <span className="d-flex align-items-center flex-shrink-0 justify-content-center light-golden-color fs-30">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <div className="ms-4">
                  <h5 className="blue-color">Email</h5>
                  <p className="text-white fs-14 mb-0">
                    {getCompanyInfo && (
                      <Link href={'mailto:' + getCompanyInfo.company_email}>
                        <a className="text-white text-decoration-none" target={'_blank'}>
                          {getCompanyInfo.company_email}
                        </a>
                      </Link>
                    )}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mx-auto">
              <div className="contact-info d-flex align-items-center justify-content-start shadow bg-golden-color rounded p-4 mb-3 mb-lg-4">
                <span className="d-flex align-items-center flex-shrink-0 justify-content-center light-golden-color fs-30">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <div className="ms-4">
                  <h5 className="blue-color">Address</h5>
                  <p className="text-white fs-14 mb-0">
                    {getCompanyInfo && (
                      <Link href={getCompanyInfo.company_map}>
                        <a className="text-white text-decoration-none" target={'_blank'}>
                          {getCompanyInfo.company_address}
                        </a>
                      </Link>
                    )}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mx-auto">
              <div className="contact-info d-flex align-items-center justify-content-start shadow bg-golden-color rounded p-4 mb-3 mb-lg-4">
                <span className="d-flex align-items-center flex-shrink-0 justify-content-center light-golden-color fs-30">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                <div className="ms-4">
                  <h5 className="blue-color">Support</h5>
                  {getCompanyInfo && (
                    <p className="text-white fs-14 mb-0">
                      <Link href={'tel:' + getCompanyInfo.company_mobile}>
                        <a className="text-white text-decoration-none" target={'_blank'}>
                          {getCompanyInfo.company_mobile}
                        </a>
                      </Link>
                      {','}
                      <Link href={'tel:' + getCompanyInfo.company_mobile_2}>
                        <a className="text-white text-decoration-none ms-2" target={'_blank'}>
                          {getCompanyInfo.company_mobile_2}
                        </a>
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <div className="mb-5 mb-lg-0">
                <h2 className="blue-color fs-26 text-capitalize mb-20">Find us on Map</h2>
                <div className="p-lg-2">
                  <iframe
                    frameBorder="0"
                    scrolling="no"
                    width={'100%'}
                    height={'440px'}
                    src="https://maps.google.com/maps?q=Ashapurna%20Buildcon%20Ltd%20Circuit%20House%20Road%2C%20Opposite%20LIC%20Office%2C%20Jodhpur%2C%20Rajasthan%20342006&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                    title="Ashapurna Buildcon Ltd Circuit House Road, Opposite LIC Office, Jodhpur, Rajasthan 342006"
                    aria-label="Ashapurna Buildcon Ltd Circuit House Road, Opposite LIC Office, Jodhpur, Rajasthan 342006"
                  ></iframe>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="contact-form p-4 position-relative overflow-hidden">
                <span className="golden-color subtitle position-relative pe-3">Write to us!</span>
                <h3 className="blue-color fs-22 mb-4 mb-lg-0 text-capitalize">Have a question?</h3>
                <form className="careeruiryModal-form row career-form mt-lg-4">
                  <div className="mb-4 col-lg-6">
                    <div className="outlined-input">
                      <input
                        type="text"
                        className="w-100"
                        placeholder=" "
                        value={contactName.trimStart().replace(/  +/g, ' ') || ''}
                        onChange={(event) => setContactName(event.target.value.trimStart().replace(/  +/g, ' '))}
                      />
                      <label>Name</label>
                    </div>
                    {error && errorMessage.name && <small className="mt-3 text-danger">{errorMessage.name}</small>}
                  </div>
                  <div className="mb-4 col-lg-6">
                    <div className="outlined-input">
                      <input
                        type="email"
                        className="w-100"
                        placeholder=" "
                        value={contactEmail || ''}
                        onChange={(event) => setContactEmail(event.target.value)}
                      />
                      <label>Email</label>
                    </div>
                    {error && errorMessage.email && <small className="mt-3 text-danger">{errorMessage.email}</small>}
                  </div>
                  <div className="mb-4 col-lg-6">
                    <div className="outlined-input">
                      <input
                        type="number"
                        className="w-100"
                        placeholder=" "
                        maxLength="10"
                        onInput={maxLengthCheck}
                        value={contactPhone || ''}
                        onChange={(event) => setContactPhone(event.target.value)}
                      />
                      <label>Phone</label>
                    </div>
                    {error && errorMessage.phone && <small className="mt-3 text-danger">{errorMessage.phone}</small>}
                  </div>
                  <div className="mb-4 col-lg-6">
                    <div className="outlined-select">
                      <select
                        required
                        onChange={(event) => setContactSubject(event.target.value)}
                        value={contactSubject || ''}
                      >
                        <option className="option-hidden"></option>
                        <option value="Site Enquiry">Site Enquiry</option>
                        <option value="Management">Management</option>
                        <option value="Other">Other</option>
                      </select>
                      <label className="fs-16">Subject</label>
                    </div>
                    {error && errorMessage.subject && (
                      <small className="mt-3 text-danger">{errorMessage.subject}</small>
                    )}
                  </div>
                  <div className="mb-4 col-12">
                    <div className="outlined-input">
                      <textarea
                        className="w-100 resize-none"
                        placeholder=" "
                        value={contactMessage.trimStart().replace(/  +/g, ' ') || ''}
                        onChange={(event) => setContactMessage(event.target.value.trimStart().replace(/  +/g, ' '))}
                        rows={3}
                      ></textarea>
                      <label>Message</label>
                    </div>
                    {error && errorMessage.message && (
                      <small className="mt-2 text-danger">{errorMessage.message}</small>
                    )}
                  </div>
                  <div className="mb-2 col-12">
                    <button onClick={submitForm} type="button" className="button-golden" disabled={isSubmitted}>
                      {isSubmitted && <Spinner className="me-2" animation="border" variant="light" size="sm" />}
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
