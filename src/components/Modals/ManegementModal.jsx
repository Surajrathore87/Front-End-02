import { Card, Modal } from 'react-bootstrap';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function ManegementModal(props) {
  const { setShowModal, readMoreData } = props;
  console.log(readMoreData);
  return (
    <>
      <Modal show={true} onHide={setShowModal} backdrop="static" centered keyboard={false} size="lg" className="ps-0">
        <Modal.Header closeButton className="pb-0 pt-3 pe-4 border-0"></Modal.Header>
        <Modal.Body className="p-0 position-relative border-0">
          <Card className="p-4 pt-0 border-0">
            <Card.Body className="p-0">
              <div>
                <span className="fs-15 golden-color fw-500 text-uppercase subtitle position-relative pe-2">
                  {readMoreData.position}
                </span>
                <h3 className="fs-22 blue-color fw-600 mb-2 mt-1">{readMoreData.name}</h3>
                <div className="fs-14 lh-24 text-color mt-2 mb-0">{ReactHtmlParser(readMoreData.description)}</div>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}
