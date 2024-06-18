import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuth } from '_contexts/auth';

function VerificationBox() {
  const { setShowVerification } = useAuth();
  return (
    <>
      <div className="w-100 h-100 position-absolute top-0 start-0 verification-box d-flex align-items-center justify-content-center">
        <div className="text-center text-color fs-17">
          <p className="fw-500">Click here to view floor plan</p>
          <button
            className="btn shadow-none px-4 py-2 fs-15 text-white text-uppercase"
            onClick={() => setShowVerification(true)}
          >
            <FontAwesomeIcon icon={faUnlockAlt} className="me-2 fs-17" width={18} />
            Unlock
          </button>
        </div>
      </div>
    </>
  );
}

export default VerificationBox;
