import React from "react";
import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollToTopButton(true);
      } else {
        setScrollToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="gotopbtn">
      {scrollToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "50px",
          }}
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
