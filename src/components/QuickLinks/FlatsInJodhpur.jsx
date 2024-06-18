import { faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

function FlatsInJodhpur() {
  const Settings = {
    arrows: false,
    dots: true,
    infinite: true,
    centerPadding: '50px',
    speed: 700,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const projectsList = [
    {
      title: 'Ashapurna Heritage Interior',
      location: 'Near Airport, Jodhpur',
      status: 'Ready to Occupy',
      image: '/images/sections/ashapurna-heritage.webp',
      link: 'residential/ashapurna-heritage',
      logo: '/images/sections/heritage-logo.webp',
    },
    {
      title: 'Ashapurna Anmol',
      location: 'Near New High Court, Jodhpur',
      status: 'Under Construction',
      image: '/images/sections/ashapurna-anmol.webp',
      link: 'residential/ashapurna-anmol',
      logo: '/images/sections/anmol-logo.webp',
    },
    {
      title: 'Ashapurna Aangan',
      location: 'Pachpadra, Barmer',
      status: 'Ready to Occupy',
      image: '/images/sections/ashapurna-aangan.webp',
      link: 'residential/ashapurna-pachpadra',
      logo: '/images/sections/aangan-logo.webp',
    },
    {
      title: 'Ashapurna NRI',
      location: 'Main Pali Highway, Jodhpur',
      status: 'Under Construction',
      image: '/images/sections/ashapurna-nri.webp',
      link: '/ashapurna-nri',
      logo: '/images/sections/nri-logo.webp',
    },
    {
      title: 'Ashapurna Basera',
      location: 'Pal, Sangariya Road',
      status: 'Under Construction',
      image: '/images/sections/ashapurna-basera.webp',
      link: 'residential/ashapurna-basera-second-phase',
      logo: '/images/sections/basera-logo.webp',
    },
  ];
  return (
    <>
      <section className="news-letter">
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="blue-color fw-600 fs-35 text-center mb-lg-5 my-3">Flats In Jodhpur</h1>
              <div className="lh-24 fs-14 windmills-inner">
                <div className="row property-col-reverse align-items-center">
                  <div className="col-lg-7">
                    <p>
                      Housing is essential for all , and Ashapurna Buildcon, the top developer in Jodhpur, emphasizes
                      more on homes and facilities that bring joy, comfort and convenience all at one place. In recent
                      times, most entrepreneurs prefer investing in top residential projects in Jodhpur after
                      experiencing the ups and downs in other types of businesses and deals. After all realestate is
                      sustainable investment. Ashapurna Buildcon Limited provides best deals with prime locations to get
                      maximum benefits from any point of view, be it investing or housing, Ashapurna offers spacious
                      plots and 1, 2, 3 & 4 bhk flats villas in Jodhpur, which will indulge you with all top-class
                      features & amenities.
                    </p>
                    <p>
                      One of the greatest benefits you can get after investing in residential projects is the tax
                      exemptions. It is one of the main reasons many people invest in real estate in Jodhpur. With
                      Ashapurna, you can better achieve your goals. If you want to make a profit by investing in any
                      residential project, you need to make smart decisions and calculate your future real estate
                      investment to grow. There are many benefits in investing in real estate that definitely outweigh
                      the cost with undeniable positive results. Ashapurna Buildcon is a real estate developer in
                      Jodhpur that provides ready to move flats and JDA approved flats in Jodhpur, offering many
                      conveniences and promises to bring peace to life. Ashapurna Buildcon is affordable, and from an
                      investor’s perspective, there is more room for capital appreciation. Their best residential
                      projects and flats in Jodhpur includes :
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <img src="/images/sections/flats-jodhpur.webp" className="img-fluid mb-lg-0 mb-3" />
                  </div>
                </div>
                <Row>
                  <Col lg="12">
                    <div className="benefit-forth-section bg-white py-md-5 pb-5 px-3 px-md-3 px-lg-0 property-type-slider">
                      <Slider {...Settings}>
                        {projectsList.map((item, key) => (
                          <div className="px-3 pb-5 pt-2" key={key}>
                            <div>
                              <div className="our-project-card p-3 bg-white shadow rounded position-relative">
                                <div className="img-box">
                                  <img src={item.image} alt="" className="img-fluid rounded" />
                                </div>
                                <div
                                  className="position-absolute bg-white shadow
                                  project-card-inner rounded text-start"
                                >
                                  <p className="fs-18 fw-500 mb-1">{item.title}</p>
                                  <p className="fs-14 m-0 p-0">
                                    <FontAwesomeIcon
                                      icon={faMapMarkerAlt}
                                      className="me-2 blue-color"
                                      width={16}
                                      height={16}
                                    />
                                    {item.location}
                                  </p>
                                  <div className="d-flex fs-14 text-color align-items-center justify-content-between project-inner-bottom">
                                    <span>
                                      <FontAwesomeIcon
                                        icon={faHome}
                                        className="me-1 blue-color"
                                        width={16}
                                        height={16}
                                      />{' '}
                                      Ready to Occupy
                                    </span>
                                    <Link href={item.link}>
                                      <a className="project-tag fs-13 cursor-pointer">See All</a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <p>
                      The journey of spreading joy in customers’ lives by helping them find their perfect home or
                      property in Jodhpur does not just end by handing over the keys, for Ashapurna buildcon shares the
                      journey along with the precious customers to share get into their shoes and provide them with the
                      best of their thinking. Stepping into a new home is just the beginning of beautiful pervasive
                      bonding. Ashapurna Buildcon strives to create an environment of trust and hope to develop customer
                      experience to keep them for lifetime.
                    </p>
                    <ul className="property-type-content-ul">
                      <li>Ashapurna Aangan</li>
                      <li>Ashapurna Aangan Prime</li>
                      <li>Ashapurna Heritage</li>
                      <li>Ashapurna Nano Plaza</li>
                    </ul>
                    <p>
                      Ashapurna is not only a top builder in Jodhpur but also a true supporter in your investment
                      journey. Ashapurna Buildcon aims to provide comfort and security to the homebuyers. The Ashapurna
                      Buildcon team measures success not only by the numbers in the balance sheet and portfolio but
                      customer trust.
                    </p>
                    <p>
                      Investing in residential real estate is generally seen as a medium to long-term investment, so
                      patience is required. The industry is cyclical, the housing market tends to reflect the
                      development of interest rates, and Ashapurna is a solid investment for the most part, so
                      investment and ownership can be a potential way to grow wealth and cash flow effectively.
                    </p>
                    <p>
                      Ashapurna Buildcon is a perfect example of large-scale luxury living, sighseeing views from
                      windows, kids play areas, club house, activity areas, community and common areas and greenery of
                      the gardens to highlight its grandeur. Ashapurna Buildcon Limited is one of the top real estate
                      companies due to its craftsmanship and solid construction in apartments and other projects.
                      Ashapurna’s apartments or flats in Jodhpur are popular with investors and owner-occupiers because
                      they offers space for a joint families to live together and provide passive income when renting.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default FlatsInJodhpur;
