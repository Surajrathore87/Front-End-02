import MetaData from "components/Common/MetaData";
import dynamic from "next/dynamic"

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const PlotsInJodhpur = dynamic(import('components/QuickLinks/PlotsInJodhpur'));

export default function defaultPage() {
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Residential Shore/Plots for sale in Jodhpur - Ashapurna Buildcon',
        metaDescription: 'Explore Ashapurnas residential plots in Jodhpur with an affordable and budget friendly rates in Jodhpur.',
        metaKeywords: 'Plots In Jodhpur'
      }} />
      <Breadcrumb pageName={'Plots In Jodhpur'} pageHeading={'Plots In Jodhpur'} />
      <PlotsInJodhpur />
    </>
  )
}