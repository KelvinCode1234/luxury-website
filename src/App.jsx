import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Explore from "./Components/Explore/Explore";
import Box from "./Components/Box/Box";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Copyright from "./Components/Copyright/Copyright";

const App = () => {
  const [loading, setLoading] = useState(true); 
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  const exploreRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 8000);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <div ref={homeRef}>
                <Background playStatus={playStatus} heroCount={heroCount} />
                <Navbar
                  onHomeClick={scrollToHome}
                  onExploreClick={scrollToExplore}
                  onAboutClick={scrollToAbout}
                  onContactClick={scrollToContact}
                />
                <>
                  <Hero
                    setPlayStatus={setPlayStatus}
                    heroData={heroData[heroCount]}
                    heroCount={heroCount}
                    setHeroCount={setHeroCount}
                    playStatus={playStatus}
                  />
                  <div ref={exploreRef}>
                    <Explore />
                  </div>
                  <Box />
                  <div ref={aboutRef}>
                    <About />
                  </div>
                  <div ref={contactRef}>
                    <Contact />
                  </div>
                  <Copyright />
                </>
              </div>
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;



