import dynamic from "next/dynamic"
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const ReferralScheme = dynamic(import('components/QuickLinks/ReferralScheme'));

export default function defaultPage(props) {
  const { referralData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Ashapurna Buildcon Ltd - Referral Scheme',
        metaDescription: '',
        metaKeywords: 'Referral Scheme'
      }} />
      <Breadcrumb pageName={'Referral Scheme'} pageHeading={'Referral Scheme'} />
      {referralData && <ReferralScheme referralData={referralData.data} />}
    </>
  )
}
export async function getServerSideProps() {
  const res = {
    referralData: null,
  };

  res.referralData = await callPostAPI(process.env.REFERRAL_API, {});

  return {
    props: res,
  };
}

defaultPage.propTypes = {
  referralData: PropTypes.object,
}