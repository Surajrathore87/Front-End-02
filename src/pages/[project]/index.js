import dynamic from "next/dynamic"
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";


const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const MetaData = dynamic(import('components/Common/MetaData'));
const Projects = dynamic(import('components/Projects/Projects'));
const PageNotFound = dynamic(import('components/PageNotFound'));

export default function project(props) {
  const { projectCategoryData, projectListingData } = props;

  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Best Commercial Property In Jodhpur | Ashapurna Buildcon',
        metaDescription: 'Ashapurna Buildcon is one of the best real estate developers in Jodhpur and possesses the top-rated commercial property in Jodhpur & top residential projects in Jodhpur.',
        metaKeywords: 'Commercial Property',
      }} />
      <Breadcrumb pageName={'Projects'} pageHeading={'Ashapurna Projects'} />
      {projectCategoryData && projectListingData && <Projects projectCategoryData={projectCategoryData.data} projectListingData={projectListingData.data} />}
    </>
    ||
    <>
      <MetaData metaContent={{
        metaTitle: 'Page not found',
        metaDescription: '',
        metaKeywords: ''
      }} />
      <Breadcrumb pageName={'404'} pageHeading={'Page Not Found'} />
      <PageNotFound />
    </>
  )
}

export async function getServerSideProps(context) {
  const res = {
    projectCategoryData: null,
    projectListingData: null,
  };

  const params = {
    slug: context.params.project,
  };

  res.projectCategoryData = await callPostAPI(process.env.PROJECT_CATEGORY_API, {});
  res.projectListingData = await callPostAPI(process.env.PROJECT_LISTING_API, params);
  return {
    props: res,
  };
}

project.propTypes = {
  projectCategoryData: PropTypes.object,
  projectListingData: PropTypes.object,
}