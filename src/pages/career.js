import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const MetaData = dynamic(import('components/Common/MetaData'));
const Careers = dynamic(import('components/Careers'));

export default function career(props) {
  const { careersData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Ashapurna Buildcon Ltd - Career',
        metaDescription: '',
        metaKeywords: 'Career',
      }} />
      <Breadcrumb pageName={'Career'} pageHeading={'Career'} />
      {careersData && <Careers careersData={careersData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const response = {
    careersData: null,
  };

  response.careersData = await callPostAPI(process.env.CAREER_DATA, {});

  return {
    props: response,
  };
}

career.propTypes = {
  careersData: PropTypes.object,
};