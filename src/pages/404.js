import dynamic from 'next/dynamic';
import React from 'react';

const PageNotFound = dynamic(import('components/PageNotFound'));
const MetaData = dynamic(import("components/Common/MetaData"));
const Breadcrumb = dynamic(import("components/Common/Breadcrumb"));

function Error() {
  return (<>
    <MetaData metaContent={{
      metaTitle: '404 | Page Not Found',
      metaDescription: '',
      metaKeywords: '404 page not found'
    }} />
    <Breadcrumb pageName={'404'} pageHeading={'Page Not Found'} />
    <PageNotFound />
  </>
  );
}

export default Error;
