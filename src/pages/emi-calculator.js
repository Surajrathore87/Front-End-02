import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const EmiCalculate = dynamic(import('components/QuickLinks/EmiCalculate'));

export default function defaultPage(props) {
  const { emiData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Ashapurna Buildcon Ltd - EMI Calculator',
        metaDescription: '',
        metaKeywords: 'Emi calculator',
      }} />
      <Breadcrumb pageName={'EMI Calculator'} pageHeading={'EMI Calculator'} />
      {emiData && <EmiCalculate emiData={emiData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    emiData: null,
  }

  res.emiData = await callPostAPI(process.env.EMICALCULATOR_API, {});
  return {
    props: res,
  };
}
defaultPage.propTypes = {
  emiData: PropTypes.object,
}