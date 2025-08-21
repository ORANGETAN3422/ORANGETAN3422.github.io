import React, { useState, useEffect } from "react";
import ProjectContainer from "../Projects/ProjectContainer";
import HardestCompletions from "../HardestCompletions/HardestCompletions";
import "./main-slideshow.css";

const MainSlideshow = () => {
  const [currentActive, setCurrentActive] = useState(0);
  const [direction, setDirection] = useState("right");
  const [hasScrolled, setHasScrolled] = useState(false);

  const scrollDist = 60;

  const componentMap = {
    0: <ProjectContainer />,
    1: <HardestCompletions />
  };

  const maxIndex = Object.keys(componentMap).length - 1;

  const handleNext = () => {
    setDirection("right");
    setCurrentActive((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentActive((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > scrollDist) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`slideshow-wrapper ${hasScrolled ? "visible" : ""}`}>
      <button onClick={handlePrev} className="arrow-button">{'<'}</button>
      <div key={currentActive} className={`slide-wrapper slide-${direction}`}>
        {componentMap[currentActive]}
      </div>
      <button onClick={handleNext} className="arrow-button">{'>'}</button>
    </div>
  );
};

export default MainSlideshow;
