import AboutUs from "./AboutUs";
import Header from "./Header";
import Hero from "./Hero";
import AboutSection from "./About";
import WahtWeDo from "./WhatDoWeDo";
import Projects from "./OurProjects";
import Statement from "./Statement";
import Footer from "./Footer";
function App() {
  return (
    <>
      <main className="container mx-auto">
        <Header />
        <Hero />
        <AboutSection />
        <WahtWeDo />
        <AboutUs />
        <Projects />
        <Statement />
        <Footer />
      </main>
    </>
  );
}

export default App;
