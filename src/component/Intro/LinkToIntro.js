// import React, { useState } from "react";
// import Intro1 from "./Intro1";
// import Intro2 from "./Intro2";
// import Intro3 from "./Intro3";
// import Intro4 from "./Intro4";
// import Intro5 from "./Intro5";
// import Intro6 from "./Intro6";

// const LinkToIntro = () => {
//   // 使用 useState 跟踪所選圖片的ID
//   const [selectedImageId, setSelectedImageId] = useState(null);

//   // 點擊圖片時更新所選圖片的ID
//   const handleImageClick = (id) => {
//     setSelectedImageId(id);
//   };

//   // 根據所選ID來顯示不同的 Intro 組件
//   if (selectedImageId === 1) {
//     return <Intro1 />;
//   } else if (selectedImageId === 2) {
//     return <Intro2 />;
//   } else if (selectedImageId === 3) {
//     return <Intro3 />;
//   } else if (selectedImageId === 4) {
//     return <Intro4 />;
//   } else if (selectedImageId === 5) {
//     return <Intro5 />;
//   } else if (selectedImageId === 6) {
//     return <Intro6 />;
//   } else {
//     // 如果沒有圖片被選擇，返回空
//     return null;
//   }
// };

// export default LinkToIntro;
import React from "react";
import { Link } from "react-router-dom";

function LinkToIntro() {
  return (
    <div>
      <Link to="/AreaPage/Intro1">
        <img src={require("../checkbox/pic_1.jpg")} alt="Pic1" />
      </Link>
      <Link to="/Intro/Intro2">
        <img src={require("../checkbox/pic_2.jpg")} alt="Pic2" />
      </Link>
      <Link to="/Intro/Intro3">
        <img src={require("../checkbox/pic_3.jpg")} alt="Pic3" />
      </Link>
      <Link to="/Intro/Intro4">
        <img src={require("../checkbox/pic_4.jpg")} alt="Pic4" />
      </Link>
      <Link to="/Intro/Intro5">
        <img src={require("../checkbox/pic_5.jpg")} alt="Pic5" />
      </Link>
      <Link to="/Intro/Intro6">
        <img src={require("../checkbox/pic_6.jpg")} alt="Pic6" />
      </Link>
    </div>
  );
}

export default LinkToIntro;
