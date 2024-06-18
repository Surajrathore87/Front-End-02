import { faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Projects(props) {
  const { projectCategoryData, projectListingData } = props;
  const router = useRouter();

  return (
    <>
      <section className="projects-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h1 className="fs-35 fw-600 blue-color mb-30">
                  {projectListingData &&
                    projectListingData.getNewlaunchs?.length > 0 &&
                    projectListingData.getNewlaunchs.slice(0, 1).map((item) => item.category.name + ' ')}
                  Projects
                </h1>
              </div>
              <div className="projects-nav py-lg-3">
                <ul className="list-unstyled text-center">
                  {projectCategoryData.getCategories &&
                    projectCategoryData.getCategories.map((item, key) => {
                      return (
                        <li className="mb-lg-3 mx-2 d-inline-block" key={key}>
                          <Link href={'/' + item.slug}>
                            <a
                              className={`text-decoration-none text-color d-flex align-items-center px-2 fs-15 ${
                                ('/' + item.slug == router.asPath && 'active') || ''
                              }`}
                            >
                              {item.name}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
          {projectListingData && projectListingData.getNewlaunchs?.length > 0 && (
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center py-lg-4 d-none">
                  <h2 className="blue-color-2 fs-40 fw-600 mb-20">New Launch</h2>
                </div>
                <div className="row">
                  {projectListingData.getNewlaunchs.map((item, key) => (
                    <div className="col-xl-4 col-md-6 mb-lg-5 mb-4" key={key}>
                      <div className="our-project-card p-2 bg-white shadow rounded position-relative">
                        <img
                          src={projectListingData.project_image_path + item.project_logo_2}
                          className="img-fluid position-absolute buisness-logo"
                          height={50}
                        />
                        <div className="img-box">
                          <img
                            src={projectListingData.project_image_path + item.project_logo_1}
                            alt={item.name}
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="position-absolute bg-white shadow-sm project-card-inner rounded text-start">
                          <h3 className="fs-18 fw-500 mb-1">
                            <Link href={item.category.slug + '/' + item.slug}>
                              <a className="light-blue-color">{item.name}</a>
                            </Link>
                          </h3>
                          <p className="fs-14 m-0 p-0">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 blue-color" width={16} height={16} />
                            {item.address}
                          </p>
                          <div className="fs-14 d-flex align-items-center justify-content-between project-inner-bottom">
                            {item.current_status && (
                              <span>
                                <FontAwesomeIcon icon={faHome} className="me-1 blue-color" width={16} height={16} />
                                {item.current_status}
                              </span>
                            )}
                            <Link href={item.category.slug + '/' + item.slug}>
                              <a className="project-tag fs-13 cursor-pointer">See All</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {projectListingData && projectListingData.getResidentialTownships?.length > 0 && (
        <section className="townships-section py-4 py-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center py-lg-4">
                  <h2 className="blue-color-2 fs-40 fw-600 mb-20">Residential Townships</h2>
                </div>
              </div>
            </div>

            <div className="row">
              {projectListingData.getResidentialTownships.map((item, key) => (
                <div className="col-xl-4 col-md-6 mb-lg-5 mb-4" key={key}>
                  <div className="our-project-card p-2 bg-white shadow rounded position-relative">
                    <img
                      src={projectListingData.project_image_path + item.project_logo_2}
                      className="img-fluid position-absolute buisness-logo"
                      height={50}
                    />
                    <div className="img-box">
                      <img
                        src={projectListingData.project_image_path + item.project_logo_1}
                        alt={item.name}
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="position-absolute bg-white shadow-sm project-card-inner rounded text-start">
                      <p className="fs-18 fw-500 mb-1">{item.name}</p>
                      <p className="fs-14 m-0 p-0">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 blue-color" width={16} height={16} />
                        {item.address}
                      </p>
                      <div className="fs-14 d-flex align-items-center justify-content-between project-inner-bottom">
                        <span>
                          <FontAwesomeIcon icon={faHome} className="me-1 blue-color" width={16} height={16} />
                          {item.current_status}
                        </span>
                        <Link href={item.category.slug + '/' + item.slug}>
                          <a className="project-tag fs-13 cursor-pointer">See All</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {projectListingData && projectListingData.getResidentialFlats?.length > 0 && (
        <section className="py-lg-5">
          <Container>
            <Row>
              <div className="col-lg-12">
                <div className="text-center py-lg-4">
                  <h2 className="blue-color-2 fs-40 fw-600 mb-20">Residential Flats</h2>
                </div>
                <div className="row">
                  {projectListingData.getResidentialFlats.map((item, key) => (
                    <div className="col-xl-4 col-md-6 mb-lg-5 mb-4" key={key}>
                      <div className="our-project-card p-2 bg-white shadow rounded position-relative">
                        <img
                          src={projectListingData.project_image_path + item.project_logo_2}
                          className="img-fluid position-absolute buisness-logo"
                          height={50}
                        />
                        <div className="img-box">
                          <img
                            src={projectListingData.project_image_path + item.project_logo_1}
                            alt={item.name}
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="position-absolute bg-white shadow-sm project-card-inner rounded text-start">
                          <p className="fs-18 fw-500 mb-1">{item.name}</p>
                          <p className="fs-14 m-0 p-0">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 blue-color" width={16} height={16} />
                            {item.address}
                          </p>
                          <div className="fs-14 d-flex align-items-center justify-content-between project-inner-bottom">
                            <span>
                              <FontAwesomeIcon icon={faHome} className="me-1 blue-color" width={16} height={16} />
                              {item.current_status}
                            </span>
                            <Link href={item.category.slug + '/' + item.slug}>
                              <a className="project-tag fs-13 cursor-pointer">See All</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
}

export default Projects;
