import { Card, Modal } from 'react-bootstrap';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function CsrContentModal(props) {
  const { setShowMore, readMoreData, imageBasePAth } = props;
  //console.log(imageBasePAth);
  return (
    <>
      <Modal show={true} onHide={setShowMore} backdrop="static" keyboard={false} className="ps-0">
        <Modal.Header closeButton className="pb-0 pt-3 pe-4 border-0"></Modal.Header>
        <Modal.Body className="p-0 position-relative border-0">
          <Card className="p-4 border-0">
            <Card.Img variant="top" src={imageBasePAth + readMoreData.image} className="img-fluid mb-4" />
            <Card.Body className="p-0">
              <Card.Text>
                <div className="block-csrContent">
                  <h4 className="light-blue-color text-capitalize fw-500">{readMoreData.tagline}</h4>
                  <h6 className="golden-color fw-400 mb-10">{readMoreData.title}</h6>
                  <p className="text-color lh-30">{ReactHtmlParser(readMoreData.description)}</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}
