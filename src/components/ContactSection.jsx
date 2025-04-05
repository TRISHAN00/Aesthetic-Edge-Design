import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import styled from "styled-components";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [validated, setValidated] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    setValidated(true);
    
    // Simulating form submission
    setSubmitStatus("loading");
    
    // Here you would normally send the data to your backend
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setValidated(false);
    }, 1500);
  };

  return (
    <StyledContactSection id="contact">
      <Container>
        <SectionHeader>
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionSubtitle>
            Have a project in mind? We'd love to hear from you!
          </SectionSubtitle>
        </SectionHeader>

        <Row className="align-items-stretch">
          <Col lg={5} className="mb-4 mb-lg-0">
            <ContactInfoCard>
              <InfoCardHeader>Contact Information</InfoCardHeader>
              <InfoCardBody>
                <InfoItem>
                  <InfoIcon>
                    <FaMapMarkerAlt />
                  </InfoIcon>
                  <InfoContent>
                    <InfoTitle>Our Location</InfoTitle>
                    <InfoText>123 Design Street, Creative City, 10001</InfoText>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <FaPhone />
                  </InfoIcon>
                  <InfoContent>
                    <InfoTitle>Call Us</InfoTitle>
                    <InfoText>
                      <a href="tel:+01629803900">+01629803900</a>
                    </InfoText>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <FaEnvelope />
                  </InfoIcon>
                  <InfoContent>
                    <InfoTitle>Email Us</InfoTitle>
                    <InfoText>
                      <a href="mailto:info@yourdesignstudio.com">
                        info@yourdesignstudio.com
                      </a>
                    </InfoText>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <InfoIcon>
                    <FaClock />
                  </InfoIcon>
                  <InfoContent>
                    <InfoTitle>Working Hours</InfoTitle>
                    <InfoText>Mon - Fri: 9:00 AM - 6:00 PM</InfoText>
                  </InfoContent>
                </InfoItem>
              </InfoCardBody>
              <SocialLinks>
                <SocialLink href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </SocialLink>
                <SocialLink href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </SocialLink>
                <SocialLink href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </SocialLink>
                <SocialLink href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </SocialLink>
              </SocialLinks>
            </ContactInfoCard>
          </Col>

          <Col lg={7}>
            <ContactFormCard>
              <ContactFormHeader>Send Us a Message</ContactFormHeader>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name *"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your name.
                      </Form.Control.Feedback>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email *"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Form.Control
                        as="select"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Service *</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Exterior Design">Exterior Design</option>
                        <option value="Landscape Design">Landscape Design</option>
                        <option value="Animation Services">Animation Services</option>
                        <option value="Other">Other</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Please select a service.
                      </Form.Control.Feedback>
                    </FormGroup>
                  </Col>
                </Row>

                <FormGroup>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your Message *"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message.
                  </Form.Control.Feedback>
                </FormGroup>

                <SubmitButtonWrapper>
                  <SubmitButton 
                    type="submit" 
                    disabled={submitStatus === "loading"}
                  >
                    {submitStatus === "loading" ? "Sending..." : "Send Message"}
                  </SubmitButton>
                </SubmitButtonWrapper>

                {submitStatus === "success" && (
                  <SuccessMessage>
                    Thank you! Your message has been sent successfully.
                  </SuccessMessage>
                )}
              </Form>
            </ContactFormCard>
          </Col>
        </Row>
      </Container>
    </StyledContactSection>
  );
};

const StyledContactSection = styled.section`
  padding: 100px 0;
  background-color: #f9f9f9;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: #777;
`;

const ContactInfoCard = styled.div`
  background: linear-gradient(135deg, #333 0%, #111 100%);
  color: #fff;
  height: 100%;
  border-radius: 15px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(240, 192, 64, 0.1);
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -80px;
    right: -80px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(240, 192, 64, 0.1);
    z-index: 0;
  }
`;

const InfoCardHeader = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #f0c040;
  position: relative;
  z-index: 1;
`;

const InfoCardBody = styled.div`
  position: relative;
  z-index: 1;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
`;

const InfoIcon = styled.div`
  width: 45px;
  height: 45px;
  background-color: rgba(240, 192, 64, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  font-size: 18px;
  color: #f0c040;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f0c040;
    color: #222;
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #f0c040;
`;

const InfoText = styled.p`
  margin: 0;
  font-size: 15px;
  
  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #f0c040;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 40px;
  position: relative;
  z-index: 1;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 10px;
  color: #fff;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f0c040;
    color: #222;
    transform: translateY(-5px);
  }
`;

const ContactFormCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
`;

const ContactFormHeader = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #333;
`;

const FormGroup = styled(Form.Group)`
  margin-bottom: 20px;
  
  .form-control {
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    padding: 12px 15px;
    transition: all 0.3s ease;
    background-color: #f8f9fa;
    
    &:focus {
      box-shadow: none;
      border-color: #f0c040;
      background-color: #fff;
    }
    
    &::placeholder {
      color: #aaa;
    }
  }
  
  textarea.form-control {
    min-height: 150px;
    resize: none;
  }
`;

const SubmitButtonWrapper = styled.div`
  margin-top: 20px;
`;

const SubmitButton = styled(Button)`
  background-color: #f0c040;
  border: none;
  color: #222;
  padding: 12px 35px;
  font-weight: 600;
  border-radius: 30px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #222;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  &:active, &:focus {
    background-color: #222;
    color: #fff;
    box-shadow: none;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  text-align: center;
`;

export default ContactSection;