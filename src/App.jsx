import { BrowserRouter as Router } from "react-router-dom"
import {About,Contact,Hero,Navbar,Tech,Works,StarsCanvas} from "./components"
import { useEffect, useState } from "react";

const App = () => {
  const [isMobile,setIsMobile]=useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  }, [])

  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Tech/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          {!isMobile && <StarsCanvas/>}
        </div>
      </div>
    </Router>
  )
}

export default App