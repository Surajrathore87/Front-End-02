import MetaData from "components/Common/MetaData";
import dynamic from "next/dynamic"

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const VillasInJodhpur = dynamic(import('components/QuickLinks/VillasInJodhpur'));

export default function defaultPage() {
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Buy Villa In Jodhpur | Ashapurna Buildcon Limited',
        metaDescription: 'Ashapurna is one of the top developers in Jodhpur. They provide Top Residential Projects in Jodhpur & FLats and Villa in Jodhpur in the budget and with the best facilities.',
        metaKeywords: 'Villas In Jodhpur'
      }} />
      <Breadcrumb pageName={'Villas In Jodhpur'} pageHeading={'Villas In Jodhpur'} />
      <VillasInJodhpur />
    </>
  )
}