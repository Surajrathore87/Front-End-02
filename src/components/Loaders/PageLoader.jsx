import React from 'react';

export default function PageLoader() {
  return (
    <>
      <div className="w-100 vh-100 bg-white page-loader position-fixed start-0 top-0 d-flex align-items-center justify-content-center">
        <img src="/images/icons/page-loader.gif" alt="Loader" className="img-fluid" width={130} />
      </div>
    </>
  );
}
