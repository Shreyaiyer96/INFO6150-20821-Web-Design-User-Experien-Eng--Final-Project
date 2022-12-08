import React from "react";
import { Container,Row,Col } from "reactstrap";
import './choose-us.css'
import pastaImg from '../assets/images/pasta.png'


const ChooseUs = () => {

    return(
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <img src={pastaImg} alt="" className='w-100' />
                    </Col>
                    <Col lg='6'>
                        <div className="choose__content">
                            <h4>Who we are?</h4>
                            <h2>Take a look at the benefites we offer</h2>
                            <p>Lorem hjfhgmnvn mvjvkgj,nvhgjjgikg, m</p>
                        </div>
                        <div className="feature mt-4">
                            <div className="feature1 d-flex align-items-center gap-5">
                                <div className="single__feature">
                                    <span><i class="ri-truck-line"></i></span>
                                    <h6>Free Home Delivery</h6>
                                    <p>lorem ipsum dolor sit amet.</p>
                                </div>

                                <div className="single__feature">
                                    <span className="feature__icon-two">
                                        <i class="ri-money-dollar-circle-line"></i></span>
                                    <h6>Return $ Refund</h6>
                                    <p>lorem ipsum dolor sit amet.</p>
                                </div>

                            </div>

                            <div className="feature1 mt-3 d-flex align-items-center gap-5">
                                <div className="single__feature">
                                    <span className="feature__icon-3"><i class="ri-secure-payment-line"></i></span>
                                    <h6>Secure Payments</h6>
                                    <p>lorem ipsum dolor sit amet.</p>
                                </div>

                                <div className="single__feature">
                                    <span className="feature__icon-4">
                                    <i class="ri-24-hours-line"></i></span>
                                    <h6>24/7 Assisstance</h6>
                                    <p>lorem ipsum dolor sit amet.</p>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default ChooseUs