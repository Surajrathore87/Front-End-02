import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const OurNriCorner = dynamic(import('components/Aboutus/OurNriCorner'));

export default function NriCorner(props) {
  const { nriData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Ashapurna Buildcon Ltd - NRI Corner',
        metaDescription: 'View ashapurna buildcons luxury project in Jodhpur with various amenities and facilities in Jodhpur.',
        metaKeywords: 'NRI Corner',
      }} />
      <Breadcrumb pageName={'NRI Corner'} pageHeading={'NRI Corner'} />
      {nriData && <OurNriCorner nriData={nriData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    nriData: null,
  };

  res.nriData = await callPostAPI(process.env.NRICORNER_API, {});

  return {
    props: res,
  };
}

NriCorner.propTypes = {
  nriData: PropTypes.object,
}