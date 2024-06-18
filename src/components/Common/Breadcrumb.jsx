import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

export default function Breadcrumb(props) {
  const { pageName, pageHeading } = props;
  return (
    <>
      <section className="breadcrumb-main position-relative">
        <Container fluid>
          <Row>
            <Col lg={12} className="px-0">
              <div className="d-flex justify-content-center h-100 align-items-center">
                <div className="breadcrumbContent">
                  <div className="d-flex align-items-center justify-content-center text-uppercase text-white fs-19 mb-10">
                    <span className="">
                      <Link href={'/'}>
                        <a className="text-white">Home</a>
                      </Link>
                    </span>
                    <span className="mx-1 fs-16">/</span>
                    <span>{pageName}</span>
                  </div>
                  <h2 className="golden-color fw-700 fs-35 text-center text-capitalize">{pageHeading}</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
