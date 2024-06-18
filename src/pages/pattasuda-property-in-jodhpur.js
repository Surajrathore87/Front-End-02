import dynamic from "next/dynamic";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const PattaSuda = dynamic(import('components/QuickLinks/PattaSuda'));

export default function PattaSudaProperty() {
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Pattasuda Plots In Jodhpur | Ashapurna Buildcon Limited',
        metaDescription: 'Ashapurna is one of the best real estate developers who provide Pattasuda Plots In Jodhpur. They provide Top Residential Projects in Jodhpur & FLats and Villa in Jodhpur in the budget and with the best facilities.',
        metaKeywords: 'Pattasuda Plots in Jodhpur',
      }} />
      <Breadcrumb pageName={'Pattasuda Property In Jodhpur'} pageHeading={'Pattasuda Property In Jodhpur'} />
      <PattaSuda />
    </>
  )
}