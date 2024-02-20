//篩等級和地區
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../checkbox/CheckboxArea.css";
import Pic1 from "./pic_1.jpg";
import Pic2 from "./pic_2.jpg";
import Pic3 from "./pic_3.jpg";
import Pic4 from "./pic_4.jpg";
import Pic5 from "./pic_5.jpg";
import Pic6 from "./pic_6.jpg";
const levelList = ["初級", "中級", "高級"];
const areaList = ["群馬縣", "新潟縣", "長野縣"];
const AREAS = [
  {
    id: 1,
    title: "萬座溫泉滑雪場",
    category: "群馬縣",
    feature:
      "在海拔1,994公尺的山頂，可以俯瞰壯麗的富士山風景。步行至附設的飯店只需短短一分鐘，享受溫泉和滑雪的樂趣。",
    price: "¥5500",
    snowfall: "40cm",
    image: Pic1,
    // link: "../Intro/Intro1",
    show: true,
    level: "中級",
    link: "/AreaPage/Intro/1",
  },
  {
    id: 2,
    title: "丸沼高原滑雪場",
    category: "群馬縣",
    feature:
      "海拔2,000公尺，擁有長達4公里的高品質雪道，分為22個不同難度的課程，適合初學者到高級玩家。",
    price: "¥6000",
    snowfall: "75cm",
    image: Pic2,
    // link: "../Intro/intro2",
    show: true,
    level: "中級",
    link: "/AreaPage/Intro/2",
  },
  {
    id: 3,
    title: "上越國際滑雪場",
    category: "新潟縣",
    feature:
      "佔地1000萬平方米，配置25條基本道和22條變化豐富的雪道，提供多樣滑道難度，適合各級玩家。",
    price: "¥5500",
    snowfall: "60cm",
    image: Pic3,
    // link: "../Intro/intro3",
    show: true,
    level: "中級",
    link: "/AreaPage/Intro/3",
  },
  {
    id: 4,
    title: "岩原滑雪場",
    category: "新潟縣",
    feature:
      "擁有600米寬闊平敞的初級滑雪道, 海拔高度較低, 加上交通便利 , 推薦給新手的滑雪場。",
    price: "¥6000",
    snowfall: "25cm",
    image: Pic4,
    // link: "../Intro/intro4",
    show: true,
    level: "初級",
    link: "/AreaPage/Intro/4",
  },
  {
    id: 5,
    title: "菅平高原滑雪場",
    category: "長野縣",
    feature:
      "是區域最大規模的兒童樂園，雪道寬廣且坡度平緩，有多項滑雪課程提供報名，適合初學者滑雪。",
    price: "¥5400",
    snowfall: "45cm",
    image: Pic5,
    // link: "../Intro/intro5",
    show: true,
    level: "初級",
    link: "/AreaPage/Intro/5",
  },
  {
    id: 6,
    title: "輕井澤王子大飯店滑雪場",
    category: "長野縣",
    feature:
      "擁有16種豐富的滑雪道設計與長達1,500公尺的滑雪道，雪具租借服務齊全，也有適合孩童的白雪樂園。",
    price: "¥8000",
    snowfall: "50cm",
    image: Pic6,
    // link: "../Intro/intro6",
    show: true,
    level: "高級",
    link: "/AreaPage/Intro/6",
  },
];
// import { AREAS, levelList, areaList } from "./data";
export default function App() {
  const [areaData, setAreaData] = useState(AREAS);
  // const [level, setLevel] = useState("");
  const [area, setArea] = useState([]);
  const [level, setLevel] = useState([]);
  // const handleLevel = (e) => {
  //   setLevel(e);
  //   setAreaData((areaData) =>
  //     areaData.map((item) =>
  //       item.level !== e ? { ...item, show: !item.show } : item
  //     )
  //   );
  // };
  const handleToggleArea = (event) => {
    const item = event.target;
    setArea(
      (area) =>
        item.checked === true
          ? [...area, item.id] //這次勾選 => 加進陣列
          : area.filter((i) => i !== item.id) // 本來已經在陣列裡被取消勾選 => 從陣列裡扣掉
    );
  };

  const handleToggleLevel = (event) => {
    const item = event.target;
    setLevel((level) =>
      item.checked === true
        ? [...level, item.id]
        : level.filter((i) => i !== item.id)
    );
  };

  useEffect(() => {
    if (area.length !== 0 && level.length !== 0) {
      setAreaData(
        AREAS.filter(
          (AREAS) =>
            area.includes(AREAS.category) && level.includes(AREAS.level)
        )
      );
    } else if (area.length === 0 && level.length !== 0) {
      setAreaData(AREAS.filter((AREAS) => level.includes(AREAS.level)));
    } else if (area.length !== 0 && level.length === 0) {
      setAreaData(AREAS.filter((AREAS) => area.includes(AREAS.category)));
    } else {
      setAreaData(AREAS);
    }
  }, [area, level]);

  return (
    <>
      <div className="all-checkbox">
        <div
          style={{
            display: "flex",
            position: "sticky",
            zIndex: 10,
            top: "100px",
            marginBottom: "15px",
          }}
        >
          {areaList.map((item) => (
            <div key={item}>
              <input
                type="checkbox"
                id={item}
                name={item}
                value={item}
                onChange={(item) => handleToggleArea(item)}
                image={item}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            position: "sticky",
            zIndex: 10,
            top: "116px",
          }}
        >
          {levelList.map((item) => (
            <div key={item}>
              <input
                type="checkbox"
                id={item}
                name={item}
                value={item}
                onChange={(item) => handleToggleLevel(item)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="App">
        <div style={{ marginTop: "18vh" }}>
          <ul className="allinfo">
            {areaData.map((item, index) =>
              item.show === true ? (
                <li key={`li-${index}`} className="areas">
                  <div className="content-box">
                    <p className="areacategory">{item.category}</p>
                    <Link to={item.link}>
                      <figure className="areamask">
                        <img src={item.image} alt={item.title} />
                      </figure>
                    </Link>
                    <p className="areatitle">{item.title}</p>

                    <div className="infolist">
                      <p>特色:{item.feature}</p>
                      <p>纜車票:{item.price}</p>
                      <p>降雪量:{item.snowfall}</p>
                    </div>
                  </div>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
