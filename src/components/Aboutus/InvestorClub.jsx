import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Row, Spinner } from 'react-bootstrap';
import { validName, maxLengthCheck, validEmail } from '_helper/regex';
import { toast } from 'react-toastify';
import { toastConfig } from '_helper/toastConfig';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { callAPI } from '_services/CallAPI';

export default function Investor(props) {
  const { investorsData } = props;
  //console.log(investorsData);
  const [propertyData, setPropertyData] = useState(null);
  const [invClubName, setInvClubName] = useState('');
  const [invClubEmail, setInvClubEmail] = useState('');
  const [invClubPhone, setInvClubPhone] = useState('');
  const [invClubProperty, setInvClubProperty] = useState('');
  const [invClubMessage, setInvClubMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
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
    callAPI('POST', process.env.INVESTOR_SUBJECTS, {}, (res) => {
      if (res.status) {
        setPropertyData(res.data.getPropertyTypes);
      }
    });
  }

  function renderProperties() {
    return propertyData.map((item, key) => {
      return (
        <option key={key} value={item.name}>
          {item.name}
        </option>
      );
    });
  }

  function formValidation() {
    let nameMsg = '';
    let phoneMsg = '';
    let emailMsg = '';
    let propertyMsg = '';
    let messageMsg = '';
    let isValid = false;

    if (!invClubName) {
      nameMsg = 'Please enter name';
    }
    if (invClubName && !validName(invClubName)) {
      nameMsg = 'Please enter valid name';
    }
    if (!invClubEmail) {
      emailMsg = 'Please enter email address';
    }

    if (invClubEmail && !validEmail(invClubEmail)) {
      emailMsg = 'Please enter valid email';
    }
    if (invClubPhone) {
      if (String(invClubPhone).length !== 10) {
        phoneMsg = 'Mobile number must be 10 digits only';
      }
    }
    if (!invClubPhone) {
      phoneMsg = 'Please enter phone number';
    }

    if (!invClubProperty) {
      propertyMsg = 'Please select Property';
    }

    if (!invClubMessage) {
      messageMsg = 'Please enter message';
    }

    if (!nameMsg && !emailMsg && !phoneMsg && !propertyMsg && !messageMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        name: '',
        email: '',
        phone: '',
        property: '',
        message: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        name: nameMsg,
        email: emailMsg,
        phone: phoneMsg,
        property: propertyMsg,
        message: messageMsg,
      });
      return false;
    }
  }

  function submitForm() {
    if (formValidation()) {
      const params = {
        name: invClubName,
        email: invClubEmail,
        phone: invClubPhone,
        message: invClubMessage,
        enquiry_type: 4,
        subject: invClubProperty,
      };
      setIsSubmitted(true);
      callAPI('POST', process.env.CONTACT_US_FORM, params, (res) => {
        if (res.status) {
          toast.success(res['message'], toastConfig);
          setInvClubName('');
          setInvClubEmail('');
          setInvClubPhone('');
          setInvClubProperty('');
          setInvClubMessage('');
          setIsSubmitted(false);
        } else {
          setIsSubmitted(false);
          toast.error(res['message'], toastConfig);
        }
      });
    }
  }

  return (
    <>
      <section className="contact-section">
        <Container>
          <Row>
            <Col lg="6">
              <div className="h-100 partner-formleft my-2 d-flex align-items-center">
                <div className="">
                  <span className="text-uppercase golden-color subtitle position-relative pe-3">
                    {investorsData.getInvestorClub.title}
                  </span>
                  <h1 className="blue-color fw-600 fs-35 mb-15">
                    Our Investors<span className="golden-color"> Club</span>
                  </h1>
                  <div className="text-color lh-24 fs-14 pe-lg-4">
                    {ReactHtmlParser(investorsData.getInvestorClub.description)}
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="contact-form p-4 position-relative overflow-hidden">
                <h2 className="blue-color fs-30 text-capitalize">Want To take it further ?</h2>
                <p className="text-color lh-24 fs-16">
                  Please fill in the form and we would contact you at the earliest.
                </p>
                <form className="careeruiryModal-form career-form mt-lg-4">
                  <div className="mb-4">
                    <div className="outlined-input">
                      <input
                        type="text"
                        name="invClubName"
                        id="invClubName"
                        className="w-100"
                        placeholder=" "
                        value={invClubName.trimStart().replace(/  +/g, ' ') || ''}
                        onChange={(event) => setInvClubName(event.target.value.trimStart().replace(/  +/g, ' '))}
                      />
                      <label>Name</label>
                    </div>
                    {error && errorMessage.name && <small className="mt-3 text-danger">{errorMessage.name}</small>}
                  </div>
                  <div className="mb-4">
                    <div className="outlined-input">
                      <input
                        type="email"
                        className="w-100"
                        placeholder=" "
                        value={invClubEmail || ''}
                        onChange={(event) => setInvClubEmail(event.target.value)}
                      />
                      <label>Email</label>
                    </div>
                    {error && errorMessage.email && <small className="mt-3 text-danger">{errorMessage.email}</small>}
                  </div>
                  <div className="mb-4">
                    <div className="outlined-input">
                      <input
                        type="number"
                        name="invClubPhone"
                        onChange={(event) => setInvClubPhone(event.target.value)}
                        id="invClubPhone"
                        className="w-100"
                        placeholder=" "
                        maxLength="10"
                        onInput={maxLengthCheck}
                        value={invClubPhone || ''}
                      />
                      <label>Phone</label>
                    </div>
                    {error && errorMessage.phone && <small className="mt-3 text-danger">{errorMessage.phone}</small>}
                  </div>
                  <div className="mb-4">
                    <div className="outlined-select">
                      <select
                        name="invClubProperty"
                        id="invClubProperty"
                        required
                        value={invClubProperty || ''}
                        onChange={(event) => setInvClubProperty(event.target.value)}
                      >
                        <option className="option-hidden"></option>
                        {propertyData && renderProperties()}
                      </select>
                      <label className="fs-16">Interested In</label>
                    </div>
                    {error && errorMessage.property && (
                      <small className="mt-3 text-danger">{errorMessage.property}</small>
                    )}
                  </div>
                  <div className="mb-4">
                    <div className="outlined-input">
                      <textarea
                        name="invClubMessage"
                        id="invClubMessage"
                        className="w-100 resize-none"
                        placeholder=" "
                        value={invClubMessage.trimStart().replace(/  +/g, ' ') || ''}
                        onChange={(event) => setInvClubMessage(event.target.value.trimStart().replace(/  +/g, ' '))}
                        rows={3}
                      ></textarea>
                      <label>Message</label>
                    </div>
                    {error && errorMessage.message && (
                      <small className="mt-3 text-danger">{errorMessage.message}</small>
                    )}
                  </div>
                  <div className="text-center">
                    <Button
                      type="button"
                      className="button-golden fs-16 w-auto h-auto px-4 py-2"
                      onClick={submitForm}
                      disabled={isSubmitted}
                    >
                      {isSubmitted && <Spinner className="me-2" animation="border" variant="light" size="sm" />}
                      SUBMIT
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
