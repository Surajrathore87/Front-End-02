import { Modal, Spinner } from 'react-bootstrap';
import React, { useState } from 'react';
import { maxLengthCheck, validEmail, validName } from '_helper/regex';
import { toast } from 'react-toastify';
import { toastConfig } from '_helper/toastConfig';
import { callAPI } from '_services/CallAPI';
import Axios from 'axios';

export default function CareerModal(props) {
  const { setShowCareer, positions, qualifications, careerJobId } = props;
  const [careerName, setCareerName] = useState('');
  const [careerPhone, setCareerPhone] = useState('');
  const [careerEmail, setCareerEmail] = useState('');
  const [careerLocation, setCareerLocation] = useState('');
  const [careerQualification, setCareerQualification] = useState('');
  const [careerPosition, setCareerPosition] = useState('');
  const [careerFile, setCareerFile] = useState(null);
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    qualification: '',
    position: '',
    file: '',
  });

  // Validate Form
  function formValidation() {
    let nameMsg = '';
    let phoneMsg = '';
    let emailMsg = '';
    let locationMsg = '';
    let qualificationMsg = '';
    let positionMsg = '';
    let fileMsg = '';
    let isValid = false;

    if (!careerName) {
      nameMsg = 'Please enter name';
    }
    if (careerName && !validName(careerName)) {
      nameMsg = 'Please enter valid name';
    }
    if (careerPhone) {
      if (String(careerPhone).length !== 10) {
        phoneMsg = 'Mobile number must be 10 digits only';
      }
    }
    if (!careerPhone) {
      phoneMsg = 'Please enter phone number';
    }
    if (!careerEmail) {
      emailMsg = 'Please enter email address';
    }
    if (careerEmail && !validEmail(careerEmail)) {
      emailMsg = 'Please enter valid email';
    }
    if (!careerLocation) {
      locationMsg = 'Please enter current location';
    }
    if (careerLocation && !validName(careerLocation)) {
      locationMsg = 'Please enter valid location';
    }
    if (!careerQualification) {
      qualificationMsg = 'Please select Qualification';
    }

    if (!careerPosition) {
      positionMsg = 'Please select Position';
    }

    if (!careerFile) {
      fileMsg = 'Please upload resume';
    }

    if (!nameMsg && !phoneMsg && !emailMsg && !locationMsg && !qualificationMsg && !positionMsg && !fileMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        name: '',
        phone: '',
        email: '',
        location: '',
        qualification: '',
        position: '',
        file: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        name: nameMsg,
        phone: phoneMsg,
        email: emailMsg,
        location: locationMsg,
        qualification: qualificationMsg,
        position: positionMsg,
        file: fileMsg,
      });
      return false;
    }
  }
  // Form button submission
  function submitForm() {
    if (formValidation()) {
      const params = {
        name: careerName,
        email: careerEmail,
        phone: careerPhone,
        current_location: careerLocation,
        qualification_id: careerQualification,
        position_id: careerPosition,
        career_job_id: Number(careerJobId),
      };
      callAPI('POST', process.env.CAREER_FORM, params, (res) => {
        if (res.status) {
          careerResumeUpload(res.data.career_id);
          setIsSubmitted(true);
        } else {
          toast.error(res['message'], toastConfig);
        }
      });
    }
  }

  async function careerResumeUpload(enduiryId) {
    const params = {
      resume_file: careerFile,
      enquiry_id: enduiryId,
    };
    const _headers = {
      'Content-Type': 'multipart/form-data',
      'api-version': 'v1',
    };
    const formData = new FormData();
    Object.keys(params).forEach((key) => formData.append(key, params[key]));
    const response = await Axios.post(process.env.CAREER_FORM_RESUME, formData, _headers);
    const res = response.data;
    if (res._status) {
      const data = res._data;
      toast.success(res._message, toastConfig);
      setCareerName('');
      setCareerPhone('');
      setCareerEmail('');
      setCareerLocation('');
      setCareerQualification('');
      setCareerPosition('');
      setIsSubmitted(false);
      setShowCareer(false);
    } else {
      toast.error(res._message, toastConfig);
      setIsSubmitted(false);
    }
  }

  function renderPositions() {
    return positions.map((item, key) => (
      <option value={item.id} key={key}>
        {item.name}
      </option>
    ));
  }

  function renderQualifications() {
    return qualifications.map((item, key) => (
      <option value={item.id} key={key}>
        {item.name}
      </option>
    ));
  }

  return (
    <>
      <Modal show={true} onHide={setShowCareer} backdrop="static" keyboard={false} size="lg" centered>
        <Modal.Header closeButton className="border-bottom-0 px-4">
          <Modal.Title className="blue-color fw-500 text-uppercase">Submit your resume here!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <form className="careeruiryModal-form row career-form">
            <div className="mb-4 col-lg-6">
              <div className="outlined-input">
                <input
                  type="text"
                  className="w-100"
                  placeholder=" "
                  value={careerName.trimStart().replace(/  +/g, ' ') || ''}
                  onChange={(event) => setCareerName(event.target.value.trimStart().replace(/  +/g, ' '))}
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
                  value={careerEmail || ''}
                  onChange={(event) => setCareerEmail(event.target.value)}
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
                  value={careerPhone || ''}
                  onChange={(event) => setCareerPhone(event.target.value)}
                />
                <label>Phone</label>
              </div>
              {error && errorMessage.phone && <small className="mt-3 text-danger">{errorMessage.phone}</small>}
            </div>
            <div className="mb-4 col-lg-6">
              <div className="outlined-input">
                <input
                  type="text"
                  className="w-100"
                  placeholder=" "
                  value={careerLocation.trimStart().replace(/  +/g, ' ') || ''}
                  onChange={(event) => setCareerLocation(event.target.value.trimStart().replace(/  +/g, ' '))}
                />
                <label>Current Location</label>
              </div>
              {error && errorMessage.location && <small className="mt-3 text-danger">{errorMessage.location}</small>}
            </div>
            <div className="mb-4 col-lg-6">
              <div className="outlined-select">
                <select
                  required
                  onChange={(event) => setCareerQualification(event.target.value)}
                  value={careerQualification || ''}
                >
                  <option className="option-hidden"></option>
                  {qualifications && renderQualifications()}
                </select>
                <label className="fs-16">Highest Qualification</label>
              </div>
              {error && errorMessage.qualification && (
                <small className="mt-3 text-danger">{errorMessage.qualification}</small>
              )}
            </div>
            <div className="mb-4 col-lg-6">
              <div className="outlined-select">
                <select
                  required
                  onChange={(event) => setCareerPosition(event.target.value)}
                  value={careerPosition || ''}
                >
                  <option className="option-hidden"></option>
                  {positions && renderPositions()}
                </select>
                <label className="fs-16">Select Position</label>
              </div>
              {error && errorMessage.position && <small className="mt-3 text-danger">{errorMessage.position}</small>}
            </div>
            <div className="mb-4 col-lg-6">
              <div className="career-resume">
                <label htmlFor="file" className="mb-2">
                  Upload Resume
                  <small> (Upload doc/pdf file)</small>
                </label>
                <input
                  id="file"
                  type="file"
                  accept=".pdf, .doc, .docx,"
                  onChange={(event) => setCareerFile(event.target.files[0])}
                />
              </div>
              {error && errorMessage.file && <small className="mt-3 text-danger">{errorMessage.file}</small>}
            </div>
            <div className="mb-4">
              <button onClick={submitForm} type="button" className="button-golden" disabled={isSubmitted}>
                {isSubmitted && <Spinner className="me-2" animation="border" variant="light" size="sm" />}
                SUBMIT
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
