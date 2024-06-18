import MetaData from "components/Common/MetaData";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const TermsAndConditions = dynamic(import('components/QuickLinks/TermsAndConditions'));

export default function defaultPage(props) {
  const { termsData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Terms and Conditions | Ashapurna Buildcon',
        metaDescription: '',
        metaKeywords: ''
      }} />
      <Breadcrumb pageName={'Terms And Conditions'} pageHeading={'Terms And Conditions'} />
      {termsData && <TermsAndConditions termsData={termsData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    termsData: null,
  };

  res.termsData = await callPostAPI(process.env.TERMS_CONDITIONS_API, {});
  return {
    props: res,
  };
}

defaultPage.propTypes = {
  termsData: PropTypes.object,
};