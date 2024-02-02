import React from "react";
import { Link } from "react-router-dom";
import ButtonImage1 from "./btn-equitment.svg";
<IndexBtn to="/equipment" />;

// 創建 IndexBtn 元件
const IndexBtn = ({ to }) => {
  return (
    <section>
      <h2>日本滑雪場</h2>
      <Link to={to}>
        <img src={ButtonImage1} alt="連結至equitment" />{" "}
        {/* 使用 import 進來的按鈕圖片 */}
      </Link>
    </section>
  );
};

// 導出 IndexBtn 元件
export default IndexBtn;
