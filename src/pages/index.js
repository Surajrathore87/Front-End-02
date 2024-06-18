import dynamic from 'next/dynamic';
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const Home = dynamic(import('components/Home/Home'));
const MetaData = dynamic(import('components/Common/MetaData'));

export default function Main(props) {
  const { homeData } = props;
  //console.log(homeData);
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Real Estate developer in Jodhpur - Ashapurna Buildcon',
        metaDescription: 'Ashapurna Buildcon are the best real estate developer in Jodhpur offers RERA & JDA approved properties with complete modern amenities at a budget-friendly cost.',
        metaKeywords: 'Partner',
      }} />
      <Home homeData={homeData.data} />
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    homeData: null,
  };

  res.homeData = await callPostAPI(process.env.HOME_API, {});
  //console.log(res.homeData.data);

  return {
    props: res,
  };
}