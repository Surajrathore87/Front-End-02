import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const MetaData = dynamic(import('components/Common/MetaData'));
const Testimonials = dynamic(import('components/Testimonials'));

export default function testimonials(props) {
  const { testimonialsData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Testimonials | Ashapurna Buildcon',
        metaDescription: 'Testimonials',
        metaKeywords: 'Testimonials',
      }} />
      <Breadcrumb pageName={'Our Resident'} pageHeading={'Our Residents'} />
      {testimonialsData && <Testimonials testimonialsData={testimonialsData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    testimonialsData: null,
  };

  res.testimonialsData = await callPostAPI(process.env.TESTIMONIALS_API, {});

  return {
    props: res,
  };
}

testimonials.propTypes = {
  testimonialsData: PropTypes.object,
}