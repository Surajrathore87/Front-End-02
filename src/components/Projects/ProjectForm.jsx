import React, { useEffect, useState } from 'react';
import { maxLengthCheck, validEmail, validName } from '_helper/regex';
import { toast } from 'react-toastify';
import { toastConfig } from '_helper/toastConfig';
import { callAPI } from '_services/CallAPI';
import { useRouter } from 'next/router';
import { Spinner } from 'react-bootstrap';

function ProjectForm() {
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const [projectId, setProjectId] = useState(0);

  // Get Project Id
  useEffect(() => {
    if (router && router.asPath == '/residential/ashapurna-heritage') {
      setProjectId(1);
    }
    if (
      (router && router.asPath == '/residential/ashapurna-anmol') ||
      router.asPath == '/upcoming-projects/ashapurna-anmol'
    ) {
      setProjectId(2);
    }
    if (
      (router && router.asPath == '/residential/ashapurna-pachpadra') ||
      router.asPath == '/upcoming-projects/ashapurna-pachpadra'
    ) {
      setProjectId(3);
    }
    if (
      (router && router.asPath == '/residential/ashapurna-nri') ||
      router.asPath == '/ashapurna-nri/ashapurna-nri' ||
      router.asPath == '/upcoming-projects/ashapurna-nri'
    ) {
      setProjectId(4);
    }
    if (
      (router && router.asPath == '/residential/ashapurna-basera-second-phase') ||
      router.asPath == '/upcoming-projects/ashapurna-basera-second-phase'
    ) {
      setProjectId(5);
    }
  }, [router.asPath]);

  const [errorMessage, setErrorMessage] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
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
        project_id: projectId,
      };
      setIsSubmitted(true);
      callAPI('POST', process.env.ENQUIRY_FORM, params, (res) => {
        if (res.status) {
          toast.success(res['message'], toastConfig);
          setContactName('');
          setContactPhone('');
          setContactEmail('');
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
      <div className="project-form overflow-hidden position-relative">
        <h3 className="fs-22 golden-color fw-600 py-2 mb-3 mb-lg-4 position-relative">Get in Touch</h3>
        <form className="career-form">
          <div className="form-group mb-3 mb-lg-4">
            <div className="position-relative">
              <input
                type="text"
                placeholder="Name"
                className="w-100 fs-16 fw-400"
                value={contactName.trimStart().replace(/  +/g, ' ') || ''}
                onChange={(event) => setContactName(event.target.value.trimStart().replace(/  +/g, ' '))}
              />
              <img src="/images/icons/name-icon.svg" alt="icon" className="img-fluid position-absolute" />
            </div>
            {error && errorMessage.name && <small className="mt-3 text-danger">{errorMessage.name}</small>}
          </div>
          <div className="form-group mb-3 mb-lg-4">
            <div className="position-relative">
              <input
                type="number"
                placeholder="Mobile number"
                maxLength="10"
                onInput={maxLengthCheck}
                value={contactPhone || ''}
                onChange={(event) => setContactPhone(event.target.value)}
                className="w-100 fs-16 fw-400"
              />
              <img src="/images/icons/mobile-icon.svg" alt="icon" className="img-fluid position-absolute" />
            </div>
            {error && errorMessage.phone && <small className="mt-3 text-danger">{errorMessage.phone}</small>}
          </div>
          <div className="form-group mb-3 mb-lg-4">
            <div className="position-relative">
              <input
                type="email"
                className="w-100 fs-16 fw-400"
                placeholder="Email"
                value={contactEmail || ''}
                onChange={(event) => setContactEmail(event.target.value)}
              />
              <img src="/images/icons/email-icon.svg" alt="icon" className="img-fluid position-absolute mail-img" />
            </div>
            {error && errorMessage.email && <small className="mt-3 text-danger">{errorMessage.email}</small>}
          </div>
          <div className="form-group position-relative mb-3 mb-lg-4">
            <textarea
              type="text"
              name="message"
              className="w-100 fs-16 fw-400 resize-none"
              placeholder="Message"
              rows={4}
              value={contactMessage.trimStart().replace(/  +/g, ' ') || ''}
              onChange={(event) => setContactMessage(event.target.value.trimStart().replace(/  +/g, ' '))}
            ></textarea>
            {error && errorMessage.message && <small className="mt-2 text-danger">{errorMessage.message}</small>}
          </div>
          <div className="mb-3 mb-lg-4">
            <button
              className="btn fw-500 text-white fs-16 bg-golden-color w-100"
              type="button"
              disabled={isSubmitted}
              onClick={submitForm}
            >
              {isSubmitted && <Spinner className="me-2" animation="border" variant="light" size="sm" />}
              Enquire Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProjectForm;
