import React from "react";
import ContactSection from "../components/ContactSection";
import Banner from "../components/home/Banner";
import FeaturedProjects from "../components/home/FeaturedProjects";
import ServiceCards from "../components/home/Services";

export default function Home() {
  return (
    <>
      <Banner />
      <ServiceCards />
      <FeaturedProjects />
      <ContactSection/>
    </>
  );
}
