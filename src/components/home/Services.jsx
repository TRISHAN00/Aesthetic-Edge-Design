import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Note: You'll need actual images in your project
// These are placeholders for the service backgrounds
const serviceData = [
  {
    id: 1,
    title: "Interior Design",
    description:
      "Transform your indoor spaces with our premium interior design solutions",
    image:
      "https://img.freepik.com/free-photo/interior-design-with-armchair-potted-plant_23-2149427983.jpg?t=st=1743854199~exp=1743857799~hmac=d0d7a5683331c71009a0872b80b5ceae7b76d8d43385e719520f045e48659ba0&w=740",
    link: "/interior",
  },
  {
    id: 2,
    title: "Exterior Design",
    description: "Create lasting impressions with stunning exterior aesthetics",
    image:
      "https://img.freepik.com/free-vector/big-office-building_1308-83082.jpg?t=st=1743854430~exp=1743858030~hmac=e52b84fc4c9d8b2fcea59ed059f36bb2da0e9f295237fd0fdbd10d508087f4c8&w=740", // Replace with actual path
    link: "/exterior",
  },
  {
    id: 3,
    title: "Landscape Design",
    description:
      "Breathtaking outdoor spaces that blend nature with architecture",
    image:
      "https://img.freepik.com/free-photo/ai-generated-modern-styled-entryway_23-2150692331.jpg?t=st=1743854482~exp=1743858082~hmac=e413e8ec4b8dfe5ec11bcf447b9cf17af094942a62d6fb190a1c8d6ad791be95&w=740", // Replace with actual path
    link: "/landscape",
  },
  {
    id: 4,
    title: "Animation Services",
    description:
      "Bring your vision to life with cutting-edge 3D and 2D animations",
    image:
      "https://img.freepik.com/free-psd/3d-rendering-room-night_23-2150838221.jpg?t=st=1743854532~exp=1743858132~hmac=f1252cc550eb9741a1bf21fb29961e1accb73ce60d5a820d2831112ad83e0a37&w=826", // Replace with actual path
    link: "/animation",
  },
];

const ServiceCards = () => {
  return (
    <ServiceSection>
      <Container>
        <SectionTitle>Our Services</SectionTitle>
        <SectionSubtitle>
          Discover how we can transform your space
        </SectionSubtitle>

        <Row>
          {serviceData.map((service) => (
            <Col key={service.id} xs={12} sm={6} lg={3} className="mb-4">
              <Link to={service.link} >
                <ServiceCard bgImage={service.image}>
                  <CardOverlay>
                    <CardContent>
                      <img
                        className="mb-4 icon "
                        height={100}
                        width={100}
                        src="/public/fav.svg"
                        alt=""
                      />
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                      <CardButton>Learn More</CardButton>
                    </CardContent>
                  </CardOverlay>
                </ServiceCard>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </ServiceSection>
  );
};

const ServiceSection = styled.section`
  padding: 120px 0;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  font-size: 36px;
  font-weight: 700;
  color: #333;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  margin-bottom: 50px;
  font-size: 18px;
  color: #666;
`;

const ServiceCard = styled.div`
  position: relative;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.7)
    );
    z-index: 1;
    transition: opacity 0.5s ease;
    opacity: 0.7;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);

    &:before {
      opacity: 0.5;
    }

    .service-icon {
      transform: translateY(-10px);
    }
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.5s ease;

  img.icon {
    opacity: 0.3;
  }

  ${ServiceCard}:hover & {
    transform: translateY(-15px);
  }
`;

const CardIcon = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #f0c040;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  transition: transform 0.5s ease, background-color 0.3s ease;

  /* You can add specific icons for each service using ::before */
  /* For example: */
  &::before {
    content: "";
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const CardTitle = styled.h3`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  transition: color 0.3s ease;

  ${ServiceCard}:hover & {
    color: #f0c040;
  }
`;

const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  font-size: 16px;
  opacity: 0;
  max-height: 0;
  transition: opacity 0.5s ease, max-height 0.5s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  ${ServiceCard}:hover & {
    opacity: 1;
    max-height: 100px;
  }
`;

const CardButton = styled.button`
  background-color: #f0c040;
  color: #000;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease, background-color 0.3s ease;

  ${ServiceCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    background-color: #fff;
  }
`;

export default ServiceCards;
