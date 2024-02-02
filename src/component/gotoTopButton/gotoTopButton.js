import React from "react";
import "./gotoTopButton.css";

export default ({ TopRef }) => {
  const scrollGoTo = (ref) =>
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });

  return (
    <div className="gotopbtn" onClick={() => scrollGoTo()}>
      <i className="fas fa-arrow-up" />
    </div>
  );
};
