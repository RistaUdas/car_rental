import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";


const socialLinks = [
    {
        url: "#",
        icon: "ri-facebook-line",
    },

    {
        url: "#",
        icon: "ri-instagram-line",
    },

    {
        url: "#",
        icon: "ri-linkedin-line",
    },

    {
        url: "#",
        icon: "ri-twitter-line",
    },
];


const Contact = () => {
  return (
    <Helmet title="contact">
        <CommonSection  title="contact" />
        <section>
            <Container>
                <Row>
                    <Col lg='7' md='7'>
                        <h6 className="fw-bold mb-4">Get In Touch</h6>

                        <Form>
                           <FormGroup className="contact__form" >
                             <Input type="text" placeholder="Your Name" />
                            </FormGroup>
                            <FormGroup className="contact__form" >
                             <Input type="email" placeholder="Email" />
                            </FormGroup> 
                            <FormGroup className="contact__form" >
                              <textarea rows="5" placeholder="Message" className="textarea" ></textarea>
                            </FormGroup> 

                            <button type="submit " className="contact__btn">
                                Send Message
                            </button>
                        </Form>
                    </Col>

                    <Col lg='5' md='5'>
                        <div className="contact__info">
                          <h6 className="fw-bold">Contact Information</h6>
                          <p className="section__description mb-0">
                            New-Baneshwor, Kathmandu, Nepal
                          </p>
                         <div className="d-flex align-items-center gap-2">
                            <h6 className="fs-6 mb-0">Phone:</h6>
                            <p className="section__description mb-0">+977 9800880000</p>
                         </div>
                         <div className="d-flex align-items-center gap-2">
                         <h6 className="fs-6 mb-0">Email:</h6>
                         <p className="section__description mb-0">carrentalnepal@gmail.com</p>
                         </div>

                         <h6 className="fw-bold mt-4">Follow Us</h6>
                         
                         <div className="d-flex align-items-center gap-4 mt-3">
                            {
                                socialLinks.map((item, index) => (
                                    <Link to={item.url} key={index} className="social__link-icon" >
                                        <i class={item.icon} ></i>
                                     </Link>
                                ))
                            }
                         </div>
                        </div>
                    
                    </Col>
                </Row>
            </Container>
        </section>
      
    </Helmet>
  );
};

export default Contact;
