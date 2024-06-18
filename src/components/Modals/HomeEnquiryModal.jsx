import { Modal, Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { validEmail, validName, maxLengthCheck } from '_helper/regex';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { toast } from 'react-toastify';
import { toastConfig } from '_helper/toastConfig';
import { callAPI } from '_services/CallAPI';

export default function HomeEnquiryModal(props) {
  const { setEnquiryModal, projectDetail, pdfUrl, projectImagePath } = props;
  const [propertyData, setPropertyData] = useState(null);
  const [enqName, setEnqName] = useState('');
  const [enqPhone, setEnqPhone] = useState('');
  const [enqEmail, setEnqEmail] = useState('');
  const [enqProperty, setEnqProperty] = useState((projectDetail && projectDetail.id) || '');
  const [enqMessage, setEnqMessage] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    phone: '',
    email: '',
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
    let phoneMsg = '';
    let emailMsg = '';
    let propertyMsg = '';
    let messageMsg = '';
    let isValid = false;

    if (!enqName) {
      nameMsg = 'Please enter name';
    }
    if (enqName && !validName(enqName)) {
      nameMsg = 'Please enter valid name';
    }

    if (enqPhone) {
      if (String(enqPhone).length !== 10) {
        phoneMsg = 'Mobile number must be 10 digits only';
      }
    }
    if (!enqPhone) {
      phoneMsg = 'Please enter phone number';
    }

    if (!enqEmail) {
      emailMsg = 'Please enter email address';
    }
    if (enqEmail && !validEmail(enqEmail)) {
      emailMsg = 'Please enter valid email';
    }
    if (!enqProperty) {
      propertyMsg = 'Please select Property';
    }

    if (!enqMessage) {
      messageMsg = 'Please enter message';
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
        name: enqName,
        email: enqEmail,
        phone: enqPhone,
        message: enqMessage,
        project_id: Number(enqProperty),
      };
      setIsSubmitted(true);
      callAPI('POST', process.env.ENQUIRY_FORM, params, (res) => {
        if (res.status) {
          toast.success(res['message'], toastConfig);
          setEnqName('');
          setEnqPhone('');
          setEnqEmail('');
          setEnqProperty('');
          setEnqMessage('');
          setEnquiryModal(false);
          setIsSubmitted(false);
          if (projectDetail && projectDetail.id) {
            window.open(projectImagePath + pdfUrl);
          }
        } else {
          toast.error(res['message'], toastConfig);
          setEnquiryModal(false);
          setIsSubmitted(false);
        }
      });
    }
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplaySpeed: 2500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Modal
        show={true}
        onHide={setEnquiryModal}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="enquiryModal-modal position-relative overflow-hidden border-0"
        size="xl"
      >
        <Modal.Body className="enquiryModal-form p-lg-0">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="w-100 h-100">
                <Slider {...sliderSettings}>
                  <div className="w-100 h-100 overflow-hidden">
                    <div
                      style={{ background: 'url(/images/sections/project-img.jpg)' }}
                      className="w-100 h-100 overflow-hidden enq-slide"
                    ></div>
                  </div>
                  <div className="w-100 h-100 overflow-hidden">
                    <div
                      style={{ background: 'url(/images/sections/ashapurna-heritage.jpg)' }}
                      className="w-100 h-100 overflow-hidden enq-slide"
                    ></div>
                  </div>
                  <div className="w-100 h-100 overflow-hidden">
                    <div
                      style={{ background: 'url(/images/sections/ashapurna-anmol.jpg)' }}
                      className="w-100 h-100 overflow-hidden enq-slide"
                    ></div>
                  </div>
                  <div className="w-100 h-100 overflow-hidden">
                    <div
                      style={{ background: 'url(/images/sections/ashapurna-basera.jpg)' }}
                      className="w-100 h-100 overflow-hidden enq-slide"
                    ></div>
                  </div>
                  {/* ))} */}
                </Slider>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="row pe-lg-4 py-lg-3 py-2">
                <div className="col-12 pb-4">
                  <div className=" d-flex justify-content-between align-items-center">
                    <Modal.Title className="blue-color fw-500 text-uppercase fw-600">
                      {(projectDetail && 'Download Brochure') || 'Enquire Now'}
                    </Modal.Title>
                    <img
                      src="/images/icons/close-icon.svg"
                      className="img-fluid cursor-pointer modal-close"
                      title="close"
                      onClick={() => setEnquiryModal(false)}
                      width={16}
                    />
                  </div>
                  <p className="fs-16 text-color mb-0 mt-2">
                    Feel free to connect with us. We will contact with you shortly.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <div className="outlined-input">
                      <input
                        type="text"
                        name="enqName"
                        id="enqName"
                        className="w-100"
                        value={enqName.trimStart().replace(/  +/g, ' ') || ''}
                        onChange={(event) => setEnqName(event.target.value.trimStart().replace(/  +/g, ' '))}
                        placeholder=" "
                      />
                      <label>Name</label>
                    </div>
                    {error && errorMessage.name && <small className="mt-3 text-danger">{errorMessage.name}</small>}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <div className="outlined-input">
                      <input
                        type="email"
                        name="enqEmail"
                        id="enqEmail"
                        className="w-100"
                        placeholder=" "
                        value={enqEmail || ''}
                        onChange={(event) => setEnqEmail(event.target.value)}
                      />
                      <label>Email</label>
                    </div>
                    {error && errorMessage.email && <small className="mt-3 text-danger">{errorMessage.email}</small>}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <div className="outlined-input">
                      <input
                        type="number"
                        name="enqPhone"
                        id="enqPhone"
                        className="w-100"
                        placeholder=" "
                        maxLength="10"
                        onInput={maxLengthCheck}
                        value={enqPhone || ''}
                        onChange={(event) => setEnqPhone(event.target.value)}
                      />
                      <label>Phone</label>
                    </div>
                    {error && errorMessage.phone && <small className="mt-3 text-danger">{errorMessage.phone}</small>}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <div className="outlined-select">
                      <select
                        name="enqProperty"
                        id="enqProperty"
                        required
                        value={enqProperty || ''}
                        onChange={(event) => setEnqProperty(event.target.value)}
                      >
                        <option className="option-hidden"></option>
                        {projectDetail && <option value={projectDetail.id}>{projectDetail.pagename}</option>}
                        {!projectDetail && propertyData && renderProperties()}
                      </select>
                      <label className="fs-16">Select Property</label>
                    </div>
                    {error && errorMessage.property && (
                      <small className="mt-3 text-danger">{errorMessage.property}</small>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-4">
                    <div className="outlined-input">
                      <textarea
                        name="enqQuery"
                        id="enqQuery"
                        className="w-100 resize-none"
                        placeholder=" "
                        value={enqMessage.trimStart().replace(/  +/g, ' ') || ''}
                        onChange={(event) => setEnqMessage(event.target.value.trimStart().replace(/  +/g, ' '))}
                        rows={3}
                      ></textarea>
                      <label>Explain Your Query</label>
                    </div>
                    {error && errorMessage.message && (
                      <small className="mt-2 text-danger">{errorMessage.message}</small>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <button onClick={submitForm} type="button" className="button-golden" disabled={isSubmitted}>
                      {isSubmitted && <Spinner className="me-2" animation="border" variant="light" size="sm" />}
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
