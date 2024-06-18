import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProjectBanner() {
  const bannerSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    centerPadding: '0',
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="project-banner">
        <Slider {...bannerSettings}>
          <div>
            <div
              className="project-banner-img w-100"
              style={{ background: `url(/images/sections/project-banner.jpg)` }}
            ></div>
          </div>
          <div>
            <div
              className="project-banner-img w-100"
              style={{ background: `url(/images/sections/project-banner.jpg)` }}
            ></div>
          </div>
          <div>
            <div
              className="project-banner-img w-100"
              style={{ background: `url(/images/sections/project-banner.jpg)` }}
            ></div>
          </div>
          <div>
            <div
              className="project-banner-img w-100"
              style={{ background: `url(/images/sections/project-banner.jpg)` }}
            ></div>
          </div>
        </Slider>
      </section>
    </>
  );
}

export default ProjectBanner;
