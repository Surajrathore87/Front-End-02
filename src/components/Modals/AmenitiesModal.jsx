import { Modal } from 'react-bootstrap';
import React from 'react';

export default function AmenitiesModal(props) {
  const { setShowAmenities, amenitiesData, projectImagePath } = props;

  return (
    <>
      <Modal show={true} onHide={setShowAmenities} backdrop="static" keyboard={false} size="xl" centered>
        <Modal.Header closeButton className="border-bottom-0 px-4">
          <Modal.Title className="blue-color fw-500 text-uppercase">Amenities</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <div className="row">
            <div className="row mt-3">
              {amenitiesData.map((item, key) => {
                return (
                  <div className="col-6 col-lg-3 col-xl-2 mb-3 mb-lg-4" key={key}>
                    <div className="amenities d-flex align-items-center justify-content-center p-2">
                      <div className="text-center">
                        <img src={projectImagePath + item.image} height={50} className="mb-lg-3 mb-2" />
                        <h3 className="fw-500 golden-color fs-16 mb-1 text-uppercase">{item.title}</h3>
                        <p className="m-0 fs-15 fw-400 text-uppercase text-color">{item.sub_title}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
