import { Modal } from 'react-bootstrap';
import React from 'react';
import { useAuth } from '_contexts/auth';
import { useState } from 'react';
import { maxLengthCheck } from '_helper/regex';

export default function MobileVerificationModal(props) {
  const { userMobile, setUserMobile } = props;
  const { setShowVerification, setShowOtpModal } = useAuth();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    phone: '',
  });

  function formValidation() {
    let phoneMsg = '';
    let isValid = false;

    if (!userMobile) {
      phoneMsg = 'Please enter phone number';
    }
    if (userMobile) {
      if (String(userMobile).length !== 10) {
        phoneMsg = 'Mobile number must be 10 digits only';
      }
    }
    if (!phoneMsg) {
      isValid = true;
    }

    if (isValid) {
      setError(true);
      setErrorMessage({
        phone: '',
      });
      return true;
    } else {
      setError(true);
      setErrorMessage({
        phone: phoneMsg,
      });
      return false;
    }
  }

  function submitForm() {
    if (formValidation()) {
      setShowVerification(false);
      setShowOtpModal(true);
    }
  }

  return (
    <>
      <Modal
        className="verification-modal"
        show={true}
        centered
        keyboard={false}
        onHide={setShowVerification}
        backdrop="static"
      >
        <Modal.Header closeButton className="pb-0 pt-3 pe-4 border-0"></Modal.Header>
        <Modal.Body className="p-4 text-center">
          <img src="/images/logo/logo-main1.svg" alt="logo" className="img-fluid mb-4" width={130} />
          <h4 className="blue-color fs-600 fs-24">Unlock Floor Plan</h4>
          <p className="text-color lh-30">We will send you an OTP on this mobile number</p>
          <form className="my-3">
            <div className="pt-2">
              <div className="outlined-input ver-mobile-input position-relative">
                <input
                  type="number"
                  id="phone-number"
                  maxLength="10"
                  onInput={maxLengthCheck}
                  className="w-100"
                  placeholder=" "
                  value={userMobile || ''}
                  onChange={(e) => setUserMobile(e.target.value)}
                />
                <label>Mobile Number</label>
                <img
                  src="/images/icons/mobile-icon.svg"
                  alt="icon"
                  width={18}
                  className="img-fluid position-absolute"
                />
              </div>
              {error && errorMessage.phone && (
                <p className="text-start">
                  <small className="mt-3 text-danger">{errorMessage.phone}</small>
                </p>
              )}
            </div>
            <button
              className="btn shadow-none button-golden w-auto px-4 py-2 fs-17 mt-4 ver-continue"
              type="button"
              onClick={submitForm}
            >
              Send
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
