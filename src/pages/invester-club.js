import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const Investors = dynamic(import('components/Aboutus/InvestorClub'));

export default function InvestorsClub(props) {
  const { investorsData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Ashapurna Buildcon Ltd - Invester Club',
        metaDescription: '',
        metaKeywords: 'Investors Club',
      }} />
      <Breadcrumb pageName={'Investors Club'} pageHeading={'Investors Club'} />
      {investorsData && <Investors investorsData={investorsData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    investorsData: null,
  };

  res.investorsData = await callPostAPI(process.env.INVESTORS_CLUB, {});
  return {
    props: res,
  };
}

InvestorsClub.propTypes = {
  InvestorsClub: PropTypes.object,
}