import GlobalStyles from "../GlobalStyles";
import "./App.css";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/home/Banner";
import FeaturedProjects from "./components/home/FeaturedProjects";
import ServiceCards from "./components/home/Services";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Banner/>
      <ServiceCards/>
      <FeaturedProjects/>
      <ContactSection/>
      <Footer/>
    </>
  );
}

export default App;
