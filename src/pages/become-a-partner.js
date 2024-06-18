import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const MetaData = dynamic(import('components/Common/MetaData'));
const Partners = dynamic(import('components/Partners'));


export default function BecomePartner(props) {
  const { partnerData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Become A Partner | Ashapurna Buildcon',
        metaDescription: 'Our Partner',
        metaKeywords: 'Partner',
      }} />
      <Breadcrumb pageName={'Become a Partner'} pageHeading={'Become A Partner'} />
      {partnerData && <Partners partnerData={partnerData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    partnerData: null,
  };

  res.partnerData = await callPostAPI(process.env.BECOMEPARTNER_API, {});
  return {
    props: res,
  };
}

BecomePartner.propTypes = {
  partnerData: PropTypes.object,
}