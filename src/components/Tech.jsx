import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { useEffect, useState } from "react";

const Tech = () => {
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

  const displayedTechnologies = isMobile ? technologies.slice(0, 6) : technologies;
  
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {displayedTechnologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")