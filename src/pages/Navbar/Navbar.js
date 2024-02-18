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

// import React, { useState } from "react";
// import "./Navbar.css";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="Navbar">
//       <a href="./">
//         <figure className="nav-logo">
//           <img src="./images/Logo.png" alt="Logo" />
//         </figure>
//       </a>

//       <div className={`nav-items ${isOpen && "open"}`}>
//         <a href="./AreaPage">日本滑雪場</a>
//         <a href="./IntroPage">滑雪介紹</a>
//         <a href="./EquipmentPage">裝備介紹</a>
//         <a href="./CommentsPage">交流專區</a>
//         <a href="./SrcPage">圖片來源</a>
//       </div>

//       <div className={`nav-toggle ${isOpen && "open"}`} onClick={toggleMenu}>
//         <div className="bar"></div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";
// import LogoImage from "../../images/Logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="Navbar">
//       <NavLink to="/" exact>
//         <figure className="nav-logo">
//           <img src={LogoImage} alt="Logo" />
//         </figure>
//       </NavLink>

//       <div className={`nav-items ${isOpen && "open"}`}>
//         <NavLink to="/AreaPage">日本滑雪場</NavLink>
//         <NavLink to="/IntroPage">滑雪介紹</NavLink>
//         <NavLink to="/EquipmentPage">裝備介紹</NavLink>
//         <NavLink to="/CommentsPage">交流專區</NavLink>
//         <NavLink to="/SrcPage">圖片來源</NavLink>
//       </div>

//       <div className={`nav-toggle ${isOpen && "open"}`} onClick={toggleMenu}>
//         <div className="bar"></div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LogoImage from "../../images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar">
      <Link to="/">
        <figure className="nav-logo">
          <img src={LogoImage} alt="Logo" />
        </figure>
      </Link>

      <div className={`nav-items ${isOpen && "open"}`}>
        <Link className="nav-link" to="/AreaPage" onClick={toggleMenu}>
          日本滑雪場
        </Link>
        <Link className="nav-link" to="/IntroPage" onClick={toggleMenu}>
          滑雪介紹
        </Link>
        <Link className="nav-link" to="/EquipmentPage" onClick={toggleMenu}>
          裝備介紹
        </Link>
        <Link className="nav-link" to="/CommentsPage" onClick={toggleMenu}>
          交流專區
        </Link>
        <Link className="nav-link" to="/SrcPage" onClick={toggleMenu}>
          圖片來源
        </Link>
      </div>

      <div className={`nav-toggle ${isOpen && "open"}`} onClick={toggleMenu}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
