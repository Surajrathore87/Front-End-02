import { Modal } from 'react-bootstrap';
import React from 'react';
import { useAuth } from '_contexts/auth';
import { useState } from 'react';
// import OtpInput from 'react-otp-input';
import OTPInput, { ResendOTP } from 'otp-input-react';

export default function OtpModal(props) {
  const { userMobile, setUserMobile } = props;
  const { setShowOtpModal, setIsVerified } = useAuth();
  const [isError, setIsError] = useState(false);
  const [oneTimePassword, setOneTimePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  function check() {
    if (oneTimePassword.length != 6) {
      setIsError(true);
      return;
    } else {
      setIsError(false);
      setShowOtpModal(false);
      setUserMobile('');
      setIsVerified(true);
    }
  }

  function resendOtp() {
    console.log('');
  }

  const renderTime = (remainingTime) => {
    return (remainingTime && <span>{remainingTime} sec</span>) || '';
  };

  return (
    <>
      <Modal
        className="verification-modal"
        show={true}
        centered
        keyboard={false}
        onHide={setShowOtpModal}
        backdrop="static"
      >
        <Modal.Header closeButton className="pb-0 pt-3 pe-4 border-0"></Modal.Header>
        <Modal.Body className="p-4 text-center">
          <img src="/images/logo/logo-main1.svg" alt="logo" className="img-fluid mb-4" width={130} />
          <h4 className="blue-color fs-600 fs-24">Enter Code</h4>
          <p className="text-color lh-30">Enter the OTP send to {userMobile}</p>
          <form className="my-3">
            <div className="pt-2">
              <OTPInput
                value={oneTimePassword}
                onChange={setOneTimePassword}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                className="otp-inputs justify-content-center py-2"
              />
              {isError && <small className="text-red">The one time password must be 6 digits.</small>}
              {errorMessage && (
                <div className="pt-3">
                  <small className="text-red">{errorMessage}</small>
                </div>
              )}
              <button
                onClick={check}
                type="button"
                className="btn shadow-none button-golden w-auto px-4 py-2 fs-17 mt-4 ver-continue"
              >
                Verify & Proceed
              </button>
            </div>
          </form>
          <div className="d-flex justify-content-center pt-3 align-items-center pb-4">
            <span className="fs-14 label-color-1 fw-400">Didn’t get the code?</span>
            <ResendOTP maxTime={30} onResendClick={resendOtp} renderTime={renderTime} className="resend-otp" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
