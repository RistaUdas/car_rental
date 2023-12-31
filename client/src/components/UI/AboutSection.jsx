

import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-image/cars-img/Mahindra Thar Images.png";

const AboutSection = ({aboutClass}) => {
  return (
    <section className="about__section" style={
        aboutClass==="aboutPage"
        ? { marginTop: "0px" }
        : { marginTop: "280px" }
    }>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about__section-content">
                        <h4 className="section__subtitle">About Us </h4>
                        <h2 className="section__title">Welcome To Car Rental Service </h2>
                        <p className="section__description">
                            Lor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua
                        </p>
                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex
                             align-items-senter gap-2">
                            <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                            </p>

                            <p className="section__description d-flex 
                            align-items-senter gap-2">
                            <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                            </p>
                        </div>

                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex
                             align-items-senter gap-2">
                            <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                            </p>

                            <p className="section__description d-flex 
                            align-items-senter gap-2">
                            <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="about__img">
                        <img src={aboutImg}
                         alt="" className="w-100" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default AboutSection;
