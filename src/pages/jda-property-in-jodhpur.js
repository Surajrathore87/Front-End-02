import MetaData from "components/Common/MetaData";
import dynamic from "next/dynamic"

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const JdaJodhpur = dynamic(import('components/QuickLinks/JdaJodhpur'));

export default function defaultPage() {
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'JDA Approved Property In Jodhpur | Ashapurna Buildcon Limited',
        metaDescription: 'Ashapurna is one of the top developers who provides JDA Approved Property In Jodhpur. They provide Top Residential Projects in Jodhpur & JDA Approved Flats in Jodhpur in the budget and with the best facilities.',
        metaKeywords: 'JDA property In Jodhpur'
      }} />
      <Breadcrumb pageName={'JDA property In Jodhpur'} pageHeading={'JDA property In Jodhpur'} />
      <JdaJodhpur />
    </>
  )
}