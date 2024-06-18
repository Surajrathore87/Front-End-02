import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const EventDetails = dynamic(import('components/EventDetails'));
const PageNotFound = dynamic(import('components/PageNotFound'));

export default function event(props) {
  const { eventDetailData } = props;

  return (
    <>
      {eventDetailData
        && <>
          <MetaData metaContent={{
            metaTitle: 'Events',
            metaDescription: 'Events',
            metaKeywords: 'Events',
          }} />
          <Breadcrumb pageName={'Events'} pageHeading={'Events'} />
          {eventDetailData && <EventDetails eventDetailData={eventDetailData.data} />}
        </>
        || <>
          <MetaData metaContent={{
            metaTitle: 'Page not found',
            metaDescription: '',
            metaKeywords: ''
          }} />
          <Breadcrumb pageName={'404'} pageHeading={'Page Not Found'} />
          <PageNotFound />
        </>
      }

    </>
  )
}
export async function getServerSideProps(context) {
  const res = {
    eventDetailData: null,
  };
  const params = {
    slug: context.params.event,
  };

  res.eventDetailData = await callPostAPI(process.env.MEDIA_EVENT_DETAIL_API, params);

  return {
    props: res,
  };

}

event.propTypes = {
  eventDetailData: PropTypes.object,
}