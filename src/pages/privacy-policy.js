import MetaData from "components/Common/MetaData";
import dynamic from "next/dynamic"
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const PrivacyPolicy = dynamic(import('components/QuickLinks/PrivacyPolicy'));

export default function defaultPage(props) {
  const { privacyData } = props;
  //console.log(privacyData);
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Ashapurna Buildcon Ltd - Privacy Policy',
        metaDescription: 'The right clients, at the right price, anytime you want.',
        metaKeywords: 'privacy policy'
      }} />
      <Breadcrumb pageName={'Privacy Policy'} pageHeading={'Privacy Policy'} />
      {privacyData && <PrivacyPolicy privacyData={privacyData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    privacyData: null,
  };

  res.privacyData = await callPostAPI(process.env.PRIVACY_POLICY_API, {});

  return {
    props: res,
  };
}

defaultPage.propTypes = {
  privacyData: PropTypes.object,
};