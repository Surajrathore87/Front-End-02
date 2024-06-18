import dynamic from "next/dynamic"

const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const MetaData = dynamic(import('components/Common/MetaData'));
const Gallery = dynamic(import('components/Gallery'));

export default function galleryPage() {
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Our Gallery | Ashapurna Buildcon',
        metaDescription: 'Gallery',
        metaKeywords: 'Gallery',
      }} />
      <Breadcrumb pageName={'Gallery'} pageHeading={'Gallery'} />
      <Gallery />
    </>
  )
}