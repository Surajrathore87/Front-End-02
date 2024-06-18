import dynamic from "next/dynamic"

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const HospitalityProjects = dynamic(import('components/QuickLinks/HospitalityProjects'));

export default function defaultPage() {
  return (
    <>
      <Breadcrumb pageName={'Hospitality Projects'} pageHeading={'Hospitality Projects'}/>
      <HospitalityProjects />
    </>
  )
}