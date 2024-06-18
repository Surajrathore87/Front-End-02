import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import dynamic from 'next/dynamic';

const Instagram = dynamic(import('components/Home/Instagram'));
const Media = dynamic(import('components/Home/Media'));
const Testimonials = dynamic(import('components/Home/Testimonials'));
const HomeBanner = dynamic(import('components/Home/HomeBanner'));
const Aboutus = dynamic(import('components/Home/Aboutus'));
const WhyAshapurna = dynamic(import('components/Home/WhyAshapurna'));
const AshapurnaProjects = dynamic(import('components/Home/AshapurnaProjects'));
const AshapurnaBusiness = dynamic(import('components/Home/AshapurnaBusiness'));

export default function Home(props) {
  const { homeData } = props;
  //console.log(homeData);
  return (
    <>
      {homeData && homeData.getSliders && (
        <HomeBanner sliderPath={homeData.slider_image_path} bannerData={homeData.getSliders} />
      )}
      {homeData.aboutUs && homeData.getHomePage && (
        <Aboutus
          aboutusImagePath={homeData.about_us_image_path}
          aboutData={homeData.aboutUs}
          featureImagePath={homeData.home_page_image_path}
          featuresData={homeData.getHomePage}
        />
      )}
      {homeData.getHomePage && homeData.getWhyChooseUs && (
        <WhyAshapurna
          whyusImagePath={homeData.why_choose_us_image_path}
          whyusData={homeData.getHomePage}
          whyusProperty={homeData.getWhyChooseUs}
        />
      )}
      {homeData.getFeaturedProjects && (
        <AshapurnaProjects
          featuredImagePath={homeData.project_image_path}
          featuredProjectData={homeData.getFeaturedProjects}
          getFeaturedData={homeData.getHomePage}
        />
      )}
      {homeData.getProjects && homeData.getProjects.length > 0 && (
        <AshapurnaBusiness
          projectPath={homeData.project_image_path}
          projectsData={homeData.getProjects}
          getProjectOverviewData={homeData.getHomePage}
        />
      )}
      {homeData.getTestimonials && homeData.getTestimonials.length > 0 && (
        <Testimonials
          imagePath={homeData.testimonial_image_path}
          testimonialsData={homeData.getTestimonials}
          getTestimonialData={homeData.getHomePage}
        />
      )}
      {homeData.getUtsavCamps && homeData.getUtsavCamps.length > 0 && (
        <Media eventPath={homeData.utsav_camps_image_path} eventData={homeData.getUtsavCamps} />
      )}
      <Instagram />
    </>
  );
}
