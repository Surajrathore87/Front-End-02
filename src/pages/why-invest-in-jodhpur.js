import dynamic from "next/dynamic"
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const InvestJodhpur = dynamic(import('components/Aboutus/InvestJodhpur'));

export default function WhyInvestInJodhpur(props) {
  const { whyInvestData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Top 10 builder in Jodhpur - Ashapurna',
        metaDescription: 'Ashapurna is the best real estate developer in Jodhpur & also counted in the top 10 builder in Jodhpur. They provide the luxury properties at affordable prices.',
        metaKeywords: 'Invest in jodhpur',
      }} />
      <Breadcrumb pageName={'Why Invest In Jodhpur'} pageHeading={'Why Invest In Jodhpur'} />
      {whyInvestData && <InvestJodhpur whyInvestData={whyInvestData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    whyInvestData: null,
  };
  res.whyInvestData = await callPostAPI(process.env.WHYINVEST_API, {});
  return {
    props: res,
  };
}

WhyInvestInJodhpur.propTypes = {
  whyInvestData: PropTypes.object,
}