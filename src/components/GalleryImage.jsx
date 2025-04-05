// ImageGallery.jsx - Responsive Implementation
import LightGallery from "lightgallery/react";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Import lightgallery styles and plugins
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Col, Container, Row } from "react-bootstrap";

// Sample image data
const images = [
  {
    id: 1,
    original:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Nature landscape",
  },
  {
    id: 2,
    original:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "City skyline",
  },
  {
    id: 3,
    original:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mountain view",
  },
  {
    id: 4,
    original:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Beach sunset",
  },
  {
    id: 5,
    original:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Forest path",
  },
  {
    id: 6,
    original:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Desert landscape",
  },
  {
    id: 7,
    original:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Winter scene",
  },
  {
    id: 8,
    original:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Autumn colors",
  },
];

// Styled Components
const GallerySection = styled.section`
  padding: 10rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  
  @media (max-width: 576px) {
    padding: 1.5rem 0;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
`;

// Styled components for the gallery items
const GalleryItem = styled.div`
  height: 100%;
  
  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
`;

const ImageContainer = styled.a`
  display: block;
  height: 220px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    height: 180px;
  }
  
  @media (max-width: 576px) {
    height: 160px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

// Loading indicator
const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ImageGallery = () => {
  const lightGalleryRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  
  // Track image loading
  useEffect(() => {
    const totalImages = images.length;
    if (imagesLoaded >= totalImages) {
      setLoading(false);
    }
  }, [imagesLoaded]);
  
  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Force LightGallery to recalculate dimensions
      if (lightGalleryRef.current) {
        lightGalleryRef.current.refresh();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <GallerySection>
      {loading && (
        <LoadingOverlay>
          <Spinner />
        </LoadingOverlay>
      )}
      
      <Container>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          selector=".gallery-item"
          elementClassNames="gallery-container"
          ref={lightGalleryRef}
          licenseKey="your-license-key" // Optional, remove if not needed
          mode="lg-fade"
          // Mobile-friendly settings
          mobileSettings={{
            controls: true,
            showCloseIcon: true,
            download: false
          }}
        >
          <Row className="g-3 g-md-4">
            {images.map((image) => (
              <Col lg={4} md={4} sm={6} xs={6} key={image.id}>
                <GalleryItem>
                  <ImageContainer
                    className="gallery-item"
                    href={image.original}
                    data-sub-html={`<h4>${image.alt}</h4>`}
                  >
                    <StyledImage 
                      src={image.thumbnail} 
                      alt={image.alt} 
                      onLoad={handleImageLoad}
                      loading="lazy"
                    />
                  </ImageContainer>
                </GalleryItem>
              </Col>
            ))}
          </Row>
        </LightGallery>
      </Container>
    </GallerySection>
  );
};

export default ImageGallery;