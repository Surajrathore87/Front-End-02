import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

function ProjectSidebar(props) {
  const { upcomingProjectsData } = props;
  console.log(upcomingProjectsData);
  return (
    <>
      <div className="event-sidebar p-lg-4 pt-lg-0 position-relative overflow-hidden mb-lg-4 mb-3">
        <h2 className="blue-color-2 fs-22 fw-600 mb-3 mb-lg-4 position-relative">Upcoming Projects</h2>
        <ul className="list-unstyled m-0">
          <li className="mb-lg-3 mb-2 d-flex align-items-baseline">
            <FontAwesomeIcon icon={faArrowRight} className="me-3 golden-color fs-16" width={17} />
            <Link href={'/residential/ashapurna-anmol'}>
              <a className="cursor-pointer blue-color fs-500 fs-16 lh-30">Ashapruna Anmol</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProjectSidebar;
