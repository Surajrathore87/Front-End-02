import dynamic from 'next/dynamic';
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const ReraDisclaimer = dynamic(import('components/ReraDisclaimer'));

export default function Rera(props) {
  const { reraData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Ashapurna Buildcon Ltd - RERA Disclaimer',
        metaDescription: '',
        metaKeywords: 'Rera disclaimer',
      }} />
      <Breadcrumb pageName={'rera disclaimer'} pageHeading={'rera disclaimer'} />
      {reraData && <ReraDisclaimer reraData={reraData.data} />}
    </>
  );
}

export async function getServerSideProps() {
  const res = {
    reraData: null,
  };

  res.reraData = await callPostAPI(process.env.RERA_API, {});

  return {
    props: res,
  };
}

Rera.propTypes = {
  reraData: PropTypes.object,
}