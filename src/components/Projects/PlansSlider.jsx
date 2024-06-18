import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dynamic from 'next/dynamic';
import { useAuth } from '_contexts/auth';

const VerificationBox = dynamic(import('components/Projects/VerificationBox'));

function PlansSlider(props) {
  const { imageSrc } = props;
  const { isVerified } = useAuth();
  const projectsSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    focusOnSelect: true,
    centerPadding: '15px',
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...projectsSettings} className="my-4">
        {imageSrc &&
          imageSrc.map((item, key) => (
            <div className="master-plan-img p-3 p-lg-4 text-center w-100" key={key}>
              <img src={item.imageSrc} alt="Master Plan" className="img-fluid m-auto" />
              {!isVerified && <VerificationBox />}
            </div>
          ))}
      </Slider>
    </>
  );
}

export default PlansSlider;
