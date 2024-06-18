import dynamic from "next/dynamic"

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const EducationalProjects = dynamic(import('components/QuickLinks/EducationalProjects'));

export default function defaultPage() {
  return (
    <>
      <Breadcrumb pageName={'Educational Projects'} pageHeading={'Educational Projects'}/>
      <EducationalProjects />
    </>
  )
}