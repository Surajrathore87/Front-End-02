import MetaData from "components/Common/MetaData";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const NewsLetter = dynamic(import('components/QuickLinks/NewsLetter'));

export default function defaultPage(props) {
  const { newsData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Ashapurna Buildcon Ltd - Newsletter',
        metaDescription: 'Explore our every month newsletter with unique media and events in Ashapurna Buildcon Limited in Jodhpur.',
        metaKeywords: 'Newsletter'
      }} />
      <Breadcrumb pageName={'NewsLetter'} pageHeading={'NewsLetter'} />
      {newsData && <NewsLetter newsData={newsData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    newsData: null,
  };

  res.newsData = await callPostAPI(process.env.NEWSLETTER_API, {});
  return {
    props: res,
  };
}

defaultPage.propTypes = {
  newsData: PropTypes.object,
}