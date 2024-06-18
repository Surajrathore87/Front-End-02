import Link from 'next/link';
import { validName, maxLengthCheck, validEmail } from '_helper/regex';
import { toast } from 'react-toastify';
import { toastConfig } from '_helper/toastConfig';
import React, { useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { callAPI } from '_services/CallAPI';
import ReactHtmlParser from 'react-html-parser';
import { useEffect } from 'react';

export default function Partners(props) {
  const { partnerData } = props;
  //console.log(partnerData);
  const [subjectData, setSubjectData] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [partnerPhone, setPartnerPhone] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerSubject, setPartnerSubject] = useState('');
  const [partnerMessage, setPartnerMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  // Subjects Data
  useEffect(() => {
    partnerSubjects();
  }, []);

  function partnerSubjects() {
    callAPI('POST', process.env.PARTNER_SUBJECTS, {}, (res) => {
      if (res.status) {
        setSubjectData(res.data.getEnquirySubjects);
      }
    });
  }

  function renderSubjects() {
    return subjectData.map((item, key) => {
      return (
        <option key={key} value={item.name}>
          {item.name}
        </option>
      );
    });
  }

  // Validate Form
  function formValidation() {
    let nameMsg = '';
    let phoneMsg = '';
    let emailMsg = '';
    let subjectMsg = '';
    let msgMsg = '';
    let isValid = false;

    if (!partnerName) {
      nameMsg = 'Please enter name';
    }

    if (partnerName && !validName(partnerName)) {
      nameMsg = 'Please enter valid name';
    }

    if (partnerPhone) {
      if (String(partnerPhone).length !== 10) {
        phoneMsg = 'Mobile number must be 10 digits only';
      }
    }
    if (!partnerPhone) {
      phoneMsg = 'Please enter phone number';
    }

    if (!partnerEmail) {
      emailMsg = 'Please enter email address';
    }

    if (partnerEmail && !validEmail(partnerEmail)) {
      emailMsg = 'Please enter valid email';
    }
    if (!partnerSubject) {
      subjectMsg = 'Please select subject';
    }
    if (!partnerMessage) {
      msgMsg = 'Please enter message';
    }

    if (!nameMsg && !phoneMsg && !emailMsg && !subjectMsg && !msgMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        name: '',
        phone: '',
        email: '',
        subject: '',
        msgMsg: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        name: nameMsg,
        phone: phoneMsg,
        email: emailMsg,
        subject: subjectMsg,
        message: msgMsg,
      });
      return false;
    }
  }

  function submitForm() {
    if (formValidation()) {
      const params = {
        name: partnerName,
        email: partnerEmail,
        phone: partnerPhone,
        message: partnerMessage,
        enquiry_type: 2,
        subject: partnerSubject,
      };
      setIsSubmitted(true);
      callAPI('POST', process.env.CONTACT_US_FORM, params, (res) => {
        if (res.status) {
          toast.success(res['message'], toastConfig);
          setPartnerName('');
          setPartnerPhone('');
          setPartnerEmail('');
          setPartnerSubject('');
          setPartnerMessage('');
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
      <section className="partner-main">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="partner-heading mb-40">
                <h2 className="blue-color fs-35 fw-600 text-center mb-10">{partnerData.becomePartner.title}</h2>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="partner-blocks bg-light-golden-color shadow-sm p-4 mt-4">
                <span className="text-uppercase golden-color subtitle position-relative pe-3">
                  {partnerData.becomePartner.channel_partner_title}
                </span>
                <h4 className="light-blue-color fw-500 mb-2 fs-20">
                  {partnerData.becomePartner.channel_partner_tagline}
                </h4>
                <div className="black-color lh-24 fs-14">
                  {ReactHtmlParser(partnerData.becomePartner.channel_partner_description)}
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="partner-blocks bg-light-golden-color shadow-sm p-4 mt-4">
                <span className="text-uppercase golden-color subtitle position-relative pe-3">
                  {partnerData.becomePartner.vendor_partner_title}
                </span>
                <h4 className="light-blue-color fw-500 mb-2 fs-20">
                  {partnerData.becomePartner.vendor_partner_tagline}
                </h4>
                <div className="black-color lh-24 fs-14">
                  {ReactHtmlParser(partnerData.becomePartner.vendor_partner_description)}
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="partner-blocks bg-light-golden-color shadow-sm p-4 mt-4">
                <span className="text-uppercase golden-color subtitle position-relative pe-3">
                  {partnerData.becomePartner.supplier_partner_title}
                </span>
                <h4 className="light-blue-color fw-500 mb-2 fs-20">
                  {partnerData.becomePartner.supplier_partner_tagline}
                </h4>
                <div className="black-color lh-30">
                  {ReactHtmlParser(partnerData.becomePartner.supplier_partner_description)}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="corporateProfile-full">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="corporatefull-wrapper d-flex align-items-center justify-content-center">
                <div>
                  <h2 className="light-blue-color fw-500 fs-35 text-center text-uppercase mb-20">
                    We{"'"}ve got plenty more to say
                  </h2>
                  <Link href={'/contact-us'}>
                    <a className="outline-button fs-16">Contact Us</a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contact-section">
        <Container>
          <Row>
            <Col lg={6} className="mb-3">
              <div className="h-100 partner-formleft my-2 d-flex align-items-center">
                <div className="">
                  <span className="text-uppercase golden-color subtitle position-relative pe-3">
                    {partnerData.becomePartner.partner_title}
                  </span>
                  <h1 className="blue-color fw-600 fs-35 mb-10">{partnerData.becomePartner.partner_tagline}</h1>
                  <div className="text-color lh-24 fs-14 pe-lg-4">
                    {ReactHtmlParser(partnerData.becomePartner.partner_description)}
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="contact-form p-4 position-relative overflow-hidden">
                <h2 className="blue-color text-capitalize fs-30">Partner Registration Form</h2>
                <form className="careeruiryModal-form career-form mt-lg-4">
                  <div className="row">
                    <div className="mb-4 col-lg-6 col-md-6">
                      <div className="outlined-input">
                        <input
                          type="text"
                          className="w-100"
                          placeholder=" "
                          value={partnerName.trimStart().replace(/  +/g, ' ') || ''}
                          onChange={(event) => setPartnerName(event.target.value.trimStart().replace(/  +/g, ' '))}
                        />
                        <label>Name</label>
                      </div>
                      {error && errorMessage.name && <small className="mt-3 text-danger">{errorMessage.name}</small>}
                    </div>

                    <div className="mb-4 col-lg-6 col-md-6">
                      <div className="outlined-input">
                        <input
                          type="email"
                          className="w-100"
                          placeholder=" "
                          value={partnerEmail || ''}
                          onChange={(event) => setPartnerEmail(event.target.value)}
                        />
                        <label>Email</label>
                      </div>
                      {error && errorMessage.email && <small className="mt-3 text-danger">{errorMessage.email}</small>}
                    </div>
                  </div>

                  <div className="row">
                    <div className="mb-4 col-lg-6 col-md-6">
                      <div className="outlined-input">
                        <input
                          type="number"
                          className="w-100"
                          placeholder=" "
                          maxLength="10"
                          onInput={maxLengthCheck}
                          value={partnerPhone || ''}
                          onChange={(event) => setPartnerPhone(event.target.value)}
                        />
                        <label>Phone</label>
                      </div>
                      {error && errorMessage.phone && <small className="mt-3 text-danger">{errorMessage.phone}</small>}
                    </div>

                    <div className="mb-4 col-lg-6 col-md-6">
                      <div className="outlined-select">
                        <select
                          required
                          onChange={(event) => setPartnerSubject(event.target.value)}
                          value={partnerSubject || ''}
                        >
                          <option className="option-hidden"></option>
                          {subjectData && renderSubjects()}
                        </select>
                        <label className="fs-16">Subject</label>
                      </div>
                      {error && errorMessage.subject && (
                        <small className="mt-3 text-danger">{errorMessage.subject}</small>
                      )}
                    </div>
                  </div>

                  <div className="mb-4 col-12">
                    <div className="outlined-input">
                      <textarea
                        className="w-100 resize-none"
                        placeholder=" "
                        value={partnerMessage.trimStart().replace(/  +/g, ' ') || ''}
                        onChange={(event) => setPartnerMessage(event.target.value.trimStart().replace(/  +/g, ' '))}
                        rows={3}
                      ></textarea>
                      <label>Message</label>
                    </div>
                    {error && errorMessage.message && (
                      <small className="mt-2 text-danger">{errorMessage.message}</small>
                    )}
                  </div>

                  <div className="mb-4 col-12">
                    <Button
                      type="button"
                      className="button-golden ms-auto fs-16 w-auto py-2 px-4 h-auto"
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
    </>
  );
}
