import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

export default function CorporateProfile() {
  return (
    <>
      <section className="corporateProfile-main">
        <Container>
          <Row>
            <Col lg={8} md={8}>
              <div className="corporate-top">
                <h1 className="blue-color fw-600 fs-35 mb-15 text-capitalize">Who we are?</h1>
                <div className="text-color lh-24 fs-14">
                  <p>
                    Ashapurna Group has been a leader in the Real Estate industry since almost 25 years. From changing
                    skylines to ensuring inspiration and innovation in every project, their vision is guided by
                    determination & hard work. In every residential to commercial project, the team has always been
                    undeterred by obstacles & progressive in outlook.
                  </p>
                  <p>
                    We maintain the legacy of innovation in construction and continue to oddd new milestones, every
                    year. Blending expertise with an environment-friendly approach, the Ashapurna Group reinforces
                    cost-effective offerings, while implementing the latest technology in our projects, ensuring
                    complete customer satisfaction.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className="d-flex w-100 h-100 align-items-center">
                <Image
                  src={'/images/sections/corportate-profile.png'}
                  width={365}
                  height={286}
                  alt={'Corporate Profile'}
                />
              </div>
            </Col>
            <Col lg={12} className="d-none">
              <div className="corporate-heading text-center">
                <h2 className="blue-color fw-600 fs-35">How we work</h2>
                <p className="text-color lh-24 fs-14 mx-auto">
                  We Are A Creative Agency Located In Sydney, Australia. It Is A Long Established Fact That A Reader
                  Will Be Distracted By The Readable Content.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} className="d-none">
              <div className="corporate-left mb-4 mb-lg-4">
                <div className="corporateLeft-blocks d-flex align-items-start flex-wrap flex-lg-nowrap gap-2 p-3 shadow-sm">
                  <div className="corporate-icon me-2">
                    <Image src={'/images/icons/happy.png'} width={50} height={50} alt="Icon" />
                  </div>
                  <div className="corporateIcon-content cursor-pointer">
                    <h3 className="fs-24 light-blue-color text-capitalize">Creative Design</h3>
                    <p className="text-color lh-30 mb-0">
                      Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper
                      tellus. Cras porttitor massa.
                    </p>
                  </div>
                </div>
              </div>
              <div className="corporate-left mb-4 mb-lg-4">
                <div className="corporateLeft-blocks d-flex align-items-start flex-wrap flex-lg-nowrap gap-2 p-3 shadow-sm">
                  <div className="corporate-icon me-2">
                    <Image src={'/images/icons/happy.png'} width={50} height={50} alt="Icon" />
                  </div>
                  <div className="corporateIcon-content cursor-pointer">
                    <h3 className="fs-24 light-blue-color text-capitalize">Creative Design</h3>
                    <p className="text-color lh-30 mb-0">
                      Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper
                      tellus. Cras porttitor massa.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} className="d-none">
              <div className="corporate-left mb-4 mb-lg-4">
                <div className="corporateLeft-blocks d-flex align-items-start flex-wrap flex-lg-nowrap gap-2 p-3 shadow-sm">
                  <div className="corporate-icon me-2">
                    <Image src={'/images/icons/happy.png'} width={50} height={50} alt="Icon" />
                  </div>
                  <div className="corporateIcon-content cursor-pointer">
                    <h3 className="fs-24 light-blue-color text-capitalize">Creative Design</h3>
                    <p className="text-color lh-30 mb-0">
                      Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper
                      tellus. Cras porttitor massa.
                    </p>
                  </div>
                </div>
              </div>
              <div className="corporate-left mb-4 mb-lg-4">
                <div className="corporateLeft-blocks d-flex align-items-start flex-wrap flex-lg-nowrap gap-2 p-3 shadow-sm">
                  <div className="corporate-icon me-2">
                    <Image src={'/images/icons/happy.png'} width={50} height={50} alt="Icon" />
                  </div>
                  <div className="corporateIcon-content cursor-pointer">
                    <h3 className="fs-24 light-blue-color text-capitalize">Creative Design</h3>
                    <p className="text-color lh-30 mb-0">
                      Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper
                      tellus. Cras porttitor massa.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="corporateProfile-full">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="corporatefull-wrapper d-flex align-items-center justify-content-center">
                <div>
                  <h2 className="light-blue-color fw-500 fs-35 text-center text-uppercase mb-20">
                    We{"'"}ve got plenty more to say
                  </h2>
                  <Link href={'/contact-us'}>
                    <a className="outline-button fs-17">Lets Talk</a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="corporateProfile-bottom">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="ourProfile text-center">
                <h2 className="fs-35 fw-600 blue-color mb-15">Our Portfolio</h2>
                <p className="text-color lh-24 fs-14 mx-auto">
                  Growth in Ashapurna projects has touched a new high by fetching investors a return of up to 100 times.
                  Out of 35 projects, 32 have already been delivered. Even in the times of economics and political
                  turmoil, Ashapurna projects have proven their mettle by delivering the best value on every rupee sent.
                  All Ashapurna projects are RERA registered and approved by appropriate competent authorities. The
                  group offers transparent deals in finance facilities from all leading banks with active pre and
                  post-sales assistances. In the real estate investment domain, Ashapurna is considered to be a
                  landmark.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6}>
              <div className="projects-wrapper border rounded-2 mt-3 mt-lg-4 shadow-sm pb-2 bg-white">
                <div className="text-center position-relative px-3 pt-3">
                  <Image src={'/images/sections/ashapurna-nri.webp'} width={460} height={480} alt={'Ashapurna NRI'} />
                  <div className="projectHeading">
                    <h3 className="ps-1 text-start my-2 fs-20">
                      <Link href={'/residential/ashapurna-nri'}>
                        <a className="fw-600">Ashapurna NRI</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6}>
              <div className="projects-wrapper border rounded-2 mt-3 mt-lg-4 shadow-sm pb-2 bg-white">
                <div className="text-center position-relative px-3 pt-3">
                  <Image
                    src={'/images/sections/ashapurna-heritage.webp'}
                    width={460}
                    height={480}
                    alt={'Ashapurna Heritage'}
                  />
                  <div className="projectHeading">
                    <h3 className="ps-1 text-start my-2 fs-20">
                      <Link href={'/residential/ashapurna-heritage'}>
                        <a className="fw-600">Ashapurna Heritage</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6}>
              <div className="projects-wrapper border rounded-2 mt-3 mt-lg-4 shadow-sm pb-2 bg-white">
                <div className="text-center position-relative px-3 pt-3">
                  <Image
                    src={'/images/sections/ashapurna-anmol.webp'}
                    width={460}
                    height={480}
                    alt={'Ashapurna Anmol'}
                  />
                  <div className="projectHeading">
                    <h3 className="ps-1 text-start my-2 fs-20">
                      <Link href={'/residential/ashapurna-anmol'}>
                        <a className="fw-600">Ashapurna Anmol</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
