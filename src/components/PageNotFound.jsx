import Link from 'next/link';
import React from 'react';

function PageNotFound() {
  return (
    <section className="error_section py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 py-5">
            <div className="text-center">
              <p className="mb-4 text-black fw-600 fs-20">The page you are looking for is not available</p>
              <div className="text-center">
                <Link href="/">
                  <a title="Back to Homepage" className="btn button-golden w-max-content fs-15">
                    Back to Homepage
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
