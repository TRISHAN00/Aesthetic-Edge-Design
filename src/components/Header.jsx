import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader className="header-area">
      <div className="container">
        <div className="row">
          <div className="header-area__top">
            <div className="header-area__logo">
              <a href="#">
                <img src="logo.png" alt="logo" />
              </a>
            </div>
            <div className="header-area__menu">
              <ul className="nav">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="header-area__call">
              <a href="tel:+8801716797979">+88 01716 797979</a>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 20px 0;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .header-area__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-area__logo img {
    max-height: 50px;
  }

  .nav {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;

    li a {
      text-decoration: none;
      color: #333;
      font-weight: 500;

      &:hover {
        color: #007bff;
      }
    }
  }
`;
