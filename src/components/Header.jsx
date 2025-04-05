import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderStyled className={scrolled ? "scrolled" : ""}>
      <Container>
        <Row className="header-row">
          <Col xs={2} md={4} className="social">
            <ul className="desktop-social">
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
            <div className="hamburger-menu">
              <button onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </Col>
          <Col xs={8} md={4} className="logo">
            <Link to={'/'}>
              <img
                width={300}
                src={logo}
                alt="Logo"
                className="animated-logo"
              />
            </Link>
          </Col>
          <Col xs={2} md={4} className="contact">
            <a href="tel:01629803900" className="phone-link">
              +880 1629 80 39 00
            </a>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            md={12}
            className={`menu flex justify-content-center ${
              isOpen ? "open" : ""
            }`}
          >
            <ul>
              <li>
                <Link to={'/'}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/interior'} onClick={() => setIsOpen(false)}>
                  Interior
                </Link>
              </li>
              <li>
                <Link to={'/exterior'} onClick={() => setIsOpen(false)}>
                  Exterior
                </Link>
              </li>
              <li>
                <Link to={'/landscape'} onClick={() => setIsOpen(false)}>
                  Landscape
                </Link>
              </li>
              <li>
                <Link to={'/animation'} onClick={() => setIsOpen(false)}>
                  Animation
                </Link>
              </li>
              <li>
                <Link to={'/contact'}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mobile-social">
              <ul>
                <li>
                  <a target="_blank" href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
              <a href="tel:01629803900" className="mobile-phone">
                01629803900
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 15px 0;
  transition: background-color 0.3s ease, padding 0.3s ease;

  &.scrolled {
    padding: 10px 0;
    background-color: rgba(0, 0, 0, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  .header-row {
    align-items: center;
    text-align: center;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(204, 204, 204, 0.3);

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  .hamburger-menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    button {
      background: transparent;
      border: none;
      color: #fff;
      font-size: 24px;
      cursor: pointer;
      padding: 5px;
      transition: color 0.3s ease;

      &:hover {
        color: #f0c040;
      }
    }

    @media (min-width: 768px) {
      display: none;
    }
  }

  .menu {
    margin-top: 15px;
    height: 0;
    overflow: hidden;
    transition: height 0.4s ease;

    &.open {
      height: auto;
      padding: 15px 0;
      background-color: rgba(0, 0, 0, 0.95);
      display: flex;
      flex-direction: column;
      align-items: start;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        width: 100%;
        text-align: center;

        a {
          color: #fff;
          text-decoration: none;
          text-align: left;
          font-size: 18px;
          font-weight: 500;
          padding: 10px;
          display: block;
          cursor: pointer;
          transition: color 0.3s ease, background-color 0.3s ease;

          &:hover {
            color: #000;
            background-color: #f0c040;
          }
        }
      }
    }

    .mobile-social {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      align-items: start;

      ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
        margin-bottom: 15px;

        li a {
          font-size: 22px;
          padding: 8px;

          &:hover {
            background-color: transparent;
            color: #f0c040;
          }
        }
      }

      .mobile-phone {
        color: #fff;
        font-size: 18px;
        padding: 8px 15px;
        border: 1px solid #f0c040;
        border-radius: 20px;
        text-decoration: none;
        margin-top: 10px;
        margin-left: 10px;
    

        &:hover {
          background-color: #f0c040;
          color: #000;
        }
      }
    }

    @media (min-width: 768px) {
      height: auto;
      overflow: visible;

      ul {
        flex-direction: row;
        justify-content: center;

        li {
          width: auto;
        }
      }

      .mobile-social {
        display: none;
      }
    }
  }

  .social {
    .desktop-social {
      display: none;
    }

    @media (min-width: 768px) {
      .desktop-social {
        display: flex;
        justify-content: flex-start;
        gap: 15px;
        list-style: none;
        padding: 0;
        margin: 0;

        a {
          color: #fff;
          font-size: 18px;
          transition: color 0.3s ease;

          &:hover {
            color: #f0c040;
          }
        }
      }
    }
  }

  .logo {
    display: flex;
    justify-content: center;

    .animated-logo {
      max-height: 80px;
      max-width: 100%;
      animation: logoFloat 3s ease-in-out infinite;
      transition: transform 0.3s ease, max-height 0.3s ease;
    }

    @media (min-width: 768px) {
      .animated-logo {
        max-height: 100px;
      }
    }
  }

  // Logo float animation
  @keyframes logoFloat {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0);
    }
  }

  // Additional hamburger menu animation
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .contact {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      justify-content: flex-end;

      .phone-link {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        padding: 8px 15px;
        border: 1px solid #f0c040;
        border-radius: 20px;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
          background-color: #f0c040;
          color: #000;
        }
      }
    }
  }

  // When header is scrolled, make the logo smaller
  &.scrolled .logo .animated-logo {
    max-height: 70px;

    @media (min-width: 768px) {
      max-height: 80px;
    }
  }
`;
