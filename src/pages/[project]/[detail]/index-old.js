import dynamic from "next/dynamic"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const ProjectDetails = dynamic(import('components/Projects/ProjectDetailsOld'));
const PageNotFound = dynamic(import('components/PageNotFound'));
const AnmolDetails = dynamic(import('components/Projects/Details/AnmolDetails'));
const BaseraDetails = dynamic(import('components/Projects/Details/BaseraDetails'));
const HeritageDetails = dynamic(import('components/Projects/Details/HeritageDetails'));
const AanganDetails = dynamic(import('components/Projects/Details/AanganDetails'));
const CrownPlazaDetails = dynamic(import('components/Projects/Details/CrownPlazaDetails'));
const AshapurnaMallDetails = dynamic(import('components/Projects/Details/AshapurnaMallDetails'));
const CorporateDetails = dynamic(import('components/Projects/Details/CorporateDetails'));
const PageLoader = dynamic(import('components/Loaders/PageLoader'));

export default function project() {
  const router = useRouter()
  const [loadPage, setLoadPage] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (router &&
      router.asPath == '/residential/ashapurna-heritage' ||
      router.asPath == '/residential/ashapurna-anmol' ||
      router.asPath == '/residential/ashapurna-pachpadra' ||
      router.asPath == '/residential/ashapurna-basera-second-phase' ||
      router.asPath == '/upcoming-projects/ashapurna-anmol' ||
      router.asPath == '/upcoming-projects/ashapurna-pachpadra' ||
      router.asPath == '/upcoming-projects/ashapurna-basera-second-phase' ||
      router.asPath == '/commercial/ashapurna-crown-plaza' ||
      router.asPath == '/commercial/ashapurna-mall' ||
      router.asPath == '/commercial/ashapurna-corporate-office'
    ) {
      setLoadPage(true);
    } else {
      setLoadPage(false)
    }
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 400)
    return () => clearTimeout(timer)
  }, [router.asPath]);

  return (
    <>
      {loadPage && isLoaded && <>
        {/* <MetaData metaContent={{
            metaTitle: 'Ashapurna Pachpadra',
            metaDescription: 'Ashapurna Pachpadra',
            metaKeywords: 'Ashapurna Pachpadra',
          }} /> */}

        {router && router.asPath == '/residential/ashapurna-heritage' && <>
          <MetaData metaContent={{
            metaTitle: 'Ashapurna Heritage - Buy Villa in Jodhpur | Jodhpur Property',
            metaDescription: 'Buy Villa in Jodhpur with Ashapurna: Check Plan *72 Acre size *Residential Villa *Basni Road *Near Airport *2/3/4 Bhk *671 Unit *Ready to move *modern amenities',
            metaKeywords: 'Ashapurna Heritage',
          }} />
          <HeritageDetails /></>}
        {router && (router.asPath == '/residential/ashapurna-anmol' || router.asPath == '/upcoming-projects/ashapurna-anmol') && <>
          <MetaData metaContent={{
            metaTitle: 'Ashapurna Anmol - Top Developer in Jodhpur',
            metaDescription: 'Ashapurna is one of the top developer in Jodhpur by providing beautifully furnished villas & plots in Jodhpur with modern amenities at budget-friendly prices.',
            metaKeywords: 'Ashapurna Anmol',
          }} />
          <AnmolDetails /></>}
        {router && (router.asPath == '/residential/ashapurna-pachpadra' || router.asPath == '/upcoming-projects/ashapurna-pachpadra') && <>
          <MetaData metaContent={{
            metaTitle: 'Top Residential Project In Jodhpur - Ashapurna Aangan',
            metaDescription: 'Top Residential Project in Jodhpur: Ashapurna Real Estate Developers offers property with complete amenities & luxury at affordable cost of Property in Jodhpur.',
            metaKeywords: 'Ashapurna Aangan',
          }} />
          <AanganDetails /></>}
        {router && (router.asPath == '/residential/ashapurna-basera-second-phase' || router.asPath == '/upcoming-projects/ashapurna-basera-second-phase') && <>
          <MetaData metaContent={{
            metaTitle: 'Ashapurna Basera IInd Phase- Top Builder in Jodhpur',
            metaDescription: 'Ashapurna is the top builder in Jodhpur that provides the best dealing residential property, Flats, Villas, JDA approved flats in Jodhpur at affordable prices',
            metaKeywords: 'Ashapurna Basera 2nd Phase',
          }} />
          <BaseraDetails /></>}
        {router && (router.asPath == '/commercial/ashapurna-crown-plaza') && <>
          <MetaData metaContent={{
            metaTitle: 'Crown Plaza- Top Builder in Jodhpur',
            metaDescription: 'Crown Plaza',
            metaKeywords: 'Crown Plaza',
          }} />
          <CrownPlazaDetails /></>}
        {router && (router.asPath == '/commercial/ashapurna-mall') && <>
          <MetaData metaContent={{
            metaTitle: 'Ashapurna Mall- Top Builder in Jodhpur',
            metaDescription: 'Ashapurna Mall',
            metaKeywords: 'Ashapurna Mall',
          }} />
          <AshapurnaMallDetails /></>}
        {router && (router.asPath == '/commercial/ashapurna-corporate-office') && <>
          <MetaData metaContent={{
            metaTitle: 'Ashapurna Corporate Office - Top Builder in Jodhpur',
            metaDescription: 'Ashapurna Corporate Office',
            metaKeywords: 'Ashapurna Corporate Office',
          }} />
          <CorporateDetails /></>}
      </>
      }
      {isLoaded && !loadPage && <>
        <MetaData metaContent={{
          metaTitle: '404 Page Not Found',
          metaDescription: '',
          metaKeywords: ''
        }} />
        <Breadcrumb pageName={'404'} pageHeading={'Page Not Found'} />
        <PageNotFound />
      </>}
      {!isLoaded && <PageLoader />}
    </>
  )
}