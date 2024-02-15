// import React, { useState } from "react";
// import "./Navbar.css";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="Navbar">
//       {/* <span className="nav-logo">DevLHB</span> */}
//       {/* <Link> */}
//       <a href="/">
//         <figure className="nav-logo">
//           <img src="/images/Logo.png" alt="Logo" />
//         </figure>
//       </a>
//       {/* </Link> */}

//       <div className={`nav-items ${isOpen && "open"}`}>
//         {/* <a href="/">Home</a> */}
//         <a href="/AreaPage">日本滑雪場</a>
//         <a href="/IntroPage">滑雪介紹</a>
//         <a href="/EquipmentPage">裝備介紹</a>
//         <a href="/CommentsPage">交流專區</a>
//       </div>
//       <div
//         className={`nav-toggle ${isOpen && "open"}`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="bar"></div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar">
      <a href="/">
        <figure className="nav-logo">
          <img src="/images/Logo.png" alt="Logo" />
        </figure>
      </a>

      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/AreaPage">日本滑雪場</a>
        <a href="/IntroPage">滑雪介紹</a>
        <a href="/EquipmentPage">裝備介紹</a>
        <a href="/CommentsPage">交流專區</a>
        <a href="/SrcPage">圖片來源</a>
      </div>

      <div className={`nav-toggle ${isOpen && "open"}`} onClick={toggleMenu}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
