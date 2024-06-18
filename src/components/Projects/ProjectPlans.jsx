import dynamic from 'next/dynamic';
import React from 'react';
import { Nav, Tab } from 'react-bootstrap';

const PlansSlider = dynamic(import('components/Projects/PlansSlider'));

function ProjectDetails() {
  return (
    <>
      <section className="master-plan-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="py-lg-4 pe-lg-4">
                <h2 className="fw-600 fs-40 golden-color position-relative py-2 mb-3">Master Plan</h2>
                <p className="fs-20 fw-400 lh-30 text-white">
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                  visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
                  as a placeholder before final copy is available.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="master-plan-img p-3 p-lg-4 mb-3 mb-lg-0 text-center">
                <img src="/images/sections/master-plan.png" alt="Master Plan" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="floor-plan-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="fw-600 fs-40 blue-color mb-3">Floor Plan</h2>
              <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="one">
                  <div className="project-plan-tabbing">
                    <Nav className="floor-tabs text-center d-block">
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fs-20 fw-400 text-decoration-none d-flex align-items-center px-2"
                          eventKey="one"
                        >
                          Sadan (30x60)
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fs-20 fw-400 text-decoration-none d-flex align-items-center px-2"
                          eventKey="two"
                        >
                          Niwas (25x50)
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fs-20 fw-400 text-decoration-none d-flex align-items-center px-2"
                          eventKey="three"
                        >
                          Niwas (25x45)
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fs-20 fw-400 text-decoration-none d-flex align-items-center px-2"
                          eventKey="four"
                        >
                          Aawas (20x45)
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fs-20 fw-400 text-decoration-none d-flex align-items-center px-2"
                          eventKey="five"
                        >
                          Platinum (25x50)
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <Tab.Content className="py-3">
                    <Tab.Pane eventKey="one">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/sections/floor-plan.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/sections/floor-plan.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="two">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/sections/floor-plan.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/sections/floor-plan.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="three">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/sections/floor-plan.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/sections/floor-plan.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/sections/floor-plan.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/sections/floor-plan.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="five">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/sections/floor-plan.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/sections/floor-plan.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetails;
