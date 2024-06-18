import dynamic from 'next/dynamic';


const MetaData = dynamic(import('components/Common/MetaData'));
const NriDetail = dynamic(import('components/Projects/Details/NriDetails'));

export default function ProjectAshapurnaNri() {
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Now Europe In Jodhpur : Ashapurna NRI',
        metaDescription: 'Top Residential Project in Jodhpur: Ashapurna Real Estate Developers offers property with complete amenities & luxury at the affordable cost of Property in Jodhpur.',
        metaKeywords: 'Ashapurna Nri',
      }} />
      <NriDetail />
    </>
  )
}