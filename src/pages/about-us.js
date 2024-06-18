import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const AboutUs = dynamic(import('components/Aboutus/AboutUs'));

export default function About(props) {
  const { aboutData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'About Us - Properties in Jodhpur | Ashapurna Buildcon',
        metaDescription: 'Buy independent houses, villas, flats and residential properties in Jodhpur at best prices. Ashapurna provides the best property with complete modern amenities.',
        metaKeywords: 'about us',
      }} />
      <Breadcrumb pageName={'About Us'} pageHeading={'About Us'} />
      {aboutData && <AboutUs aboutData={aboutData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    aboutData: null,
  };

  res.aboutData = await callPostAPI(process.env.ABOUTUS_API, {});

  return {
    props: res,
  };
}

About.propTypes = {
  aboutData: PropTypes.object,
}