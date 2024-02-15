// 只篩地區
// import React from "react";

// import { Link } from "react-router-dom";
// import "../styles/AreasList.css";

// function AreasList(props) {
//   const { areas } = props;
//   function padPrice(input) {
//     const [dollars, cents = "00"] = String(input).split(".");
//     return `${dollars}.${cents.padEnd(2, "0")}`;
//   }

//   return (
//     <ul className="areas">
//       {/* <Link to="/AreaPage/Intro1">
//         <img src={require("./checkbox/pic_1.jpg")} alt="Pic1" />
//       </Link> */}
//       {areas.map((area) => (
//         <li key={area.id} className="area">
//           {/* <img src={area.image} /> */}
//           {/* <Intro1 /> */}

//           <Link to={area.link}>
//             <img src={area.image} className="areamask" />
//           </Link>
//           <div className="area-details">
//             <header>{area.title}</header>
//             <div className="category">{area.category}</div>
//             <div className="price">{`$${padPrice(area.price)}`}</div>{" "}
//             {/* 使用 padPrice 函數 */}
//             <div className="feature">{area.feature}</div>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default AreasList;

// 篩等級和地區
import React from "react";
import { Link } from "react-router-dom";
import "../styles/AreasList.css";

function AreasList(props) {
  const { areas } = props;

  function padPrice(input) {
    const [dollars, cents = "00"] = String(input).split(".");
    return `${dollars}.${cents.padEnd(2, "0")}`;
  }

  return (
    <ul className="areas">
      {areas.map((area) => (
        <li key={area.id} className="area">
          <Link to={`/Intro/${area.id}`}>
            <img src={area.image} className="areamask" />
          </Link>
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
