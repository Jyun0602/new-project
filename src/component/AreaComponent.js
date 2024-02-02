import React from "react";
import { Link } from "react-router-dom";
import Pic1 from "../component/checkbox/pic_1.jpg";
// import Location1 from "../location/Location1";
const AreaComponent = () => {
  return (
    <div>
      {/* 使用 Link 元件連結到 Location1 */}
      <Link to="/location/Location1">
        <figure className="pic1">
          <img src={Pic1} alt="日本滑雪場" />
        </figure>
      </Link>
      {/* 其他圖片連結 */}
      {/* <Link> 其他圖片的連結 ... </Link> */}
    </div>
  );
};

export default AreaComponent;
