import React from "react";
import ContactSection from "../components/ContactSection";
import Banner from "../components/home/Banner";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Services from "../components/home/Services";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <FeaturedProjects />
      <ContactSection/>
    </>
  );
}
