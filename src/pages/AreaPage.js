// import { useState } from "react";
// import SelectComponent from "./SelectComponent";
// import "./styles.css";

// const options = [
//   { key: 1, value: "萬座溫泉滑雪場" },
//   { key: 2, value: "丸沼高原滑雪場" },
//   { key: 3, value: "上越國際滑雪場" },
//   { key: 4, value: "岩原滑雪場" },
//   { key: 5, value: "菅平高原滑雪場" },
//   { key: 6, value: "輕井澤王子大飯店滑雪場" },
// ];
// export default function App() {
//   const [selectedOption, setSelectedOption] = useState("");

//   return (
//     <div className="App">
//       <SelectComponent
//         options={options}
//         onChange={(item) => setSelectedOption(item)}
//         selectedKey={selectedOption}
//         placeholder={"請選擇或輸入滑雪場"}
//       />
//       {/* <p>selected option: {selectedOption}</p> */}
//     </div>
//   );
// }
import React from "react";
import CheckboxArea from "../component/checkbox/CheckboxArea";

const AreaPage = () => {
  return (
    <div>
      <CheckboxArea />
    </div>
  );
};

export default AreaPage;
