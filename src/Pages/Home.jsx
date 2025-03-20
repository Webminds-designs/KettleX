import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import LidSection from "../components/LidSection";
import Hero from "../components/Hero";
import AboutUs from "../components/Aboutus";
import WhyChooseUs from "../components/WhyChooseUs";
import TechInfused from "../components/TechInfused";
import HowToUse from "../components/HowToUse";

function Home() {
  return (

    <div className="overflow-hidden">
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="aboutus">
        <AboutUs />
      </section>

      <section id="whychooseus">
        <WhyChooseUs />
      </section>

      <section>
        <TechInfused />
      </section>

      <section>
        <HowToUse />
      </section>

      <section>
        <LidSection />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
