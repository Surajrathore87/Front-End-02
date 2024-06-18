import dynamic from "next/dynamic"

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const CorporateProfile = dynamic(import('components/Aboutus/CorporateProfile'));

export default function Corporate() {
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Ashapurna Buildcon Ltd - Corporate Profile',
        metaDescription: 'Explore ashapurna buildcons corporate profile to scroll their latest projects in Jodhpur.',
        metaKeywords: 'Corporate Profile',
      }} />
      <Breadcrumb pageName={'Corporate Profile'} pageHeading={'Corporate Profile'} />
      <CorporateProfile />
    </>
  )
}