import dynamic from "next/dynamic";

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const Benefits = dynamic(import('components/QuickLinks/Benefits'));

export default function Benefit() {
  return (
    <>
      <Breadcrumb pageName={'Benefits'} pageHeading={'Benefits'} />
      <Benefits />
    </>
  )
}