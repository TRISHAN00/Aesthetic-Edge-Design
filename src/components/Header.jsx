import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import styled from "styled-components";


export default function Header() {
  return (
    <HeaderStyled className="header-area">
      <Container>
        <Row>
          <div className="header-area__social">
            <ul className="flex align-items-center " >
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#">
                <FaYoutube />
                </a>
              </li>
              <li>
                <a href="#">
                <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="header-area__logo">
            <a href="">Logo</a>
          </div>
        </Row>
      </Container>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header``;
