import { faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

function TwoBHKFlatsInJodhpur() {
  const Settings = {
    arrows: false,
    dots: true,
    infinite: true,
    centerPadding: '50px',
    speed: 700,
    autoplay: false,
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
              <h1 className="blue-color fw-600 text-center mb-lg-5 my-3 fs-35">2 BHK Flat In Jodhpur</h1>
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
                      Investment is a choice that goes a long way in making the future financially stable and secure.
                      Taking any chance or uncertain decision is not a smart investment; this is what the stock market,
                      gold, and currency markets have shown us time and time again. As the real estate situation is
                      evolving and expanding at a rapid rate, the value of 2 BHK flat in Jodhpur is rising day by day.
                      No matter how much money one has saved for savings, everyone wants to invest in something. That is
                      where the financial benefits of 2 BHK units come into play!
                    </p>
                    <p>
                      Many homebuyers are attracted to 2 BHK flat in Jodhpur. If it is a working adult, a couple, or a
                      family of three or four, these small living spaces serve the right purpose. Although some people
                      have an asset portfolio of 40-50 lakhs, there are also people with 15-20 investment lakhs, and 2
                      BHK flat in Jodhpur are the most favored choice for them. With nuclear families, migrants, and
                      professionals, these apartments have a greater audience and better options than 1, 3, or 4bhk
                      flats in Jodhpur. Small apartments are directly proportional to low production costs. When the
                      number of rooms is lower, the cleaning problem would naturally decrease.
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <img src="/images/sections/ashapurna-basera-flats.webp" className="img-fluid mb-lg-0 mb-3" />
                  </div>
                </div>
                <Row>
                  <Col lg={12}>
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
                      Since the area of the home is small, there is also no need for extra furniture that will prevent
                      you from spending extra on sofas and tables. In reality, removing the mess will make your home
                      seem larger and more organized. Since knowing the real estate industry trends and considering
                      people’s views, we have come up with more realistic and up-to-date apartments. It is initially
                      beneficial for people who are starting to invest in real estate units to invest in 2 BHK units.
                    </p>
                    <p>
                      Thus, 2 BHK flat in Jodhpur is considered a key investment by young adults, the nuclear family,
                      and couples since they are ideal for all the comfortable living requirements. One should go to 2
                      BHK apartments for long-term investment and greater return over time. The rewards of investing in
                      the 2 BHK are thus overwhelming. 2 BHK flats in Jodhpur by Ashapurna Buildcon are the most
                      convenient to purchase due to their location, uber-luxury amenities, and thoughtfully built
                      apartments. Some of the Ashapurna Buildcon 2 BHK properties are Ashapurna Aangan, Ashapurna
                      Basera, Ashapurna Nano Avenue, Ashapurna Anmol.
                    </p>
                    <p>
                      You should take advantage of government aids made available to the public regarding home
                      investment and residential properties. There are many government financial benefits, and you must
                      determine which of them extend to you. The Credit Based Subsidy Scheme and the Pradhan Mantri
                      Awaas Yojana (PMAY) within it will provide you with advantages of up to INR 2.6 lakhs due to their
                      personal investment incentives. Furthermore, under Section 80C of the Income Tax Act, you would be
                      eligible to receive INR 2 lakhs on the balance owed plus 1 lakh. When you are genuinely married,
                      filing the estate in your wife’s account or together with her can result in reduced registration
                      costs as well as potentially cost-deductible advantages.
                    </p>
                    <p>
                      Ashapurna Buildcon is a business that builds real estate townships in a much faster and more
                      recent fashion. Ashapurna Buildcon, the most well-known name in Jodhpur, is devoted to excellence.
                      We take our promises very seriously and are always striving to improve. Before making any
                      listings, we ensure that they are available on schedule and that the necessary legal permits and
                      paperwork have been obtained.
                    </p>
                    <p>
                      Without a doubt, you can depend on our commitments. Each project features high-quality
                      architecture and we also provide JDA approved flats in Jodhpur. Earthquake resistance is a primary
                      feature of the structure we create, and our buildings are well-designed and meticulously
                      constructed. We not only assist you in locating the best real estate, but we also ensure that the
                      buying process is as easy and efficient as possible.
                    </p>
                    <p>
                      We understand that many factors should be considered when purchasing or renting a house, such as
                      location, ideal location, budget, facilities, and many others. Ashapurna Buildcon is the place to
                      go if you want to discover India’s best properties. If you’re looking for a rental property or
                      dreaming of building your dream home, you’ll find it all on our real estate portal. We have top
                      residential projects in Jodhpur and commercial real estate listings for sale and rent across the
                      country. So, what are you waiting for?
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

export default TwoBHKFlatsInJodhpur;
