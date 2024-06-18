import { faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

export default function PattaSuda() {
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
              <h1 className="blue-color fw-600 text-center mb-lg-5 my-3 fs-35">Our Offerings</h1>
              <div className="lh-24 fs-14 windmills-inner property-type-content">
                <div className="row property-col-reverse align-items-center">
                  <div className="col-lg-7">
                    <p>
                      Ashapurna Buildcon Limited is one of the respected and best real estate developers in Jodhpur. The
                      company always aims at offering the finest blend of comfort and luxury in every dream home it
                      designs and develops. Ashapurna’s diverse project portfolios includes options of both residential
                      and commercial property in Jodhpur at almost all prime and upcoming locations of Jodhpur.
                    </p>
                    <p>
                      Ashapurna Buildcon Limited has established itself as the best real estate developer in Jodhpur in
                      a very short period of time. The company has always worked tirelessly to provide everything to the
                      best of its ability and to build residences that are the ideal combination of convenience and
                      elegance. The company’s vast portfolio comprises all forms of top residential projects in Jodhpur,
                      industrial ventures and Pattasuda Plots in Jodhpur (पट्टा सुदा संपत्ति). Ashapurna Buildcon
                      Limited is a well-known and reputable real estate company in Jodhpur. In every dream home it
                      designs and builds, the company focuses on having the best balance of convenience and elegance.
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <img src="/images/sections/aboutus.png" className="img-fluid mb-lg-0 mb-3" />
                  </div>
                </div>
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
                                  <FontAwesomeIcon icon={faHome} className="me-1 blue-color" width={16} height={16} />{' '}
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
                  Ashapurna’s extensive project portfolio includes residential and commercial developments in virtually
                  every prime and upcoming Jodhpur venue! You must be thinking about why it is beneficial for you to
                  invest in Jodhpur and that too in Pattasuda Plots in Jodhpur. Let us specify some amazing and
                  irresistible Pattasuda Plots in Jodhpur’s benefits. First and foremost, we must emphasize Why Jodhpur?
                  Tourists adore Jodhpur because of its history, adversity, and amenities. Location and other advantages
                  are real secondaries as the city has all the advantages and is now the most sought-after city overall.
                  Let us know all of the potential explanations why Jodhpur is in such high demand. Jodhpur property has
                  become an investment destination because Jodhpur is India’s eleventh largest city, with a population
                  growth rate of 49 per cent.
                </p>
                <p>
                  It is predicted that in 2025, the city would become the Mega City and cross the inhabitants of 80
                  Million citizens. An international airport with connections to all major destinations is an added
                  benefit that appeals to the investors to come and invest more in Jodhpur for high rewards and other
                  advantages. Thus, every aspect is pointing towards the future growth of Jodhpur, leading to increased
                  rewards in your invested properties for sure. Pattasuda Plots in Jodhpur have become popular because
                  of the destination being in fame for domestic and foreign visitors, and handicrafts have grown in
                  popularity in Jodhpur. Jodhpur has also emerged as a major centre for gems and jewellery. This has
                  contributed to a great extension in demand for Jodhpur properties. The export of the same has
                  increased consumer returns, which has certainly increased GDP. With the launch of major multinational
                  corporations, SEZ has become an opportunity Centre for teens. Jodhpur has almost all of the best
                  medical facilities and the best hotels, such as Fortis, EHCC, SDMG, Cancer Center, and so on. The law
                  and order situation is excellent, and the political situation is peaceful. With Low initial
                  investments, real estate investors can get incomparable benefits, as mentioned above!
                </p>
                <p>
                  Ashapurna Buildcon has always come up with profitable Pattasuda Plots in Jodhpur while keeping in mind
                  several considerations to be taken into account when buying or renting a home, such as the location,
                  the desired place, the budget, amenities, and a lot more. Ashapurna Buildcon, the most well-known name
                  in Jodhpur, is devoted to excellence. We take our promises very seriously and are always striving to
                  improve. Before making any listings, we ensure that they are available on schedule and that the
                  necessary legal permits and paperwork have been obtained. Without a doubt, you can depend on our
                  commitments. Each project features high-quality architecture. Earthquake resistance is a primary
                  feature of the structure we create, and our buildings are well-designed and meticulously constructed.
                </p>
                <p>
                  We not only help you find the right real estate or pattasuda plots in Jodhpur, but we also make the
                  purchase process as simple and quick as possible and provides you JDA approved projects in Jodhpur. We
                  recognize that several considerations should be weighed when buying or renting a home, such as
                  location, perfect location, budget, services, and so on. If you want to find India’s best properties,
                  go to Ashapurna Buildcon. Whether you’re shopping for a rental property or dreaming of building your
                  dream home, our real estate site has it all. We have residential and commercial real estate listings
                  for sale and lease throughout the country. So, what are you holding out for?
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
