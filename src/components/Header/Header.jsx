import { useState, useEffect } from "react";
import "./header.css";

function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="top-part">
        <h1>ORANGETAN</h1>
        <a href="https://gdbrowser.com/u/orangetan3422">
          <img
            className="gd-icon"
            src={`${import.meta.env.BASE_URL}cube_23.png`}
            alt="orang"
          />
        </a>
      </div>

      <div className="socials-links">
        <a href="https://www.youtube.com/@orangetangd">
          <img
            className="link-img"
            src={`${import.meta.env.BASE_URL}icons/youtube.svg`}
            alt="yt"
          />
        </a>
        <a href="https://github.com/ORANGETAN3422">
          <img
            className="link-img"
            src={`${import.meta.env.BASE_URL}icons/github.svg`}
            alt="github"
          />
        </a>
        <a href="https://www.reddit.com/user/Orangtan/">
          <img
            className="link-img"
            src={`${import.meta.env.BASE_URL}icons/reddit.svg`}
            alt="reddit"
          />
        </a>
      </div>

      <br />
      <br />
      <div className={`down-arrow ${isVisible ? "visible" : "hidden"}`}>
        <img className="down-arrow-img" src="/down-arrow.png" alt="V" />
      </div>
    </header>
  );
}

export default Header;
