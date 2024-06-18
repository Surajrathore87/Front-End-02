import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercentage, faRupeeSign, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';

function EmiCalculate(props) {
  const { emiData } = props;
  //console.log(emiData);
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(10);
  const [yearMonth, setYearMonth] = useState(20);
  const [shareIcons, setShareIcons] = useState(false);
  const [maxAmount, setMaxAmount] = useState(false);

  const [emiAmount, setEmiAmount] = useState('');
  const [totalInterest, setTotalInterest] = useState('');

  useEffect(() => {
    formatNumberWithComma();
    calculateValue();
  }, []);

  function formatNumberWithComma(value) {
    if (value == null) return 'N/A';
    if (value == 0) return '0';
    if (!value || isNaN(value)) return '-';
    // eslint-disable-next-line new-cap
    const formatter = Intl.NumberFormat('en-IN', { currency: 'INR' });
    return formatter.format(value);
  }

  function calculateValue() {
    if (loanAmount <= 1000000000) {
      const interestRates = (parseFloat(loanAmount) * interestRate) / 100;
      const calculatedPayment = parseFloat(interestRates) * yearMonth;
      setEmiAmount(interestRates);
      setTotalInterest(calculatedPayment);
    } else {
      setMaxAmount(true);
    }
  }

  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    // labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [interestRate, yearMonth],
        backgroundColor: ['#ffc107', '#20c997'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <section className="news-letter">
        <Container>
          <Row>
            <Col lg={12} className="pb-lg-5">
              <div className="team-wrapper text-center mb-4 mb-lg-5">
                <h1 className="blue-color fw-600 fs-35 text-center">{emiData.emiCalculator.title}</h1>
                <div className="px-lg-5 fs-14 lh-24">{ReactHtmlParser(emiData.emiCalculator.description)}</div>
              </div>
              <form className="emi-calculate">
                <Row>
                  <Col lg={5}>
                    <div className="nricorner-right p-lg-4 py-3 px-2 rounded-1 mb-5 border">
                      <h4 className="golden-color fw-600 text-center">EMI Calculator</h4>
                      <div className="nriForm mt-4 px-2">
                        <div className="my-4">
                          <div className="range-emi-calculater">
                            <Form.Label>Loan Amount</Form.Label>
                            <Form.Range
                              value={loanAmount}
                              max={1000000000}
                              onChange={(e) => setLoanAmount(e.target.value)}
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-end">
                            <div className="">
                              <span className="range-value fw-600 fs-16 ms-auto mb-2 d-flex align-items-center justify-content-end">
                                <FontAwesomeIcon icon={faRupeeSign} className="mx-2" width={16} height={16} />
                                <input
                                  className="border-0 shadow-none bg-transparent fw-600 fs-16 text-end"
                                  type="number"
                                  value={loanAmount}
                                  max={1000000000}
                                  onChange={(e) => {
                                    if (e.target.value.length <= 10) {
                                      setLoanAmount(e.target.value);
                                    }
                                  }}
                                />
                              </span>
                              {maxAmount && (
                                <span className="text-danger max-amount me-2">Max Amount: 1000000000cr</span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="my-4">
                          <div className="range-emi-calculater">
                            <Form.Label>Interest Rate</Form.Label>
                            <Form.Range
                              value={interestRate}
                              max={30}
                              onChange={(e) => setInterestRate(e.target.value)}
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-end">
                            <span className="range-value fw-600 fs-16 d-flex align-items-center">
                              <input
                                className="border-0 shadow-none bg-transparent fw-600 fs-16 text-end"
                                type="number"
                                value={interestRate}
                                max={30}
                                onChange={(e) => setInterestRate(e.target.value)}
                              />
                              <FontAwesomeIcon icon={faPercentage} className="mx-2" width={16} height={16} />
                            </span>
                          </div>
                        </div>
                        <div className="my-4">
                          <div className="range-emi-calculater">
                            <Form.Label>Loan's Tenure</Form.Label>
                            <Form.Range value={yearMonth} max={30} onChange={(e) => setYearMonth(e.target.value)} />
                          </div>
                          <div className="d-flex align-items-center justify-content-end">
                            <span className="range-value fw-600 fs-16 d-flex align-items-center">
                              <input
                                className="border-0 shadow-none bg-transparent fw-600 fs-16 text-end"
                                type="number"
                                value={yearMonth}
                                max={30}
                                onChange={(e) => setYearMonth(e.target.value)}
                              />
                              <span className="mx-2">{(yearMonth && 'Month') || 'Year'}</span>
                            </span>
                          </div>
                        </div>
                        {/* <div className="text-end">
                        <div className="toggle-year-month mb-4">
                          <label className="switch">
                            <input type="checkbox" onChange={(event) => setYearMonth(!yearMonth)}/> 
                            <span className="slider">
                              <div className="w-100 h-100 d-flex align-items-center justify-content-between px-2 text-white">
                                <span>Year</span>
                                <span>Month</span>
                              </div>
                            </span>
                          </label>
                        </div>  
                      </div> */}
                        <div className="emi-table table-responsive w-100">
                          <ul className="ms-0 ps-4">
                            <li className="ms-0">
                              <div className="d-lg-flex align-items-center justify-content-between">
                                Loan EMI&nbsp;:&nbsp;
                                <div className="text-end">₹&nbsp;{formatNumberWithComma(emiAmount)}</div>
                              </div>
                            </li>
                            <li className="ms-0">
                              <div className="d-lg-flex align-items-center justify-content-between">
                                Total Interest Payable&nbsp;:&nbsp;
                                <div className="text-end">₹&nbsp;{formatNumberWithComma(totalInterest)}</div>
                              </div>
                            </li>
                            <li className="ms-0 mt-2">
                              <div className="d-lg-flex align-items-start justify-content-between">
                                <div className="">
                                  Total of Payments&nbsp;:&nbsp;
                                  <p className="fs-15">(Principal + Interest)</p>
                                </div>
                                <div className="text-end">
                                  ₹&nbsp;{formatNumberWithComma(Number(loanAmount) + Number(totalInterest))}
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <button type="button" className="button-golden ms-auto" onClick={calculateValue}>
                            Calculate
                          </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="emi-right-section position-relative">
                      <div className="position-absolute end-0 share-icons">
                        <button
                          type="button"
                          className="share-btn border-0 bg-transparent mb-3 text-dark
                        light-blue-color d-flex align-items-center justify-content-center"
                          onClick={() => setShareIcons(!shareIcons)}
                          title="Share"
                        >
                          <FontAwesomeIcon icon={faShareAlt} className="fs-20" width={16} height={16} />
                        </button>
                        {shareIcons && (
                          <>
                            <button
                              className="share-btn border-0 mb-3
                              light-blue-color d-flex align-items-center justify-content-center facebook"
                              title="Facebook"
                            >
                              <FontAwesomeIcon icon={faFacebookF} className="fs-20 text-white" width={16} height={16} />
                            </button>
                            <button
                              className="share-btn border-0 mb-3
                              light-blue-color d-flex align-items-center justify-content-center whatsapp"
                              title="WhatsApp"
                            >
                              <FontAwesomeIcon icon={faWhatsapp} className="fs-20 text-white" width={16} height={16} />
                            </button>
                            <button
                              className="share-btn border-0 mb-3
                              light-blue-color d-flex align-items-center justify-content-center twitter"
                              title="Twitter"
                            >
                              <FontAwesomeIcon icon={faTwitter} className="fs-20 text-white" width={16} height={16} />
                            </button>
                          </>
                        )}
                      </div>
                      <div className="emi-chart-box">
                        <Doughnut data={data} />
                      </div>
                      <div className="emi-right-top">
                        <h2 className="fs-40 text-center pt-4 pb-4">
                          <FontAwesomeIcon icon={faRupeeSign} className="me-2" width={50} height={50} />
                          {formatNumberWithComma(emiAmount)}
                          <span className="fs-16">/month</span>
                        </h2>
                        <div className="emi-table table-responsive ps-0 w-100">
                          <ul className="ms-0 ps-lg-4 ps-md-3 ps-2">
                            <li className="d-flex align-items-center justify-content-between ms-0">
                              Loan Amount :&nbsp;<sapn>₹ {formatNumberWithComma(loanAmount)}</sapn>
                            </li>
                            {/* <li className='d-flex align-items-center justify-content-between ms-0 '>Down Payment :&nbsp;<span>₹ 21,79,885</span></li> */}
                            <li className="d-flex ms-0 mt-2">
                              <div className="d-flex justify-content-between w-100">
                                <div className="">Interest rate&nbsp;:&nbsp;</div>
                                <span>{interestRate} %</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="ms-lg-4 pt-lg-4 pt-3">
                          <h5 className="fs-20 fw-600">Note:-</h5>
                          <div className="fs-14 lh-24">{ReactHtmlParser(emiData.emiCalculator.notes)}</div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default EmiCalculate;
