import MetaData from "components/Common/MetaData";
import dynamic from "next/dynamic"

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const FlatsInJodhpur = dynamic(import('components/QuickLinks/FlatsInJodhpur'));

export default function defaultPage() {
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Best Flats In Jodhpur | Ashapurna Buildcon Limited',
        metaDescription: 'Ashapurna is one of the top builders who provides the best Flats In Jodhpur. They provide 1bhk, 2bhk, 3bhk, 4bhk Flats in Jodhpur in the budget rate and with the best facilities.',
        metaKeywords: 'Flats In Jodhpur'
      }} />
      <Breadcrumb pageName={'Flats In Jodhpur'} pageHeading={'Flats In Jodhpur'} />
      <FlatsInJodhpur />
    </>
  )
}