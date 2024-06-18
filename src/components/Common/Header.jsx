import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '_contexts/auth';
import { Button, Navbar, Container, Nav, Offcanvas, Accordion } from 'react-bootstrap';

const HomeEnquiryModal = dynamic(import('components/Modals/HomeEnquiryModal'));
const MobileVerificationModal = dynamic(import('components/Modals/MobileVerificationModal'));
const OtpModal = dynamic(import('components/Modals/OtpModal'), { ssr: false });

export default function Header() {
  const [screenScroll, setScreenScroll] = useState(false);
  const [enquiryModal, setEnquiryModal] = useState(false);
  const [headerPosition, setHeaderPosition] = useState(false);
  const [isDropdownAbout, setIsDropdownAbout] = useState(false);
  const [isDropdownProject, setIsDropdownProject] = useState(false);
  const [userMobile, setUserMobile] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = useRouter();
  const { showVerification, showOtpModal } = useAuth();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeaderPosition(window.scrollY > 76);
    });
    window.addEventListener('scroll', () => {
      setScreenScroll(window.scrollY > 400);
      if (screenScroll) {
        setHeaderPosition(false);
      }
    });
  }, [screenScroll]);

  function openEnqModal() {
    setShow(false);
    setEnquiryModal(true);
  }

  return (
    <>
      {enquiryModal && <HomeEnquiryModal setEnquiryModal={setEnquiryModal} />}
      {showVerification && <MobileVerificationModal userMobile={userMobile} setUserMobile={setUserMobile} />}
      {showOtpModal && <OtpModal userMobile={userMobile} setUserMobile={setUserMobile} />}
      <Button
        className={`text-uppercase enquiryBtnWeb position-fixed ${(screenScroll && 'right-appear') || ''}`}
        onClick={() => setEnquiryModal(true)}
      >
        enquire
      </Button>
      <Navbar
        expand="lg"
        className={`${(headerPosition && 'position-change') || ''} ${
          ((router.pathname == '/[project]/[detail]' || router.pathname == '/ashapurna-nri') &&
            'bg-white header-sticky header-projects') ||
          'bg-white header-sticky header-projects'
        } ${
          (screenScroll && 'position-fixed w-100 start-0 bg-white top-0 header-sticky') ||
          'position-absolute top-0 start-0 end-0 w-100 header-absolute'
        }`}
      >
        <Container>
          <Link href={'/'}>
            <a className="navbar-brand p-0">
              {(router.pathname == '/[project]/[detail]' || router.pathname == '/ashapurna-nri') && (
                <img
                  src={'/images/logo/logo-main.svg'}
                  height={130}
                  className="ashapurna-logo position-absolute top-0 logo-shadow"
                  alt="Ashapurna Logo"
                />
              )}
              {screenScroll && (
                <img
                  src={'/images/logo/logo-main.svg'}
                  height={130}
                  className="ashapurna-logo position-absolute top-0 logo-shadow"
                  alt="Ashapurna Logo"
                />
              )}
              {!screenScroll && router.pathname != '/[project]/[detail]' && router.pathname != '/ashapurna-nri' && (
                <img
                  src={'/images/logo/logo-main.svg'}
                  height={130}
                  className="ashapurna-logo position-absolute top-0 logo-shadow"
                  alt="Ashapurna Logo"
                />
                // <img
                //   src={'/images/logo/logo-transparent.svg'}
                //   height={90}
                //   className="ashapurna-logo position-absolute transparent-logo"
                //   alt="Ashapurna Logo"
                // />
              )}
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
            <Nav className="justify-content-end flex-grow-1 pe-3 pe-lg-0 align-items-center">
              <Link href={'/'}>
                <a className="nav-link fs-16 fw-400">Home</a>
              </Link>
              <div
                className="header-dropdown cursor-pointer position-relative"
                onMouseEnter={() => setIsDropdownAbout(true)}
                onMouseLeave={() => setIsDropdownAbout(false)}
              >
                {/* <Link href={'/aboutus'}> */}
                <a className="nav-link fs-16 fw-400 h-100 w-100">About Us</a>
                {/* </Link> */}
                {isDropdownAbout && (
                  <div className="header-dropdown-menu position-absolute py-3 bg-white">
                    <ul className="list-unstyled m-0">
                      <li onClick={() => setIsDropdownAbout(false)}>
                        <Link href={'/about-us'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">About Us</a>
                        </Link>
                      </li>
                      <li onClick={() => setIsDropdownAbout(false)}>
                        <Link href={'/our-journey'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">Our Journey</a>
                        </Link>
                      </li>
                      <li onClick={() => setIsDropdownAbout(false)}>
                        <Link href={'/management-speaks'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">Management Speaks</a>
                        </Link>
                      </li>
                      <li onClick={() => setIsDropdownAbout(false)}>
                        <Link href={'/our-team'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">Our Team</a>
                        </Link>
                      </li>
                      {/* <li onClick={() => setIsDropdownAbout(false)}>
                        <Link href={'/gallery'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">Gallery</a>
                        </Link>
                      </li> */}
                      <li onClick={() => setIsDropdownAbout(false)}>
                        <Link href={'/csr-social-responsibility'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">CSR Social Responsibility</a>
                        </Link>
                      </li>
                      <li onClick={() => setIsDropdownAbout(false)}>
                        <Link href={'/newsletter'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">Newsletter</a>
                        </Link>
                      </li>
                      <li onClick={() => setIsDropdownAbout(false)}>
                        <Link href={'/nri-corner'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">NRI Corner</a>
                        </Link>
                      </li>
                      <li onClick={() => setIsDropdownAbout(false)}>
                        <Link href={'/why-invest-in-jodhpur'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">Why Invest in Jodhpur?</a>
                        </Link>
                      </li>
                      <li onClick={() => setIsDropdownAbout(false)}>
                        <Link href={'/corporate-profile'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">Corporate Profile</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div
                className="header-dropdown cursor-pointer position-relative"
                onMouseEnter={() => setIsDropdownProject(true)}
                onMouseLeave={() => setIsDropdownProject(false)}
              >
                <a className="nav-link fs-16 fw-400 h-100">Projects</a>
                {isDropdownProject && (
                  <div className="header-dropdown-menu position-absolute py-3 bg-white">
                    <ul className="list-unstyled m-0">
                      <li onClick={() => setIsDropdownProject(false)}>
                        <Link href={'/residential'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">Residential</a>
                        </Link>
                      </li>
                      <li onClick={() => setIsDropdownProject(false)}>
                        <Link href={'/commercial'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">Commercial</a>
                        </Link>
                      </li>
                      <li onClick={() => setIsDropdownProject(false)}>
                        <Link href={'/rental-lease'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">Rental & Lease</a>
                        </Link>
                      </li>
                      <li onClick={() => setIsDropdownProject(false)}>
                        <Link href={'/hospitality'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">Hospitality</a>
                        </Link>
                      </li>
                      <li onClick={() => setIsDropdownProject(false)}>
                        <Link href={'/education'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">Education</a>
                        </Link>
                      </li>
                      <li onClick={() => setIsDropdownProject(false)}>
                        <Link href={'/windmills'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">Windmills</a>
                        </Link>
                      </li>
                      <li onClick={() => setIsDropdownProject(false)}>
                        <Link href={'/residential/ashapurna-nri'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">NRI township</a>
                        </Link>
                      </li>
                      <li onClick={() => setIsDropdownProject(false)}>
                        <Link href={'/upcoming-projects'}>
                          <a className="text-nowrap text-color fs-16 fw-400 d-block">Upcoming Projects</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <Link href={'/media-and-events'}>
                <a className="nav-link fs-16 fw-400">Media and Events</a>
              </Link>
              <a className="nav-link fs-16 fw-400" target={'blank'} href="https://ashapurna.com/blogs/">
                Blogs
              </a>
              <Link href={'/contact-us'}>
                <a className="nav-link fs-16 fw-400">Contact Us</a>
              </Link>

              {!screenScroll && (
                <Button className="text-uppercase enquiryBtn rounded-1 mt-0 ms-4" onClick={() => setEnquiryModal(true)}>
                  enquire
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} className="d-lg-none">
        <Offcanvas.Header closeButton className="align-items-start pb-0">
          <Offcanvas.Title>
            <Link href={'/'}>
              <a className="navbar-brand p-0">
                <Image src={'/images/logo/ashapurna-footer.svg'} width={135} height={87} alt="Ashapurna Logo" />
              </a>
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link href={'/'}>
            <a className="nav-link fs-16 fw-500" onClick={handleClose}>
              Home
            </a>
          </Link>
          <Accordion className="mobiledropdown">
            <Accordion.Item eventKey="0">
              <Accordion.Header>About Us</Accordion.Header>
              <Accordion.Body>
                <Link href={'/about-us'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    About Us
                  </a>
                </Link>
                <Link href={'/our-journey'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    Our Journey
                  </a>
                </Link>
                <Link href={'/management-speaks'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    Management Speaks
                  </a>
                </Link>
                <Link href={'/our-team'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    Our Team
                  </a>
                </Link>
                <Link href={'/gallery'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    Gallery
                  </a>
                </Link>
                <Link href={'/csr-social-responsibility'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    CSR Social Responsibility
                  </a>
                </Link>
                <Link href={'/newsletter'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    Newsletter
                  </a>
                </Link>
                <Link href={'/nri-corner'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    NRI Corner
                  </a>
                </Link>
                <Link href={'/why-invest-in-jodhpur'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    Why Invest in Jodhpur?
                  </a>
                </Link>
                <Link href={'/corporate-profile'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    Corporate Profile
                  </a>
                </Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Projects</Accordion.Header>
              <Accordion.Body>
                <Link href={'/residential'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    Residential
                  </a>
                </Link>
                <Link href={'/commercial'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    Commercial
                  </a>
                </Link>

                <Link href={'/rental-lease'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    Rental & Lease
                  </a>
                </Link>
                <Link href={'/hospitality'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    Hospitality
                  </a>
                </Link>
                <Link href={'/education'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    Education
                  </a>
                </Link>
                <Link href={'/windmills'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    Windmills
                  </a>
                </Link>
                <Link href={'/residential/ashapurna-nri'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    NRI township
                  </a>
                </Link>
                <Link href={'/upcoming-projects'}>
                  <a className="nav-link fs-16 fw-500" onClick={handleClose}>
                    Upcoming Projects
                  </a>
                </Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Link href={'/media-and-events'}>
            <a className="nav-link fs-16 fw-500" onClick={handleClose}>
              Media and Events
            </a>
          </Link>
          <Link href={''}>
            <a className="nav-link fs-16 fw-500" onClick={handleClose}>
              Blogs
            </a>
          </Link>
          <Link href={'/contact-us'}>
            <a className="nav-link fs-16 fw-500" onClick={handleClose}>
              Contact Us
            </a>
          </Link>
          <div className="d-block d-lg-none border-top pt-3 my-2 my-lg-0">
            <p className="text-uppercase golden-color fw-500 fs-18 mb-10">connect</p>
            <p>
              <strong className="me-1">Email:</strong>
              <Link href={'mailto:info@ashapurna.com'}>
                <a className="blue-color" onClick={handleClose}>
                  info@ashapurna.com
                </a>
              </Link>
            </p>
            <p className="mb-1">
              <strong className="me-1">Phone:</strong>
              <Link href={'tel:9876543211'}>
                <a className="blue-color" onClick={handleClose}>
                  +91-9876543211
                </a>
              </Link>
            </p>
          </div>

          <div className="d-block d-lg-none border-top pt-3 mb-3 pb-2 my-lg-0">
            <p className="text-uppercase golden-color fw-500 fs-18 mb-10">social connect</p>
            <div className="d-flex mobile-social-wrapper">
              <span className="social-connect d-flex align-items-center justify-content-center me-2 fs-18">
                <Link href={''} target="_blank">
                  <a onClick={handleClose}>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </Link>
              </span>
              <span className="social-connect d-flex align-items-center justify-content-center me-2 fs-18">
                <Link href={''} target="_blank">
                  <a onClick={handleClose}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </Link>
              </span>
              <span className="social-connect d-flex align-items-center justify-content-center me-2 fs-18">
                <Link href={''} target="_blank">
                  <a onClick={handleClose}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </Link>
              </span>
              <span className="social-connect d-flex align-items-center justify-content-center me-2 fs-18">
                <Link href={''} target="_blank">
                  <a onClick={handleClose}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </Link>
              </span>
              <span className="social-connect d-flex align-items-center justify-content-center me-2 fs-18">
                <Link href={'/contact-us'} target="_blank">
                  <a onClick={handleClose}>
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </Link>
              </span>
            </div>
          </div>
          <Button className="text-uppercase enquiryBtn w-100 rounded-1" onClick={openEnqModal}>
            enquire
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
