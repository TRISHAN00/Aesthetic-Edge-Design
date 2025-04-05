import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import bgImage from "../../assets/home/bg-image.jpg";

export default function Banner() {
  return (
    <BannerStyled className="banner-area" bg={bgImage}>
      <Container className="content-wrapper">
        <Row className="banner-area__text">
          <h1>Luxora Architects & Design Solution</h1>
          <p>
            Teaching his son Igor, who took over. Teaching Igor, who took over.
          </p>
        </Row>
      </Container>
    </BannerStyled>
  );
}

const BannerStyled = styled.header`
overflow: hidden;
  &.banner-area {
    position: relative;
    background-image: ${({ bg }) => `url(${bg})`};
    background-size: cover;
    background-position: center;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1;
    overflow: hidden;

    // Dark overlay
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.6); /* Adjust darkness here */
      z-index: -1;
    }
  }

  .content-wrapper {
    width: 100%;
    z-index: 2;
  }

  .banner-area__text {
    padding: 0 15px;

    h1 {
      font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
      font-weight: 500;
      font-size: 100px;
      line-height: 100px;
      text-transform: capitalize;
      color: #fff;

      @media (max-width: 1200px) {
        font-size: 70px;
        line-height: 80px;
      }

      @media (max-width: 768px) {
        font-size: 50px;
        line-height: 60px;
      }

      @media (max-width: 480px) {
        font-size: 36px;
        line-height: 44px;
      }
    }

    p {
      color: #fff;
      font-size: 20px;
      max-width: 650px;
      margin: 20px auto 0;

      @media (max-width: 768px) {
        font-size: 18px;
      }

      @media (max-width: 480px) {
        font-size: 16px;
      }
    }
  }
`;
