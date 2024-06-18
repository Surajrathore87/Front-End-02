import MetaData from "components/Common/MetaData";
import dynamic from "next/dynamic"

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const PropertyType = dynamic(import('components/QuickLinks/PropertyType'));

export default function defaultPage() {
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Types of Property in Jodhpur | Ashapurna Buildcon Limited',
        metaDescription: 'Ashapurna is one of the best real estate developers who provide different types of Property in Jodhpur. They provide 1bhk, 2bhk, 3bhk, 4bhk Flats in Jodhpur in the budget and with the best facilities. ',
        metaKeywords: 'Property Type'
      }} />
      <Breadcrumb pageName={'Property Type'} pageHeading={'Property Type'} />
      <PropertyType />
    </>
  )
}