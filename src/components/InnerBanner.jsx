// components/common/InnerBanner.jsx

import React from "react";
import styled from "styled-components";

const BannerWrapper = styled.section`
  width: 100%;
  height: 650px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4); /* dark overlay */
    z-index: 1;
  }
`;

const BannerTitle = styled.h1`
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`;

const InnerBanner = ({ title, bg }) => {
  return (
    <BannerWrapper bg={bg}>
      <BannerTitle>{title}</BannerTitle>
    </BannerWrapper>
  );
};

export default InnerBanner;
