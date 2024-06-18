import dynamic from 'next/dynamic';
import React from 'react';
import { useState } from 'react';

const AmenitiesModal = dynamic(import('components/Modals/AmenitiesModal'));

function ProjectOverview() {
  const [showAmenities, setShowAmenities] = useState();
  return (
    <>
      {showAmenities && <AmenitiesModal setShowAmenities={setShowAmenities} />}
      <div className="detail-overview pe-lg-5">
        <div>
          <h2 className="fs-40 fw-600 blue-color position-relative py-lg-3 py-2 my-lg-3">Project Overview</h2>
          <p className="text-color fs-16 fw-400 lh-30 mb-3">
            Ashapurna Township Pachpadra is the address of a life that welcomes you with all modernity and grandeur. The
            imposing gate of the township gives a sense of luxury to its visitors. The township houses everything that
            makes life comfortable and luxurious. Ashapura Township Pachpadra is a complete world in itself where life
            experiences a new joy everyday. The township is not a fresh beginning in Pachpadra only but it’s also the
            dawn of a new era in Barmer as a whole.
          </p>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="fs-40 fw-600 blue-color position-relative py-lg-3 py-2 mb-lg-3 mt-lg-2">Amenities</h2>
            <a
              href="#"
              className="text-decoration-none text-white d-flex align-items-center justify-content-center fs-16 fw-500 brochure-btn2"
            >
              <img
                src="/images/icons/download-icon-gold.svg"
                width={15}
                height={10}
                alt="Download"
                className="img-fluid me-2 arrow-gold d-none"
              />
              <img
                src="/images/icons/download-icon-white.svg"
                width={15}
                height={10}
                alt="Download"
                className="img-fluid me-2 arrow-white"
              />
              E-Brochure
            </a>
          </div>
          <div className="row mt-3">
            <div className="col-6 col-lg-4 col-xl-3 mb-3 mb-lg-4">
              <div className="amenities d-flex align-items-center justify-content-center p-2">
                <div className="text-center">
                  <img src="/images/icons/cctv.svg" height={50} className="img-fluid mb-lg-3 mb-2" />
                  <h3 className="fw-500 golden-color fs-22 m-0">CCTV</h3>
                  <p className="m-0 fs-20 fw-400 text-color">Hitech Security</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3 mb-3 mb-lg-4">
              <div className="amenities d-flex align-items-center justify-content-center p-2">
                <div className="text-center">
                  <img src="/images/icons/community.svg" height={50} className="img-fluid mb-lg-3 mb-2" />
                  <h3 className="fw-500 golden-color fs-22 m-0">COMMUNITY</h3>
                  <p className="m-0 fs-20 fw-400 text-color">Hall</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3 mb-3 mb-lg-4">
              <div className="amenities d-flex align-items-center justify-content-center p-2">
                <div className="text-center">
                  <img src="/images/icons/gated.svg" height={50} className="img-fluid mb-lg-3 mb-2" />
                  <h3 className="fw-500 golden-color fs-22 m-0">GATED</h3>
                  <p className="m-0 fs-20 fw-400 text-color">TOWNSHIP</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3 mb-3 mb-lg-4">
              <div className="amenities d-flex align-items-center justify-content-center p-2">
                <div className="text-center">
                  <img src="/images/icons/kidplay.svg" height={50} className="img-fluid mb-lg-3 mb-2" />
                  <h3 className="fw-500 golden-color fs-22 m-0">KID&apos;s PLAY</h3>
                  <p className="m-0 fs-20 fw-400 text-color">Area</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3 mb-3 mb-lg-4">
              <div className="amenities d-flex align-items-center justify-content-center p-2">
                <div className="text-center">
                  <img src="/images/icons/temple.svg" height={50} className="img-fluid mb-lg-3 mb-2" />
                  <h3 className="fw-500 golden-color fs-22 m-0">TEMPLE</h3>
                  <p className="m-0 fs-20 fw-400 text-color">AREA</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3 mb-3 mb-lg-4">
              <div className="amenities d-flex align-items-center justify-content-center p-2">
                <div className="text-center">
                  <img src="/images/icons/vollyball.svg" height={50} className="img-fluid mb-lg-3 mb-2" />
                  <h3 className="fw-500 golden-color fs-22 m-0">VOLLYBALL</h3>
                  <p className="m-0 fs-20 fw-400 text-color">GROUND</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3 mb-3 mb-lg-4">
              <div className="amenities d-flex align-items-center justify-content-center p-2">
                <div className="text-center">
                  <img src="/images/icons/basketball.svg" height={50} className="img-fluid mb-lg-3 mb-2" />
                  <h3 className="fw-500 golden-color fs-22 m-0">BASKETBALL</h3>
                  <p className="m-0 fs-20 fw-400 text-color">GROUND</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-4 col-xl-3 mb-3 mb-lg-4">
              <div
                className="amenities amenities-more d-flex align-items-center justify-content-center p-2"
                onClick={() => setShowAmenities(true)}
                title="View All"
              >
                <div className="text-center">
                  <img src="/images/icons/ellips.svg" height={50} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectOverview;
