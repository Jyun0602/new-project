import React from "react";
import Pic1 from "../component/checkbox/pic_1.jpg";
import Pic2 from "../component/checkbox/pic_2.jpg";
// import Pic3 from "./pic_3.jpg";
// import Pic4 from "./pic_4.jpg";
// import Pic5 from "./pic_5.jpg";
// import Pic6 from "./pic_6.jpg";
function AreasSection({ areas }) {
  return (
    <section>
      {areas.map((area) => (
        <div key={area.id}>
          <img src={getPicUrl(area.id)} alt={area.title} />
          {/* 其他滑雪场地信息 */}
        </div>
      ))}
    </section>
  );
}

// 根据滑雪场地的 id 来动态选择对应的图片路径
function getPicUrl(id) {
  switch (id) {
    case 1:
      return require("../component/checkbox/pic_1.jpg");
    case 2:
      return require("../component/checkbox/pic_2.jpg");
    // 其他情况
    // default:
    //   return require("./default.jpg"); // 如果没有对应的图片，返回一个默认的图片路径
  }
}

export default AreasSection;
