import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useEffect, useState } from 'react';

export default function Team(props) {
  const { teamData } = props;
  const [directorData, setDirectorData] = useState(null);
  const [chairmanData, setChairmanData] = useState(null);
  useEffect(() => {
    if (teamData && teamData.getOurTeams?.length > 0) {
      setDirectorData(teamData.getOurTeams[0]);
      setChairmanData(teamData.getOurTeams[1]);
    }
  }, [teamData]);
  return (
    <>
      <section className="team-main py-lg-5 py-4">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="team-wrapper mb-60">
                <h1 className="blue-color fs-35 fw-600 text-center mb-25">{teamData.getOurTeamPageContent.title}</h1>
                <div className="teamContent text-color lh-24 fs-14 text-lg-center">
                  {ReactHtmlParser(teamData.getOurTeamPageContent.description)}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {directorData && (
        <section className="team-chairman">
          <Container>
            <Row>
              <Col xxl={4} xl={5} lg={4}>
                <div className="chairman-image d-flex align-items-center justify-content-xl-end h-100 py-4">
                  <img src={teamData.our_team_image_path + directorData.image} className="img-fluid" />
                </div>
              </Col>
              <Col xxl={8} xl={7} lg={8}>
                <div className="teamChairman-inner">
                  <div className="d-flex align-items-center">
                    <div className="chairmanMain-wrapper">
                      <h2 className="text-white fw-600 text-capitalize mb-0 lh-60 fs-30">{directorData.name}</h2>
                      <h3 className="golden-color mt-0 lh-40 fw-500 fs-26 mb-15 text-capitalize">
                        {directorData.position}
                      </h3>
                      <p className="text-white lh-24 fs-14 line-clamp-4">{directorData.description}</p>
                      <span className="d-block mt-4">
                        <Link href={'/management-speaks'}>
                          <a className="button-golden w-max-content ms-0 px-4 fs-16">Read More</a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {chairmanData && (
        <section className="team-director mb-60">
          <Container>
            <Row>
              <Col xl={6} lg={8}>
                <div className="teamDirector-inner">
                  <div className="d-flex align-items-center">
                    <div className="directorMain-wrapper">
                      <h2 className="text-white fw-600 text-capitalize fs-30 mb-0 lh-60">{chairmanData.name}</h2>
                      <h3 className="light-blue-color mt-0 lh-40 fs-26 fw-500 mb-15 text-capitalize">
                        {chairmanData.position}
                      </h3>
                      <p className="text-white lh-24 fs-14 line-clamp-4">{chairmanData.description}</p>
                      <span className="d-block mt-4">
                        <Link href={'/management-speaks'}>
                          <a className="button-light-blue w-max-content ms-0 px-4 fs-16">Read More</a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={4}>
                <div className="chairman-image d-flex align-items-center h-100 py-4">
                  <img src={teamData.our_team_image_path + chairmanData.image} className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
}
