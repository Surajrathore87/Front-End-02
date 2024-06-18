import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const MediaAndEvents = dynamic(import('components/MediaAndEvents'));

export default function mediaEvents(props) {
  const { mediaData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Rajasthan best builders - Ashapurna Buildcon',
        metaDescription: "Ashapurna are the Rajasthans best builders which offers RERA & JDA approved residential & commercial property with luxury modern amenities at the best prices.",
        metaKeywords: 'Media and Events',
      }} />
      <Breadcrumb pageName={'Media and Events'} pageHeading={'Media and Events'} />
      {mediaData && <MediaAndEvents mediaData={mediaData.data} />}
    </>
  );
}

export async function getServerSideProps() {
  const res = {
    mediaData: null,
  };

  res.mediaData = await callPostAPI(process.env.MEDIA_EVENT_API, {});

  return {
    props: res,
  };

}
mediaEvents.propTypes = {
  mediaData: PropTypes.object,
}