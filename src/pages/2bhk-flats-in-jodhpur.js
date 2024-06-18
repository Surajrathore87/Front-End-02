import MetaData from "components/Common/MetaData";
import dynamic from "next/dynamic"

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const TwoBHKFlatsInJodhpur = dynamic(import('components/QuickLinks/TwoBHKFlatsInJodhpur'));

export default function defaultPage() {
  return (
    <>
      <MetaData metaContent={{
        metaTitle: '2 BHK Flat In Jodhpur | Ashapurna Buildcon Limited',
        metaDescription: 'Ashapurna is one of the top builders who provides the best 2 BHK Flat in Jodhpur. They provide Top Residential Projects in Jodhpur & FLats and Villa in Jodhpur in the budget and with the best facilities.',
        metaKeywords: '2 BHK Flat in Jodhpur'
      }} />
      <Breadcrumb pageName={'2 BHK Flat In Jodhpur'} pageHeading={'2 BHK Flat In Jodhpur'} />
      <TwoBHKFlatsInJodhpur />
    </>
  )
}