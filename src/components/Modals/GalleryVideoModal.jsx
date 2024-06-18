import { Modal } from 'react-bootstrap';
import React from 'react';

export default function GalleryVideoModal(props) {
  const { setShowGallery, videoUrl } = props;
  return (
    <>
      <Modal
        contentClassName="bg-transparent border-0"
        show={true}
        centered
        size="lg"
        onHide={setShowGallery}
        backdrop="static"
        keyboard={false}
        className="ps-0"
      >
        <Modal.Body className="p-0 bg-transparent position-relative border-0">
          <span
            onClick={() => setShowGallery(false)}
            className="cursor-pointer position-absolute modal-close-btn top-0 end-0 me-2 mt-2"
          >
            <img src="/images/icons/close-white.svg" width={16} />
          </span>
          <div>
            <iframe
              width="100%"
              height="450"
              src={videoUrl}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
