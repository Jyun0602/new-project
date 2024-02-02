// AreasList.js

import React from "react";
import { padPrice } from "./helpers"; // 假設 padPrice 函數定義在 helpers.js 中
import Intro1 from "./Intro/Intro1";

function AreasList(props) {
  const { areas } = props;

  return (
    <ul className="areas">
      {areas.map((area) => (
        <li key={area.id} className="area">
          {/* <img src={area.image} /> */}
          {/* <Intro1 /> */}

          <a href="#">
            <img src={area.image} />
          </a>
          <div className="area-details">
            <header>{area.title}</header>
            <div className="category">{area.category}</div>
            <div className="price">{`$${padPrice(area.price)}`}</div>{" "}
            {/* 使用 padPrice 函數 */}
            <div className="feature">{area.feature}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default AreasList;
