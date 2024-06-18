import dynamic from "next/dynamic"

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const MetaData = dynamic(import('components/Common/MetaData'));
const ContactUs = dynamic(import('components/ContactUs'));

export default function contact() {
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Ashapurna Buildcon Ltd - Contact Us',
        metaDescription: 'For anyone looking for a property in Jodhpur, Ashapurna Buildcon provides its customers with enquiry forms and contact numbers.',
        metaKeywords: 'Contact Us',
      }} />
      <Breadcrumb pageName={'Contact Us'} pageHeading={'Contact Us'} />
      <ContactUs />
    </>
  )
}