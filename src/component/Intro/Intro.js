// 只篩地區
import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/Intro.css";
// import { type } from "@testing-library/user-event/dist/type";
// import { useEffect, useState } from "react";

const Intro = () => {
  const { id } = useParams();
  // console.log(typeof id);
  let content;
  //   let imgSrc;
  // const [content, setContent] = useState(null);

  if (id == "1") {
    content = (
      <main>
        <section className="text-box1">
          {" "}
          <img
            src={`../../images/pic_1.jpg`}
            // style={{ width: "525px", height: "365px" }}
            // className=""
          />
        </section>
        <section className="text-box2">
          <div className="moreinfo">
            <div className="col1">
              <h4>地址</h4>
              <p className="intro-all">群馬縣東郡嬬戀村萬座溫泉</p>
              <h4>營業時間</h4>
              <p className="intro-all">
                2023/12/23~2024/03/24
                <br />
                平日、週日及假日：8:30～16:30
                <br />
                週六及年末年初：8:30～17:00
                <br />
                *根據雪地狀況會變更營業期間敬請留意
              </p>
              <h4>纜車價格</h4>
              <p className="intro-all">
                成人: ¥5,500
                <br />
                12歲（含）以下兒童可免費搭乘
              </p>
              <h4>交通</h4>
              <p>
                自駕車
                <br />
                關越高速公路練馬IC-涉川伊香保IC下→17號/353號/145號/292號國道→466號縣道→萬座溫泉滑雪場
              </p>
              <p className="intro-all">
                乘電車路線
                <br />
                東京站→輕井澤站→西武巴士→萬座巴士總站→萬座溫泉滑雪場
              </p>
              <h4>官網</h4>
              <a
                href="https://www.princehotels.co.jp/ski/manza/winter/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
                className="official"
              >
                點此前往官網查詢最新資訊
              </a>
            </div>
            <div className="col2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.610458498417!2d138.50364091192662!3d36.63576217217902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601deec277eaba2d%3A0xc170060994d13529!2z6JCs5bqn5rqr5rOJ5ruR6Zuq5aC0!5e0!3m2!1szh-TW!2stw!4v1706969116323!5m2!1szh-TW!2stw"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    );
  } else if (id == "2") {
    content = "丸沼高原滑雪場";
  } else if (id == "3") {
    content = "上越國際滑雪場";
  } else if (id == "4") {
    content = "岩原滑雪場";
  } else if (id == "5") {
    content = "菅平高原滑雪場";
  } else if (id == "6") {
    content = "輕井澤王子大飯店滑雪場";
  }
  return (
    <div>
      {/* <div style={{ fontSize: "100px", color: "red", textAlign: "center" }}> */}
      <div>{content}</div>
    </div>
  );
};

export default Intro;

//篩等級和地區
// import React from "react";
// import { useParams } from "react-router-dom";
// import "../../styles/Intro.css";

// const Intro = () => {
//   const { id } = useParams();
//   let content;
//   if (id == 1) {
//     content = (
//       <main>
//         <section className="text-box1">
//           <img src={<img src={`../../images/pic_1.jpg`} />} alt="pic1" />{" "}
//           {/* 使用导入的图片资源 */}
//         </section>
//         <section className="text-box2">
//           <div className="col">
//             <h4>地址</h4>
//             <p>群馬縣東郡嬬戀村萬座溫泉</p>
//             {/* 其他詳細內容 */}
//           </div>
//           {/* 其他詳細內容 */}
//         </section>
//       </main>
//     );
//   } else if (id == 2) {
//     content = <div>丸沼高原滑雪場</div>;
//   } else if (id == 3) {
//     content = <div>上越國際滑雪場</div>;
//   } else if (id == 4) {
//     content = <div>岩原滑雪場</div>;
//   } else if (id == 5) {
//     content = <div>菅平高原滑雪場</div>;
//   } else if (id == 6) {
//     content = <div>輕井澤王子大飯店滑雪場</div>;
//   }
//   return <div>{content}</div>;
// };

// export default Intro;
