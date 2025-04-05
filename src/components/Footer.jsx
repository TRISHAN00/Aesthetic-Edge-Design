import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyled>
      <div className="container">
        {/* Footer Service Grid */}
        <div className="footer-grid">
          <div className="footer-section">
            <h4>Interior Design</h4>
            <ul>
              <li><a href="#">Residential Spaces</a></li>
              <li><a href="#">Office Interiors</a></li>
              <li><a href="#">Modular Furniture</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Exterior Design</h4>
            <ul>
              <li><a href="#">Facade Concepts</a></li>
              <li><a href="#">Outdoor Living</a></li>
              <li><a href="#">Lighting Solutions</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Landscape Design</h4>
            <ul>
              <li><a href="#">Garden Layouts</a></li>
              <li><a href="#">Hardscape Planning</a></li>
              <li><a href="#">Water Features</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Animation Design</h4>
            <ul>
              <li><a href="#">3D Modeling</a></li>
              <li><a href="#">Walkthroughs</a></li>
              <li><a href="#">Concept Videos</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="contact-info">
            <p><FaPhoneAlt /> +880 1234 567890</p>
            <p><FaEnvelope /> info@luxoradesigns.com</p>
          </div>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Luxora Designs. All rights reserved.
          </p>
        </div>
      </div>
    </FooterStyled>
  );
}


const FooterStyled = styled.footer`
  background-color: #111;
  color: #fff;
  padding: 60px 20px 30px;

  .container {
    max-width: 1200px;
    margin: auto;
  }

  .footer-logo {
    text-align: center;
    margin-bottom: 40px;

    img {
      max-width: 180px;
      height: auto;
      filter: brightness(0) invert(1); // Makes logo white if it's black
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    @media (max-width: 480px) {
      img {
        max-width: 140px;
      }
    }
  }


  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 40px;
  }

  .footer-section {
    h4 {
      font-size: 20px;
      margin-bottom: 15px;
      position: relative;

      &::after {
        content: "";
        display: block;
        width: 40px;
        height: 2px;
        background-color: #f0c040;
        margin-top: 8px;
      }
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 10px;

        a {
          color: #ccc;
          text-decoration: none;
          font-size: 15px;
          position: relative;
          transition: all 0.3s ease;

          &::before {
            content: "→";
            position: absolute;
            left: -20px;
            opacity: 0;
            transition: all 0.3s ease;
            color: #f0c040;
          }

          &:hover {
            color: #f0c040;
            padding-left: 10px;

            &::before {
              opacity: 1;
              left: 0;
            }
          }
        }
      }
    }
  }

  .footer-bottom {
    margin-top: 40px;
    font-size: 14px;
    color: #888;

    .contact-info {
      margin-bottom: 15px;
      display: flex;
      justify-content: center;
      gap: 30px;

      p {
        margin: 6px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        color: #ccc;

        svg {
          color: #f0c040;
        }
      }
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-bottom: 15px;

      a {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: #222;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        color: #f0c040;
        transition: 0.3s ease;

        &:hover {
          background-color: #f0c040;
          color: #111;
        }
      }
    }

    .copyright {
      color: #888;
    }
  }


  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .footer-bottom {
      margin-top: 30px;
    }
  }

  @media (max-width: 480px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }
  }
`;
