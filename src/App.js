import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import AreaPage from "./pages/AreaPage";
import IntroPage from "./pages/IntroPage";
import Intro from "./component/Intro/Intro";
import EquipmentPage from "./pages/EquipmentPage";
import CommentsPage from "./pages/CommentsPage";
import SrcPage from "./pages/SrcPage";
// import form 'CSS';
import "./styles/style.css";
import "./styles/Home.css";
// import Snowfall from "./Snowfall";

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* <canvas id="canvas"></canvas> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<Layout />}>
            {/* <Route path="/Snowfall" element={<Snowfall />} /> */}
            <Route path="/AreaPage" element={<AreaPage />} />
            <Route path="/AreaPage/Intro/:id" element={<Intro />} />
            <Route path="IntroPage" element={<IntroPage />} />
            <Route path="EquipmentPage" element={<EquipmentPage />} />
            <Route path="CommentsPage" element={<CommentsPage />} />
            <Route path="SrcPage" element={<SrcPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
