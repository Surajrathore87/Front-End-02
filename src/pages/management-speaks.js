import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const OurManagement = dynamic(import('components/Aboutus/OurManagement'));

export default function ManagementSpeaks(props) {
  const { managementData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Ashapurna Buildcon Ltd - Management Speaks',
        metaDescription: 'Check Ashapurna Buildcon Limiteds management speaks in the real estate sector.',
        metaKeywords: 'Management Speaks',
      }} />
      <Breadcrumb pageName={'Management Speaks'} pageHeading={'Our Management'} />
      {managementData && <OurManagement managementData={managementData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    managementData: null,
  };

  res.managementData = await callPostAPI(process.env.MANAGEMENT_API, {});

  return {
    props: res,
  };
}

ManagementSpeaks.propTypes = {
  managementData: PropTypes.object,
}