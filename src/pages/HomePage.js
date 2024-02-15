import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Snowfall from "../Snowfall";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <section id="index">
        {/* <Snowfall className="snowfall" /> */}
        <div className="btn1">
          <Link to="/AreaPage">
            <figure className="textBtn1">
              <img src="/images/日本滑雪場32px.svg" alt="日本滑雪場" />
            </figure>
            <figure>
              <img src="/images/btn-area.svg" alt="連結至AreaPage" />
            </figure>
          </Link>
        </div>
        <div className="btn2">
          <Link to="/IntroPage">
            <figure className="textBtn2">
              <img src="/images/text-intro.svg" alt="滑雪介紹" />
            </figure>
            <figure>
              <img src="/images/btn-intro.svg" alt="連結至IntroPage" />
            </figure>
          </Link>
        </div>
        <div className="btn3">
          <Link to="/EquipmentPage">
            <figure className="textBtn3">
              <img src="/images/text-equitment.svg" alt="裝備介紹" />
            </figure>
            <figure>
              <img src="/images/btn-equipment.svg" alt="連結至EquipmentPage" />
            </figure>
          </Link>
        </div>
        <div className="btn4">
          <Link to="/CommentsPage">
            <figure className="textBtn4">
              <img src="/images/text-comments.svg" alt="交流專區" />
            </figure>
            <figure>
              <img src="/images/btn-msg.svg" alt="連結至CommentsPage" />
            </figure>
          </Link>
        </div>
      </section>
      {/* <Snowfall /> */}
    </>
  );
}
