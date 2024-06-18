import React from 'react';

function ProjectAdvantages() {
  return (
    <>
      <section className="project-advantages">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="advantage-box">
                <h2 className="fs-40 fw-600 text-white text-center">Location advantages</h2>
                <div className="row mt-3 mt-lg-5">
                  <div className="col-lg-3 col-6 mb-3 mb-lg-0">
                    <div className="text-center m-auto">
                      <img src="/images/icons/hospital.svg" className="img-fluid mb-3" />
                      <h3 className="fs-18 fw-400 text-white mb-1">Hospital</h3>
                      <p className="fs-24 fw-500 golden-color mb-0 text-uppercase">1.6 KM</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6 mb-3 mb-lg-0">
                    <div className="text-center m-auto">
                      <img src="/images/icons/hrrl.svg" className="img-fluid mb-3" />
                      <h3 className="fs-18 fw-400 text-white mb-1">HRRL Refinery</h3>
                      <p className="fs-24 fw-500 golden-color mb-0 text-uppercase">1.6 KM</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6 mb-3 mb-lg-0">
                    <div className="text-center m-auto">
                      <img src="/images/icons/school.svg" className="img-fluid mb-3" />
                      <h3 className="fs-18 fw-400 text-white mb-1">School</h3>
                      <p className="fs-24 fw-500 golden-color mb-0 text-uppercase">1.6 KM</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6 mb-3 mb-lg-0">
                    <div className="text-center m-auto">
                      <img src="/images/icons/nh.svg" className="img-fluid mb-3" />
                      <h3 className="fs-18 fw-400 text-white mb-1">NH 25</h3>
                      <p className="fs-24 fw-500 golden-color mb-0 text-uppercase">1.6 KM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectAdvantages;
