import { useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { validName, validEmail, maxLengthCheck } from '_helper/regex';
import { toast } from 'react-toastify';
import { toastConfig } from '_helper/toastConfig';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { callAPI } from '_services/CallAPI';

export default function OurNriCorner(props) {
  const { nriData } = props;
  //console.log(nriData);
  const [nriName, setNriName] = useState('');
  const [nriPhone, setNriPhone] = useState('');
  const [nriEmail, setNriEmail] = useState('');
  const [nriMessage, setNriMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  function formValidation() {
    let nameMsg = '';
    let phoneMsg = '';
    let emailMsg = '';
    let messageMsg = '';
    let isValid = false;

    if (!nriName) {
      nameMsg = 'Please enter name';
    }
    if (nriName && !validName(nriName)) {
      nameMsg = 'Please enter valid name';
    }

    if (nriPhone) {
      if (String(nriPhone).length !== 10) {
        phoneMsg = 'Mobile number must be 10 digits only';
      }
    }
    if (!nriPhone) {
      phoneMsg = 'Please enter phone number';
    }

    if (!nriEmail) {
      emailMsg = 'Please enter email address';
    }
    if (nriEmail && !validEmail(nriEmail)) {
      emailMsg = 'Please enter valid email';
    }
    if (!nriMessage) {
      messageMsg = 'Please enter message';
    }

    if (!nameMsg && !phoneMsg && !emailMsg && !messageMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        name: nameMsg,
        phone: phoneMsg,
        email: emailMsg,
        message: messageMsg,
      });
      return false;
    }
  }

  function submitNriForm() {
    if (formValidation()) {
      const params = {
        name: nriName,
        phone: nriPhone,
        email: nriEmail,
        message: nriMessage,
        enquiry_type: 3,
      };
      setIsSubmitted(true);
      callAPI('POST', process.env.CONTACT_US_FORM, params, (res) => {
        if (res.status) {
          toast.success(res['message'], toastConfig);
          setNriName('');
          setNriPhone('');
          setNriEmail('');
          setNriMessage('');
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
      <section className="nriCorner-main contact-section">
        <Container>
          <Row className="">
            <Col lg={12}>
              <div className="nricorner-heading">
                <h1 className="text-uppercase text-center fs-35 fw-600 blue-color">{nriData.getNriCorner.title}</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <div className="h-100 partner-formleft my-2">
                <div className="">
                  <span className="text-uppercase golden-color subtitle position-relative pe-3">
                    {nriData.getNriCorner.title}
                  </span>
                  <h2 className="blue-color fw-600 fs-30 mb-15">
                    NRI Clients <span className="golden-color"> Corner</span>
                  </h2>
                  <div className="text-color lh-24 fs-14 pe-lg-4">
                    {ReactHtmlParser(nriData.getNriCorner.description)}
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="d-flex align-items-center justify-content-center h-100 w-100">
                <div className="contact-form p-4 position-relative overflow-hidden w-100">
                  <h2 className="blue-color fs-26 text-capitalize">NRI ENQUIRY</h2>
                  <p className="text-color lh-30 fs-16">
                    Please fill in the form and we would contact you at the earliest.
                  </p>
                  <form className="careeruiryModal-form career-form mt-lg-4">
                    <div className="mb-4">
                      <div className="outlined-input">
                        <input
                          type="text"
                          name="nriname"
                          id="nriname"
                          className="w-100"
                          placeholder=" "
                          value={nriName.trimStart().replace(/  +/g, ' ') || ''}
                          onChange={(event) => setNriName(event.target.value.trimStart().replace(/  +/g, ' '))}
                        />
                        <label>Name</label>
                      </div>
                      {error && errorMessage.name && <small className="mt-3 text-danger">{errorMessage.name}</small>}
                    </div>

                    <div className="mb-4">
                      <div className="outlined-input">
                        <input
                          type="number"
                          name="nriphone"
                          id="nriphone"
                          className="w-100"
                          placeholder=" "
                          maxLength="10"
                          onInput={maxLengthCheck}
                          value={nriPhone || ''}
                          onChange={(event) => setNriPhone(event.target.value)}
                        />
                        <label>Phone</label>
                      </div>
                      {error && errorMessage.phone && <small className="mt-3 text-danger">{errorMessage.phone}</small>}
                    </div>

                    <div className="mb-4">
                      <div className="outlined-input">
                        <input
                          type="email"
                          name="nriemail"
                          id="nriemail"
                          className="w-100"
                          placeholder=" "
                          value={nriEmail || ''}
                          onChange={(event) => setNriEmail(event.target.value)}
                        />
                        <label>Email</label>
                      </div>
                      {error && errorMessage.email && <small className="mt-3 text-danger">{errorMessage.email}</small>}
                    </div>

                    <div className="mb-4">
                      <div className="outlined-input">
                        <textarea
                          name="nrimessage"
                          id="nrimessage"
                          className="w-100 resize-none"
                          placeholder=" "
                          value={nriMessage || ''}
                          onChange={(event) => setNriMessage(event.target.value)}
                          rows={3}
                        ></textarea>
                        <label>Message</label>
                      </div>
                      {error && errorMessage.message && (
                        <small className="mt-3 text-danger">{errorMessage.message}</small>
                      )}
                    </div>

                    <div className="text-center">
                      <Button type="button" className="button-golden" onClick={submitNriForm} disabled={isSubmitted}>
                        {isSubmitted && <Spinner className="me-2" animation="border" variant="light" size="sm" />}
                        SUBMIT
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
