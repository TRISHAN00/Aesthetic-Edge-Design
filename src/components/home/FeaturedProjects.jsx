import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Green Valley Residences",
      category: "Interior",
      status: "Ongoing",
      image:
        "https://img.freepik.com/free-photo/covered-lifestyle-garden-with-indoor-outdoor-living_1127-3426.jpg?t=st=1743855630~exp=1743859230~hmac=8ca1474ebec57cca48168e21fa18aafe9e7439b304cb359a38edf60715bfa8a7&w=996", // Replace with your actual image path
    },
    {
      id: 2,
      title: "Green Valley Residences",
      category: "Exterior",
      status: "Completed",
      image:
        "https://img.freepik.com/free-vector/houseplants-indoor-background-with-different-vegetation-realistic-vector-illustration_1284-81187.jpg?t=st=1743855643~exp=1743859243~hmac=ee9718309781503ff0cd861ecdacccb628585c36dce346af51ac8d61caaebd1b&w=826", // Replace with your actual image path
    },
    {
      id: 3,
      title: "Green Valley Residences",
      category: "Exterior",
      status: "Ongoing",
      image:
        "https://img.freepik.com/free-photo/dreamy-interior-mall_23-2151591452.jpg?t=st=1743855654~exp=1743859254~hmac=839db70ecd42cdc41c12cab14aaba67bb3cd41cd27de265a8d73051b4c85e2f7&w=996", // Replace with your actual image path
    },
    {
      id: 4,
      title: "Green Valley Residences",
      category: "Interior",
      status: "Completed",
      image:
        "https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151118949.jpg?t=st=1743855670~exp=1743859270~hmac=f6c6992245b4cef04b856c641531934337ef32b958e9f0be683c0fd7b3c03e29&w=826", // Replace with your actual image path
    },
    {
      id: 5,
      title: "Green Valley Residences",
      category: "Landscape",
      status: "Ongoing",
      image:
        "https://img.freepik.com/free-photo/elegant-black-minimal-interior-design_23-2151913264.jpg?t=st=1743855696~exp=1743859296~hmac=018c3433b7764b71106c81d079172c85be48a285ee4a3c0610380368f178103c&w=900", // Replace with your actual image path
    },
    {
      id: 6,
      title: "Green Valley Residences",
      category: "Interior",
      status: "Ongoing",
      image:
        "https://img.freepik.com/free-photo/covered-lifestyle-garden-with-indoor-outdoor-living_1127-3426.jpg?t=st=1743855630~exp=1743859230~hmac=8ca1474ebec57cca48168e21fa18aafe9e7439b304cb359a38edf60715bfa8a7&w=996", // Replace with your actual image path
    },
    {
      id: 7,
      title: "Green Valley Residences",
      category: "Exterior",
      status: "Completed",
      image:
        "https://img.freepik.com/free-vector/houseplants-indoor-background-with-different-vegetation-realistic-vector-illustration_1284-81187.jpg?t=st=1743855643~exp=1743859243~hmac=ee9718309781503ff0cd861ecdacccb628585c36dce346af51ac8d61caaebd1b&w=826", // Replace with your actual image path
    },
    {
      id: 8,
      title: "Green Valley Residences",
      category: "Exterior",
      status: "Ongoing",
      image:
        "https://img.freepik.com/free-photo/dreamy-interior-mall_23-2151591452.jpg?t=st=1743855654~exp=1743859254~hmac=839db70ecd42cdc41c12cab14aaba67bb3cd41cd27de265a8d73051b4c85e2f7&w=996", // Replace with your actual image path
    },
    {
      id: 9,
      title: "Green Valley Residences",
      category: "Interior",
      status: "Completed",
      image:
        "https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151118949.jpg?t=st=1743855670~exp=1743859270~hmac=f6c6992245b4cef04b856c641531934337ef32b958e9f0be683c0fd7b3c03e29&w=826", // Replace with your actual image path
    },
    {
      id: 10,
      title: "Green Valley Residences",
      category: "Landscape",
      status: "Ongoing",
      image:
        "https://img.freepik.com/free-photo/elegant-black-minimal-interior-design_23-2151913264.jpg?t=st=1743855696~exp=1743859296~hmac=018c3433b7764b71106c81d079172c85be48a285ee4a3c0610380368f178103c&w=900", // Replace with your actual image path
    },
  ];

  return (
    <SectionWrapper>
      <Container>
        <SectionHeader>
          <SectionTag>FEATURED PROJECTS</SectionTag>
          <SectionTitle>Our Signature Spaces</SectionTitle>
        </SectionHeader>

        <SliderContainer>
          <StyledSwiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard>
                  <ProjectImage src={project.image} alt={project.title} />
                  <ProjectInfo>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectMeta>
                      <ProjectCategory>{project.category}</ProjectCategory>
                      <ProjectStatus $status={project.status}>
                        {project.status}
                      </ProjectStatus>
                    </ProjectMeta>
                  </ProjectInfo>
                </ProjectCard>
              </SwiperSlide>
            ))}
          </StyledSwiper>
        </SliderContainer>
      </Container>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  padding: 80px 0;
  background-color: #f2eee5; /* Light beige background from your design */
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const SectionTag = styled.p`
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #777;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: #333;
`;

const SliderContainer = styled.div`
  position: relative;
  margin: 0 -15px;
`;

const StyledSwiper = styled(Swiper)`
  padding-bottom: 50px;

  .swiper-button-next,
  .swiper-button-prev {
    color: #333;
    background: rgba(255, 255, 255, 0.8);
    width: 40px;
    height: 40px;
    border-radius: 50%;

    &:after {
      font-size: 18px;
    }

    &:hover {
      background: white;
    }
  }

  .swiper-pagination-bullet {
    background: #999;
    opacity: 0.5;

    &-active {
      background: #333;
      opacity: 1;
    }
  }
`;

const ProjectCard = styled.div`
  border-radius: 0;
  overflow: hidden;
  position: relative;
  height: 300px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: 500;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const ProjectCategory = styled.span`
  opacity: 0.9;
`;

const ProjectStatus = styled.span`
  color: ${(props) => (props.$status === "Completed" ? "#a8e890" : "#f9d949")};
  font-weight: 500;
`;

export default FeaturedProjects;
