import dynamic from "next/dynamic"

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const WindmillsProjects = dynamic(import('components/QuickLinks/WindmillsProjects'));

export default function defaultPage() {
  return (
    <>
      <Breadcrumb pageName={'Windmills Projects'} pageHeading={'Windmills Projects'} />
      <WindmillsProjects />
    </>
  )
}