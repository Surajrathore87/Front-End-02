import dynamic from "next/dynamic"
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const Csr = dynamic(import('components/Aboutus/Csr'));

export default function SocialResponsibility(props) {
  const { csrData } = props;
  //console.log(csrData);
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Ashapurna Buildcon Ltd - CSR Social Responsibility',
        metaDescription: 'Shri Karan Singh Uchiyarda with his zeal and enthusiasm to work for social upliftment of poor people has established a trust named as ‘Shree Magmohan Cheritable Trust’, with the association of Ashapurna Buildcon Ltd.',
        metaKeywords: 'social responsibility',
      }} />
      <Breadcrumb pageName={'Social Responsibility'} pageHeading={'Social Responsibility'} />
      {csrData && <Csr csrData={csrData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    csrData: null,
  };

  res.csrData = await callPostAPI(process.env.CSR_API, {});

  return {
    props: res,
  };

}

SocialResponsibility.propTypes = {
  csrData: PropTypes.object,
}
