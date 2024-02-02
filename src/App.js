import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import AreaPage from "./pages/AreaPage";
import IntroPage from "./pages/IntroPage";
import EquipmentPage from "./pages/EquipmentPage";
// import Equit from "./pages/Equit";
import CommentsPage from "./pages/CommentsPage";
// import form 'CSS';
import "./styles/style.css";
import "./styles/Home.css";
import Navbar from "./component/Navbar/Navbar";
// import GotoTopButton from "./component/gotoTopButton/gotoTopButton";
// import Snowfall from "./Snowfall";

export default function App() {
  return (
    <BrowserRouter>
      {/* <canvas id="canvas"></canvas> */}
      {/* <GotoTopButton /> */}
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Snowfall />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="AreaPage" element={<AreaPage />} />
        <Route path="IntroPage" element={<IntroPage />} />
        <Route path="EquipmentPage" element={<EquipmentPage />} />
        {/* <Route path="Equit" element={<Equit />} /> */}
        <Route path="CommentsPage" element={<CommentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// import "./styles/style.css";
// import "./styles/IndexBtn.css";
// // import Snowfall from "./Snowfall";
// import IndexBtn from "./IndexBtn";
// // import AreaPage from "./AreaPage";
// import IntroPagePage from "./IntroPage";
// import EquitmentPage from "./EquitmentPage";

// // import Navbar from "./Navbar";

// function App() {
//   return (
//     <div>
//       <canvas id="canvas"></canvas>

//       <IndexBtn />
//       {/* <Navbar /> */}
//     </div>
//   );
// }

// export default App;

// import "./style.css";

// import React, { useState } from "react";

// function App() {
//   const [selectedValue, setSelectedValue] = useState("pic_1");
//   const [placeTitle1, setPlaceTitle1] = useState("");
//   const [placeTitle2, setPlaceTitle2] = useState("");
//   const [description, setDescription] = useState("");
//   const [ticketInfo, setTicketInfo] = useState([]);

//   const handleSelectChange = (event) => {
//     const x = event.target.value;
//     setSelectedValue(x);

//     // 更新文字和內容
//     let newPlaceTitle1 = "";
//     let newPlaceTitle2 = "";
//     let newDescription = "";
//     let newTicketInfo = [];

//     switch (x) {
//       case "pic_1":
//         newPlaceTitle1 = "萬座溫泉";
//         newPlaceTitle2 = "滑雪場";
//         newDescription =
//           "在海拔1,994公尺的山頂，可以俯瞰壯麗的富士山風景。步行至附設的飯店只需短短一分鐘，享受溫泉和滑雪的樂趣。";
//         newTicketInfo = ["纜車票", "¥5500", "降雪量", "40cm"];
//         break;
//       case "pic_2":
//         newPlaceTitle1 = "丸沼高原";
//         newPlaceTitle2 = "滑雪場";
//         newDescription =
//           "海拔2,000公尺，擁有長達4公里的高品質雪道，分為22個不同難度的課程，適合初學者到高級玩家。";
//         newTicketInfo = ["纜車票", "¥6000", "降雪量", "75cm"];
//         break;
//       case "pic_3":
//         newPlaceTitle1 = "上越國際";
//         newPlaceTitle2 = "滑雪場";
//         newDescription =
//           "佔地1000萬平方米，配置25條基本道和22條變化豐富的雪道，提供多樣滑道難度，適合各級玩家。";
//         newTicketInfo = ["纜車票", "¥5500", "降雪量", "60cm"];
//         break;
//       case "pic_4":
//         newPlaceTitle1 = "岩原";
//         newPlaceTitle2 = "滑雪場";
//         newDescription =
//           "擁有600米寬闊平敞的初級滑雪道, 海拔高度較低, 加上交通便利 , 推薦給新手的滑雪場。";
//         newTicketInfo = ["纜車票", "¥6000", "降雪量", "25cm"];
//         break;
//       case "pic_5":
//         newPlaceTitle1 = "菅平高原";
//         newPlaceTitle2 = "滑雪場";
//         newDescription =
//           "是區域最大規模的兒童樂園，雪道寬廣且坡度平緩，有多項滑雪課程提供報名，適合初學者滑雪。";
//         newTicketInfo = ["纜車票", "¥5400", "降雪量", "45cm"];
//         break;
//       case "pic_6":
//         newPlaceTitle1 = "輕井澤王子";
//         newPlaceTitle2 = "滑雪場";
//         newDescription =
//           "擁有16種豐富的滑雪道設計與長達1,500公尺的滑雪道，雪具租借服務齊全，也有適合孩童的白雪樂園。";
//         newTicketInfo = ["纜車票", "¥8000", "降雪量", "50cm"];
//         break;
//       // 添加其他場地的處理...
//       default:
//         break;
//     }

//     setPlaceTitle1(newPlaceTitle1);
//     setPlaceTitle2(newPlaceTitle2);
//     setDescription(newDescription);
//     setTicketInfo(newTicketInfo);
//   };

//   return (
//     <div className="App">
//       <select id="dropdown" onChange={handleSelectChange}>
//         <option value="pic_1">萬座溫泉</option>
//         <option value="pic_2">丸沼高原</option>
//         <option value="pic_3">上越國際</option>
//         <option value="pic_4">岩原</option>
//         <option value="pic_5">菅平高原</option>
//         <option value="pic_6">輕井澤王子</option>
//       </select>

//       <div>
//         <img id="area_images" src="../public/images/pic_1.jpg" alt="area" />
//       </div>

//       <div>
//         <h3 className="place-title1">{placeTitle1}</h3>
//         <h4 className="place-title2">{placeTitle2}</h4>
//       </div>

//       <div className="site1">
//         <h4>特色</h4>
//         <p>{description}</p>
//       </div>

//       <div>
//         <ul className="ticket">
//           {ticketInfo.map((info, index) => (
//             <li key={index}>{info}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
