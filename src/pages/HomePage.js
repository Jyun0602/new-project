import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
// import Snowfall from "../Snowfall";
import textJapanAreaImage from "../images/text-japan-area.svg";
import btnAreaImage from "../images/btn-area.svg";
import textIntroImage from "../images/text-intro.svg";
import btnIntroImage from "../images/btn-intro.svg";
import textEquitmentImage from "../images/text-equitment.svg";
import btnEquipmentImage from "../images/btn-equipment.svg";
import textCommentsImage from "../images/text-comments.svg";
import btnMsgImage from "../images/btn-msg.svg";

export default function HomePage() {
  useEffect(() => {
    const imageList = [
      textJapanAreaImage,
      btnAreaImage,
      textIntroImage,
      btnIntroImage,
      textEquitmentImage,
      btnEquipmentImage,
      textCommentsImage,
      btnMsgImage,
    ];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }, []);
  return (
    <>
      <Navbar />
      <section id="index">
        {/* <Snowfall className="snowfall" /> */}
        <div className="btn1">
          <Link to="./AreaPage">
            <figure className="textBtn1">
              <img src={textJapanAreaImage} alt="日本滑雪場" />
            </figure>
            <figure>
              <img src={btnAreaImage} alt="連結至AreaPage" />
            </figure>
          </Link>
        </div>
        <div className="btn2">
          <Link to="./IntroPage">
            <figure className="textBtn2">
              <img src={textIntroImage} alt="滑雪介紹" />
            </figure>
            <figure>
              <img src={btnIntroImage} alt="連結至IntroPage" />
            </figure>
          </Link>
        </div>
        <div className="btn3">
          <Link to="./EquipmentPage">
            <figure className="textBtn3">
              <img src={textEquitmentImage} alt="裝備介紹" />
            </figure>
            <figure>
              <img src={btnEquipmentImage} alt="連結至EquipmentPage" />
            </figure>
          </Link>
        </div>
        <div className="btn4">
          <Link to="./CommentsPage">
            <figure className="textBtn4">
              <img src={textCommentsImage} alt="交流專區" />
            </figure>
            <figure>
              <img src={btnMsgImage} alt="連結至CommentsPage" />
            </figure>
          </Link>
        </div>
      </section>
      {/* <Snowfall /> */}
    </>
  );
}
