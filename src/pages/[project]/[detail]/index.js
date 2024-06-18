import dynamic from "next/dynamic"
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const PageNotFound = dynamic(import('components/PageNotFound'));
const ProjectDetails = dynamic(import('components/Projects/ProjectDetails'));

export default function project(props) {
  const { projectDetailsData } = props;
  return (
    <>
      {projectDetailsData && projectDetailsData.data.getDetails &&
        <>
          <MetaData metaContent={{
            metaTitle: 'Ashapurna Heritage - Buy Villa in Jodhpur | Jodhpur Property',
            metaDescription: 'Buy Villa in Jodhpur with Ashapurna: Check Plan *72 Acre size *Residential Villa *Basni Road *Near Airport *2/3/4 Bhk *671 Unit *Ready to move *modern amenities',
            metaKeywords: 'Ashapurna Heritage',
          }} />
          <ProjectDetails projectDetailsData={projectDetailsData.data.getDetails} projectImagePath={projectDetailsData.data.project_image_path} />
        </>
        ||
        <>
          <MetaData metaContent={{
            metaTitle: '404 Page Not Found',
            metaDescription: '',
            metaKeywords: ''
          }} />
          <Breadcrumb pageName={'404'} pageHeading={'Page Not Found'} />
          <PageNotFound />
        </>}
    </>
  )
}

export async function getServerSideProps(context) {
  const res = {
    projectDetailsData: null,
  };
  const params = {
    slug: context.params.detail,
  };
  res.projectDetailsData = await callPostAPI(process.env.PROJECT_DETAILS_API, params);
  return {
    props: res,
  };
}

project.propTypes = {
  projectDetailsData: PropTypes.object,
}