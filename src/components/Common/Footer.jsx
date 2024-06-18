import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelopeOpen, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { useAuth } from '_contexts/auth';
import ReactHtmlParser from 'react-html-parser';

export default function Footer() {
  const { configurations, getDisclaimer, getCompanyInfo } = useAuth();
  //console.log(getCompanyInfo);
  return (
    <>
      <div className="bg-light-blue-color pt-50 pb-45">
        <Container>
          <Row>
            <Col xl={4} lg={5} md={6}>
              {getCompanyInfo && (
                <div className="footer-left-wrapper h-100 mb-4 mb-lg-0 position-relative">
                  <Link href={'/'}>
                    <a>
                      <Image
                        src={'/images/logo/logo-transparent.svg'}
                        width={160}
                        height={73}
                        alt={getCompanyInfo.company_name}
                      />
                    </a>
                  </Link>
                  <div className="contact-info ps-2 ps-lg-4">
                    <div className="contactinfo-block d-flex align-items-center mb-3">
                      <div className="contact-icon d-flex justify-content-center align-items-center text-white fs-20 rounded-1">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </div>
                      <div className="fs-16 ms-2">
                        <Link href={'tel:' + getCompanyInfo.company_mobile}>
                          <a className="text-decoration-none fw-400 d-block text-white">
                            {getCompanyInfo.company_mobile}
                          </a>
                        </Link>
                        <Link href={'tel:' + getCompanyInfo.company_mobile_2}>
                          <a className="text-decoration-none d-block fw-400 text-white">
                            {getCompanyInfo.company_mobile_2}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="contactinfo-block d-flex align-items-center mb-3">
                      <div className="contact-icon d-flex justify-content-center align-items-center p-3 text-white rounded-1">
                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                      </div>
                      <div className="fs-16 ms-2 me-lg-4">
                        <Link href={'mailto:' + getCompanyInfo.company_email}>
                          <a className="text-decoration-none fw-400 d-block text-white" target="_blank">
                            {getCompanyInfo.company_email}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="contactinfo-block d-flex align-items-center mb-3">
                      <div className="contact-icon d-flex justify-content-center align-items-center p-3 text-white rounded-1">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                      <div className="fs-16 ms-2 me-lg-4">
                        <Link href={getCompanyInfo.company_map}>
                          <a className="text-decoration-none fw-400 d-block text-white" target="_blank">
                            {getCompanyInfo.company_address}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col xl={8} lg={7} md={6}>
              <div className="footer-right-wrapper ps-2 ps-lg-0 mb-2">
                <h4 className="fw-500 fs-20 text-white position-relative mb-25">Useful Links</h4>
                <div className="d-flex align-item-center flex-wrap mb-25">
                  <div className="usefullinks mb-2">
                    <Link href={'/residential'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">Residental Projects</a>
                    </Link>
                  </div>
                  {/* <div className="usefullinks mb-2">
                    <Link href={'/commercial'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">Commercial projects</a>
                    </Link>
                  </div> */}
                  <div className="usefullinks mb-2">
                    <Link href={'/invester-club'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">Investors Club</a>
                    </Link>
                  </div>
                  <div className="usefullinks mb-2">
                    <Link href={'/nri-corner'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">NRI corner</a>
                    </Link>
                  </div>
                  <div className="usefullinks mb-2">
                    <Link href={'/career'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">Career</a>
                    </Link>
                  </div>
                  <div className="usefullinks mb-2">
                    <Link href={'/become-a-partner'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">Become a Partner</a>
                    </Link>
                  </div>
                  <div className="usefullinks mb-2">
                    <Link href={'/testimonials'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">Our Residents</a>
                    </Link>
                  </div>
                  <div className="usefullinks mb-2">
                    <Link href={'/privacy-policy'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">Privacy Policy</a>
                    </Link>
                  </div>
                  {/* <div className="usefullinks mb-2">
                    <Link href={'/terms-and-conditions'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">Terms & Conditions</a>
                    </Link>
                  </div> */}
                </div>
                <h4 className="fw-500 fs-20 text-white position-relative mb-25">Important Links</h4>
                <div className="d-flex align-item-center flex-wrap">
                  <div className="usefullinks mb-2">
                    <Link href={'/csr-social-responsibility'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">Social Responsibility</a>
                    </Link>
                  </div>
                  <div className="usefullinks mb-2">
                    <Link href={'/corporate-profile'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">Corporate Profile</a>
                    </Link>
                  </div>
                  <div className="usefullinks mb-2">
                    <Link href={'/why-invest-in-jodhpur'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">Why invest in jodhpur?</a>
                    </Link>
                  </div>
                  <div className="usefullinks mb-2">
                    <Link href={'/rera-disclaimer'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">RERA Disclaimer</a>
                    </Link>
                  </div>
                  <div className="usefullinks mb-2">
                    <Link href={'/emi-calculator'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">EMI Calculator</a>
                    </Link>
                  </div>
                  <div className="usefullinks mb-2">
                    <Link href={'/referral-scheme'}>
                      <a className="text-capitalize fw-400 fs-16 light-grey">referral Scheme</a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="divider">
                <hr className="divider-line mx-auto my-0" />
              </div>
            </Col>
          </Row>
          <Row>
            {/* Remove class flex and justify-content-center */}
            {configurations && (
              <Col xl={3} lg={4} md={6} className="mx-auto d-flex justify-content-center">
                {/* Add class in footer-social-wrapper ps-2 ps-lg-4  */}
                <div className="footer-social-wrapper pt-25">
                  {/* Remove class text-center when newsletter enable */}
                  <h4 className="fw-700 fs-20 text-white mb-3 text-center">Follow Us On</h4>
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="social-block d-flex justify-content-center align-items-center me-2">
                      <Link href={configurations.facebook_link}>
                        <a className="blue-color fs-14" title="Facebook" target="_blank">
                          <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                      </Link>
                    </div>
                    <div className="social-block d-flex justify-content-center align-items-center me-2">
                      <Link href={configurations.instagram_link}>
                        <a className="blue-color fs-14" title="Instagram" target="_blank">
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </Link>
                    </div>
                    <div className="social-block d-flex justify-content-center align-items-center me-2">
                      <Link href={configurations.youtube_link}>
                        <a className="blue-color fs-14" title="Youtube" target="_blank">
                          <FontAwesomeIcon icon={faYoutube} />
                        </a>
                      </Link>
                    </div>
                    <div className="social-block d-flex justify-content-center align-items-center me-2">
                      <Link href={configurations.twitter_link}>
                        <a className="blue-color fs-14" title="Twitter" target="_blank">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </Link>
                    </div>
                    <div className="social-block d-flex justify-content-center align-items-center me-2">
                      <Link href={configurations.pinterest_link}>
                        <a className="blue-color fs-14" title="Pinterest" target="_blank">
                          <FontAwesomeIcon icon={faPinterestP} />
                        </a>
                      </Link>
                    </div>
                    <div className="social-block d-flex justify-content-center align-items-center me-2">
                      <Link href={configurations.linkedin_link}>
                        <a className="blue-color fs-14" title="Linkedin" target="_blank">
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            )}
            <Col xl={9} lg={8} md={6} className="d-none">
              <div className="subscribe-wrapper ps-2 ps-lg-0 pt-25 pe-3">
                <div className="border bg-white rounded-2 px-3 py-4">
                  <Row>
                    <Col lg={3}>
                      <div className="subscribe-heading position-relative">
                        <p className="fw-600 blue-color mb-2 mb-lg-0">Get More Update Join Our Newsletter</p>
                      </div>
                    </Col>
                    <Col lg={9}>
                      <div className="subscribe-form">
                        <Form>
                          <InputGroup>
                            <Form.Control
                              type="email"
                              size="lg"
                              name="subscribemail"
                              id="subscribemail"
                              placeholder="Enter Your Email"
                              aria-label="Enter Your Email"
                              className="fs-20 fw-400 rounded-1 inputHolder"
                            />
                            <InputGroup.Text
                              id="subscribemail"
                              className="bg-golden-color cursor-pointer"
                              title="Subscribe Now"
                            >
                              <span className="text-white fs-4">
                                <FontAwesomeIcon icon={faArrowRight} />
                              </span>
                            </InputGroup.Text>
                          </InputGroup>
                        </Form>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-light-golden-color pt-35 pb-20 footer-middle">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center d-flex flex-wrap justify-content-start justify-content-lg-center align-items-center">
                <div className="m-2 text-capitalize footer-links position-relative">
                  <Link href={'/'}>
                    <a className="blue-color-2 fw-400">real estate developer in jodhpur</a>
                  </Link>
                </div>
                <div className="m-2 text-capitalize footer-links position-relative">
                  <Link href={'/'}>
                    <a className="blue-color-2 fw-400">top builders in jodhpur</a>
                  </Link>
                </div>
                <div className="m-2 text-capitalize footer-links position-relative">
                  <Link href={'/residential'}>
                    <a className="blue-color-2 fw-400">top residental projects in jodhpur</a>
                  </Link>
                </div>
                <div className="m-2 text-capitalize footer-links position-relative">
                  <Link href={'/commercial'}>
                    <a className="blue-color-2 fw-400">Commercial property in jodhpur</a>
                  </Link>
                </div>
                <div className="m-2 text-capitalize footer-links position-relative">
                  <Link href={'/flats-in-jodhpur'}>
                    <a className="blue-color-2 fw-400">flats in jodhpur</a>
                  </Link>
                </div>
                <div className="m-2 text-capitalize footer-links position-relative">
                  <Link href={'/villas-in-jodhpur'}>
                    <a className="blue-color-2 fw-400">buy Villa in jodhpur</a>
                  </Link>
                </div>
                <div className="m-2 text-capitalize footer-links position-relative">
                  <Link href={'/plots-in-jodhpur'}>
                    <a className="blue-color-2 fw-400">Plots in jodhpur</a>
                  </Link>
                </div>
                <div className="m-2 text-capitalize footer-links position-relative">
                  <Link href={'/2bhk-flats-in-jodhpur'}>
                    <a className="blue-color-2 fw-400">2BHK Flat in jodhpur</a>
                  </Link>
                </div>
                <div className="m-2 text-capitalize footer-links position-relative">
                  <Link href={''}>
                    <a className="blue-color-2 fw-400">Properties in jodhpur</a>
                  </Link>
                </div>
                <div className="m-2 text-capitalize footer-links position-relative">
                  <Link href={'/jda-property-in-jodhpur'}>
                    <a className="blue-color-2 fw-400">JDA Approved projects in jodhpur</a>
                  </Link>
                </div>
                <div className="m-2 text-capitalize footer-links position-relative">
                  <Link href={'/property-type'}>
                    <a className="blue-color-2 fw-400">property type</a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="divider my-4">
                <hr className="divider-line-2 mx-lg-auto" />
              </div>
            </Col>
            <Col lg={12}>
              <div className="text-lg-center text-start fw-400 blue-color-2 fs-14 px-2 px-lg-5 lh-30 mb-0">
                {getDisclaimer && ReactHtmlParser(getDisclaimer.description)}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-dark-golden-color pt-15 pb-15 copyright">
        <Container>
          <Row>
            <Col md={6}>
              <p className="mb-0 text-black fs-16">Copyright © 2022 Ashapurna Buildcon Limited</p>
            </Col>
            <Col md={6}>
              <p className="mb-0 text-black copyright-company fs-16 text-lg-end">
                Design and Developed by{' '}
                <a className="text-black" href={'https://www.wscubetech.com/'} target="blank">
                  WsCube Tech
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
