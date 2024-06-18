import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const MetaData = dynamic(import('components/Common/MetaData'));
const OurJourney = dynamic(import('components/Aboutus/OurJourney'));

export default function journey(props) {
  const { journeyData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Ashapurna Buildcon Ltd - Our Journey',
        metaDescription: 'Ashapurna Buildcon Limited is the best real estate in Jodhpur. Check their real estate journey in residential and commercial projects in Jodhpur.',
        metaKeywords: 'Our Journey',
      }} />
      <Breadcrumb pageName={'Our Journey'} pageHeading={'Our Journey'} />
      {journeyData && <OurJourney journeyData={journeyData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    journeyData: null,
  };

  res.journeyData = await callPostAPI(process.env.JOURNEY_API, {});
  return {
    props: res,
  };
}

journey.propTypes = {
  journeyData: PropTypes.object,
}