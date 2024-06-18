import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import FsLightbox from 'fslightbox-react';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic';

const GalleryVideoModal = dynamic(import('components/Modals/GalleryVideoModal'));

function Gallery() {
  const [showGallery, setShowGallery] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  const eventData = [
    {
      image: '/images/projects/mediaevent1.jpg',
      title: 'Celebrating 25 Glorious Years',
      link: 'https://www.youtube.com/embed/atXxjCYDTzY',
    },
    {
      image: '/images/projects/mediaevent2.jpg',
      title: '25 Glorious Years of Our Relation',
      link: 'https://www.youtube.com/embed/h8Yf3nc23fU',
    },
    {
      image: '/images/projects/mediaevent3.jpg',
      title: 'Diwali Sneh Milan Program',
      link: 'https://www.youtube.com/embed/FryjwtMnnXc',
    },
    {
      image: '/images/projects/mediaevent5.jpg',
      title: 'Taste of Excellence & Grace',
      link: 'https://www.youtube.com/embed/EXvlqEyQioA',
    },
  ];

  function toggleVideo(link) {
    setShowGallery(true);
    setVideoUrl(link);
  }

  return (
    <>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          '/images/gallery/gallery8.webp',
          '/images/gallery/gallery7.webp',
          '/images/gallery/gallery6.webp',
          '/images/gallery/gallery5.webp',
          '/images/gallery/gallery4.webp',
          '/images/gallery/gallery3.webp',
          '/images/gallery/gallery2.webp',
          '/images/gallery/gallery1.webp',
        ]}
        slide={lightboxController.slide}
      />
      {/* Image Gallery */}
      <section className="gallery-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="gallery-heading mb-30">
                <h1 className="fw-600 fs-40 blue-color mb-0 text-center lh-40">Our Photo Gallery</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/gallery/gallery8.webp'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(1)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/gallery/gallery7.webp'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(2)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/gallery/gallery6.webp'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(3)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/gallery/gallery5.webp'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(4)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/gallery/gallery4.webp'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(5)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/gallery/gallery3.webp'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(6)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/gallery/gallery2.webp'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(7)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/gallery/gallery1.webp'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(8)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Video Gallery */}
      <section className="galleryvideo-section bg-light-golden-color">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="video-heading text-center">
                <h2 className="fw-600 fs-40 mb-30 blue-color">Our Video Gallery</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {eventData &&
              eventData.map((item, key) => {
                return (
                  <Col lg={4} md={6} key={key}>
                    <div className="video-block bg-white p-2 mt-3 mt-lg-4">
                      <div className="video-thumbnail position-relative d-flex align-items-center justify-content-center">
                        <Image src={item.image} width={640} height={427} alt={item.title} />
                        <div className="video-overlay position-absolute w-100 h-100 top-0 start-0"></div>
                        <div
                          className="iconLayer-2 cursor-pointer position-absolute fs-22 d-flex start-0 align-items-center justify-content-center"
                          onClick={() => toggleVideo(item.link)}
                        >
                          <a className="youtube-color" title={item.title}>
                            <FontAwesomeIcon icon={faYoutube} />
                          </a>
                        </div>
                      </div>
                      <div className="video-content mt-3 mb-2 ps-2">
                        <h3
                          className="fw-500 mb-0 text-uppercase fs-20 text-center cursor-pointer"
                          onClick={() => toggleVideo(item.link)}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </section>
      {/* Video Modal */}
      {showGallery && <GalleryVideoModal videoUrl={videoUrl} setShowGallery={setShowGallery} />}
    </>
  );
}

export default Gallery;
