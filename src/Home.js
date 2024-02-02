import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="index">
      <div className="btn1">
        {/* <h2>日本滑雪場</h2> */}
        <Link to="/AreaPage">
          <figure className="textBtn1">
            <img src="/images/日本滑雪場32px.svg" alt="日本滑雪場" />
          </figure>
          <figure>
            <img src="/images/btn-area.svg" alt="連結至AreaPage" />
          </figure>
        </Link>
      </div>
      <div className="btn2">
        {/* <h2>滑雪介紹</h2> */}
        <Link to="/IntroPage">
          <figure className="textBtn2">
            <img src="/images/text-intro.svg" alt="滑雪介紹" />
          </figure>
          <figure>
            <img src="/images/btn-intro.svg" alt="連結至IntroPage" />
          </figure>
        </Link>

        {/* </a> */}
      </div>
      <div className="btn3">
        {/* <h2>裝備介紹</h2> */}
        <Link to="/EquipmentPage">
          <figure className="textBtn3">
            <img src="/images/text-equitment.svg" alt="裝備介紹" />
          </figure>
          <figure>
            <img src="/images/btn-equipment.svg" alt="連結至EquipmentPage" />
          </figure>
        </Link>
      </div>
      <div className="btn4">
        {/* <h2>交流專區</h2> */}
        <Link to="/CommentsPage">
          <figure className="textBtn4">
            <img src="/images/text-comments.svg" alt="交流專區" />
          </figure>
          <figure>
            <img src="/images/btn-msg.svg" alt="連結至CommentsPage" />
          </figure>
        </Link>
      </div>
    </section>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";

// export default function IndexBtn() {
//   return (
//     <section id="index">
//       <div className="btn1">
//         <Link to="/area">
//           <figure className="textBtn1">
//             <img src="/images/日本滑雪場32px.svg" alt="日本滑雪場" />
//           </figure>
//           <figure>
//             <img src="/images/btn-area.svg" alt="連結至AreaPage" />
//           </figure>
//         </Link>
//       </div>
//       <div className="btn2">
//         <Link to="/intro">
//           <figure className="textBtn2">
//             <img src="/images/text-intro.svg" alt="滑雪介紹" />
//           </figure>
//           <figure>
//             <img src="/images/btn-intro.svg" alt="連結至IntroPage" />
//           </figure>
//         </Link>
//       </div>
//       <div className="btn3">
//         <Link to="/equipment">
//           <figure className="textBtn3">
//             <img src="/images/text-equitment.svg" alt="裝備介紹" />
//           </figure>
//           <figure>
//             <img src="/images/btn-equitment.svg" alt="連結至EquipmentPage" />
//           </figure>
//         </Link>
//       </div>
//       <div className="btn4">
//         <Link to="/comments">
//           <figure className="textBtn4">
//             <img src="/images/text-comments.svg" alt="交流專區" />
//           </figure>
//           <figure>
//             <img src="/images/btn-msg.svg" alt="連結至CommentsPage" />
//           </figure>
//         </Link>
//       </div>
//     </section>
//   );
// }
