import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

function EventSidebar(props) {
  const { recentEventData } = props;
  return (
    <>
      <div className="event-sidebar p-lg-4 pt-lg-0 position-relative overflow-hidden mb-lg-4 mb-3">
        <h2 className="blue-color-2 fs-22 fw-600 mb-3 mb-lg-4 position-relative">Recent Events</h2>
        <ul className="list-unstyled m-0">
          {recentEventData &&
            recentEventData.map((item, key) => {
              return (
                <li className="mb-lg-3 mb-2 d-flex align-items-baseline" key={key}>
                  <FontAwesomeIcon icon={faArrowRight} className="me-3 golden-color fs-16" width={17} />
                  <Link href={'/media-and-events/' + item.slug}>
                    <a className="cursor-pointer blue-color fs-500 fs-16 lh-30">{item.title}</a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default EventSidebar;
