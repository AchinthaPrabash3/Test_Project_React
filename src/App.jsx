import AboutUs from "./AboutUs";
import Header from "./Header";
import Hero from "./Hero";
import AboutSection from "./About";
import WahtWeDo from "./WhatDoWeDo";
import Projects from "./OurProjects";
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
      </main>
    </>
  );
}

export default App;
