import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLongArrowAltLeft, faLongArrowAltRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const EventSidebar = dynamic(import('components/EventSidebar'));
const ProjectSidebar = dynamic(import('components/Common/ProjectSidebar'));

function EventDetails() {
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

  return (
    <>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          '/images/sections/event-highlight1.webp',
          '/images/sections/event-highlight2.webp',
          '/images/sections/event-highlight3.webp',
          '/images/sections/event-highlight4.webp',
          '/images/sections/event-highlight5.webp',
          '/images/sections/event-highlight6.webp',
        ]}
        slide={lightboxController.slide}
      />
      <section className="event-details-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="blue-color-2 fs-35 text-center fw-600 mb-lg-5 mb-4">Ashapurna Events</h1>
            </div>
            <div className="col-lg-8 mb-lg-0 mb-3">
              <div className="event-detail-box bg-white overflow-hidden">
                <div className="event-main-img text-center">
                  <img src="/images/sections/utsav1.webp" alt="Event Image" className="img-fluid" />
                </div>
                <div className="p-lg-4 p-3">
                  <h2 className="blue-color-2 fs-26 fw-600 mb-15">Heritage Carnival Fest: Ashapurna Heritage</h2>
                  <ul className="list-unstyled d-lg-flex">
                    <li className="text-color fs-15 me-lg-3 mb-2">
                      <FontAwesomeIcon width={17} icon={faClock} className="golden-color" />
                      <span className="ps-2">9th Oct 2022</span>
                    </li>
                    <li className="text-color fs-15 me-lg-3 mb-2">
                      <FontAwesomeIcon width={17} icon={faMapMarkerAlt} className="golden-color" />
                      <span className="ps-2">Club heritage of Ashapurna Heritage</span>
                    </li>
                  </ul>
                  <div className="text-color fs-14 lh-24">
                    <p>
                      It was a good evening spent at the Heritage Carnival Fest, celebrated at Club heritage on Sunday.
                      The Carnival was organized for property seekers and investors who are looking to drive their
                      living in a more luxurious way. The Carnival marked the presence of nearly 200+ families, who
                      seems to enjoy and explore the most beautiful project Ashapurna Heritage of Jodhpur.
                    </p>
                    <p>
                      Glances of property carnival fest held on 09 Oct. People explored the residential project Heritage
                      of Ashapurna Buildcon limited to fulfill their curiosity about the luxurious villas, luxuries,
                      amenities, clubhouses, and much more. Various customers visited the fest and got the benefit of
                      attractive schemes proposed by the company in the carnival fest. Carnival fest was one of the most
                      anticipated events of Ashapurna Heritage.
                    </p>
                  </div>
                  <div className="pt-lg-3 pt-2">
                    <h3 className="blue-color-2 fs-22 fw-600 mb-lg-4 mb-3">Highlights</h3>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 mb-lg-4 mb-3">
                        <div className="position-relative overflow-hidden highlight-box">
                          <img src="/images/sections/event-highlight1.webp" alt="Event Image" className="img-fluid" />
                          <div
                            className="position-absolute media-overlay start-0 top-0 end-0 m-auto
                            w-100 h-100 d-flex align-items-center justify-content-center"
                          >
                            <a
                              className="button-golden cursor-pointer fw-500 px-4 py-2 fs-16 w-auto h-auto"
                              onClick={() => openLightboxOnSlide(1)}
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-lg-4 mb-3">
                        <div className="position-relative overflow-hidden highlight-box">
                          <img src="/images/sections/event-highlight2.webp" alt="Event Image" className="img-fluid" />
                          <div
                            className="position-absolute media-overlay start-0 top-0 end-0 m-auto
                            w-100 h-100 d-flex align-items-center justify-content-center"
                          >
                            <a
                              className="button-golden cursor-pointer fw-500 px-4 py-2 fs-16 w-auto h-auto"
                              onClick={() => openLightboxOnSlide(2)}
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-lg-4 mb-3">
                        <div className="position-relative overflow-hidden highlight-box">
                          <img src="/images/sections/event-highlight3.webp" alt="Event Image" className="img-fluid" />
                          <div
                            className="position-absolute media-overlay start-0 top-0 end-0 m-auto
                            w-100 h-100 d-flex align-items-center justify-content-center"
                          >
                            <a
                              className="button-golden cursor-pointer fw-500 px-4 py-2 fs-16 w-auto h-auto"
                              onClick={() => openLightboxOnSlide(3)}
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-lg-4 mb-3">
                        <div className="position-relative overflow-hidden highlight-box">
                          <img src="/images/sections/event-highlight4.webp" alt="Event Image" className="img-fluid" />
                          <div
                            className="position-absolute media-overlay start-0 top-0 end-0 m-auto
                            w-100 h-100 d-flex align-items-center justify-content-center"
                          >
                            <a
                              className="button-golden cursor-pointer fw-500 px-4 py-2 fs-16 w-auto h-auto"
                              onClick={() => openLightboxOnSlide(4)}
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-lg-4 mb-3">
                        <div className="position-relative overflow-hidden highlight-box">
                          <img src="/images/sections/event-highlight5.webp" alt="Event Image" className="img-fluid" />
                          <div
                            className="position-absolute media-overlay start-0 top-0 end-0 m-auto
                            w-100 h-100 d-flex align-items-center justify-content-center"
                          >
                            <a
                              className="button-golden cursor-pointer fw-500 px-4 py-2 fs-16 w-auto h-auto"
                              onClick={() => openLightboxOnSlide(5)}
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-lg-4 mb-3">
                        <div className="position-relative overflow-hidden highlight-box">
                          <img src="/images/sections/event-highlight6.webp" alt="Event Image" className="img-fluid" />
                          <div
                            className="position-absolute media-overlay start-0 top-0 end-0 m-auto
                            w-100 h-100 d-flex align-items-center justify-content-center"
                          >
                            <a
                              className="button-golden cursor-pointer fw-500 px-4 py-2 fs-16 w-auto h-auto"
                              onClick={() => openLightboxOnSlide(6)}
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-4 d-none">
                <Link href={'/media-and-events/events'}>
                  <a className="cursor-pointer media-next-btn d-flex align-items-center golden-color fs-18 fw-500">
                    <FontAwesomeIcon icon={faLongArrowAltLeft} className="me-2" width={16} />
                    <span>Previous</span>
                  </a>
                </Link>
                <Link href={'/media-and-events/events'}>
                  <a className="cursor-pointer media-next-btn d-flex align-items-center golden-color fs-18 fw-500 justify-content-end">
                    <span>Next</span>
                    <FontAwesomeIcon icon={faLongArrowAltRight} className="ms-2" width={16} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <EventSidebar />
              <ProjectSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventDetails;
