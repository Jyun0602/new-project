import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/Intro.css";

const Intro = () => {
  const { id } = useParams();
  let content;
  if (id === "1") {
    content = (
      <main>
        <section className="text-box1">
          <div className="moreinfo">
            <div className="intro-col1">
              <p>萬座溫泉滑雪場</p>
              <h4>地址</h4>
              <p className="intro-all">群馬縣東郡嬬戀村萬座溫泉</p>
              <h4>營業時間</h4>
              <p className="intro-all">
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

              <h4 className="text-official">官網</h4>
              <a
                href="https://www.princehotels.co.jp/ski/manza/winter/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
                className="official"
              >
                點此前往官網查詢最新資訊
              </a>
            </div>
            <div className="intro-col2">
              <a
                href="https://maps.app.goo.gl/PXSakYMtbzSB4jTe8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-5 mapurl"
              >
                Google Map
              </a>
            </div>
            <div className="intro-col3">
              <div className="date">
                <p> 12/23</p>
                <p className="year" style={{ fontFamily: "GenSenRounded-M" }}>
                  2023
                </p>
                <p className="deadline">~03/24</p>
                <p className="year2" style={{ fontFamily: "GenSenRounded-M" }}>
                  2024
                </p>
              </div>
              <div className="traffic">
                <h4>交通</h4>
                <p>
                  自駕車
                  <br />
                  關越高速公路練馬IC-涉川伊香保IC下→17號/353號/145號/292號國道→466號縣道→萬座溫泉滑雪場
                  <br />
                  乘電車路線
                  <br />
                  東京站→輕井澤站→西武巴士→萬座巴士總站→萬座溫泉滑雪場
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  } else if (id === "2") {
    content = (
      <main>
        <section className="text-box2">
          <div className="moreinfo">
            <div className="intro-col1">
              <p>丸沼高原滑雪場</p>
              <h4>地址</h4>
              <p className="intro-all">群馬縣利根郡片品村東小川4658-58</p>
              <h4>營業時間</h4>
              <p className="intro-all">
                平日：8:30～16:30
                <br />
                週六、週日、假日：8:30～16:30
                <br />
                *根據雪地狀況會變更營業期間敬請留意
              </p>
              <h4>纜車價格</h4>
              <p className="intro-all">
                成人: ¥6,000
                <br />
                小學生: ¥2,200
              </p>

              <h4 className="text-official">官網</h4>
              <a
                href="https://www.marunuma.jp/winter/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
                className="official"
              >
                點此前往官網查詢最新資訊
              </a>
            </div>
            <div className="intro-col2">
              <a
                href="https://maps.app.goo.gl/eRvTHcV4ZtkTKTK18"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-5 mapurl"
              >
                Google Map
              </a>
            </div>
            <div className="intro-col3">
              <div className="date">
                <p> 12/16</p>
                <p className="year" style={{ fontFamily: "GenSenRounded-M" }}>
                  2023
                </p>
                <p className="deadline">~05/06</p>
                <p className="year2" style={{ fontFamily: "GenSenRounded-M" }}>
                  2024
                </p>
              </div>
              <div className="traffic">
                <h4>交通</h4>
                <p>
                  自駕車
                  <br />
                  關越高速練馬IC→沼田IC下→120號國道→丸沼高原滑雪場
                  <br />
                  乘電車路線
                  <br />
                  東京車站→上毛高原站→巴士→丸沼高原滑雪場
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  } else if (id === "3") {
    content = (
      <main>
        <section className="text-box3">
          <div className="moreinfo">
            <div className="intro-col1">
              <p>上越國際滑雪場</p>
              <h4>地址</h4>
              <p className="intro-all">新潟縣南魚沼市甲之澤112-1</p>
              <h4>營業時間</h4>
              <p className="intro-all">
                平日：8:15～20:30 
                <br />
                週六、週日、假日：8:00～20:30
                <br />
                *根據雪地狀況會變更營業期間敬請留意
              </p>
              <h4>纜車價格</h4>
              <p className="intro-all">
                成人: ¥5,500
                <br />
                小學生:¥3,500
                <br />
                年長者:¥4,300
              </p>

              <h4 className="text-official">官網</h4>
              <a
                href="https://jkokusai.co.jp/ski/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
                className="official"
              >
                點此前往官網查詢最新資訊
              </a>
            </div>
            <div className="intro-col2">
              <a
                href="https://maps.app.goo.gl/xWYcSjuWiFknKGC6A"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-5 mapurl"
              >
                Google Map
              </a>
            </div>
            <div className="intro-col3">
              <div className="date">
                <p> 12/02</p>
                <p className="year" style={{ fontFamily: "GenSenRounded-M" }}>
                  2023
                </p>
                <p className="deadline">~04/07</p>
                <p className="year2" style={{ fontFamily: "GenSenRounded-M" }}>
                  2024
                </p>
              </div>
              <div className="traffic">
                <h4>交通</h4>
                <p>
                  自駕車
                  <br />
                  自練馬IC→關越自動車道→藤岡JCT→關越自動車道→鹽澤石打IC→國道17號線直行→上越國際滑雪場
                  <br />
                  乘電車路線
                  <br />
                  JR東京站→上越新幹線→越後湯澤站後，轉乘上越線→上越國際滑雪場前站→上越國際滑雪場
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  } else if (id === "4") {
    content = (
      <main>
        <section className="text-box4">
          <div className="moreinfo">
            <div className="intro-col1" style={{ color: "#5265C4" }}>
              <p>岩原滑雪場</p>
              <h4>地址</h4>
              <p className="intro-all">新潟縣南魚沼郡湯澤町土樽 731-79</p>
              <h4>營業時間</h4>
              <p className="intro-all">
                平日、週日、假日：8:00～19:00
                <br />
                週六、年末年初：8:00～20:00
                <br />
                *根據雪地狀況會變更營業期間敬請留意
              </p>
              <h4>纜車價格</h4>
              <p className="intro-all">
                成人: ¥5,500
                <br />
                小學生:¥3,500
                <br />
                年長者:¥4,300
              </p>

              <h4 className="text-official" style={{ color: "#5265C4" }}>
                官網
              </h4>
              <a
                href="https://iwa-ppara.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#5265C4" }}
                className="official"
              >
                點此前往官網查詢最新資訊
              </a>
            </div>
            <div className="intro-col2">
              <a
                href="https://maps.app.goo.gl/vxntxtm7TgVHvyNi8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-5 mapurl"
              >
                Google Map
              </a>
            </div>
            <div className="intro-col3" style={{ color: "#5265C4" }}>
              <div className="date" style={{ color: "#bbd0eb" }}>
                <p> 12/23</p>
                <p className="year" style={{ fontFamily: "GenSenRounded-M" }}>
                  2023
                </p>
                <p className="deadline">~03/31</p>
                <p className="year2" style={{ fontFamily: "GenSenRounded-M" }}>
                  2024
                </p>
              </div>
              <div className="traffic">
                <h4>交通</h4>
                <p>
                  自駕車
                  <br />
                  關越高速公路　練馬IC→湯澤IC 出車→國道17號→縣道268號→岩原滑雪場
                  <br />
                  乘電車路線
                  <br />
                  東京站→越後湯澤站→免費巴士→岩原滑雪場
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  } else if (id === "5") {
    content = (
      <main>
        <section className="text-box5">
          <div className="moreinfo">
            <div className="intro-col1">
              <p>菅平高原滑雪場</p>
              <h4>地址</h4>
              <p className="intro-all">長野縣上田市菅平高原 386-2204</p>
              <h4>營業時間</h4>
              <p className="intro-all">
                平日：8:30～16:30
                <br />
                週六、週日、假日：8:30～16:30
                <br />
                夜間比賽：18:00～21:00
                <br />
                *根據雪地狀況會變更營業期間敬請留意
              </p>
              <h4>纜車價格</h4>
              <p className="intro-all">
                成人: ¥5,400
                <br />
                小學生:¥3,100
                <br />
                年長者:¥4,800
              </p>

              <h4 className="text-official">官網</h4>
              <a
                href="https://sugadaira-snowresort.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
                className="official"
              >
                點此前往官網查詢最新資訊
              </a>
            </div>
            <div className="intro-col2">
              <a
                href="https://maps.app.goo.gl/Rr28MjxQn7LQYvq18"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-5 mapurl"
              >
                Google Map
              </a>
            </div>
            <div className="intro-col3">
              <div className="date">
                <p> 12/09</p>
                <p className="year" style={{ fontFamily: "GenSenRounded-M" }}>
                  2023
                </p>
                <p className="deadline">~03/01</p>
                <p className="year2" style={{ fontFamily: "GenSenRounded-M" }}>
                  2024
                </p>
              </div>
              <div className="traffic">
                <h4>交通</h4>
                <p>
                  自駕車
                  <br />
                  關越高速公路練馬IC→藤岡JCT→上信越高速公路→上田菅平IC
                  出車→國道144號→國道406號→菅平高原雪地度假村
                  <br />
                  乘電車路線
                  <br />
                  東京站→上田站→「城口」巴士總站3號上田巴士「菅平高原」方向→「菅平高原達沃斯」巴士站下車→步行→菅平高原雪地度假村
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  } else if (id === "6") {
    content = (
      <main>
        <section className="text-box6">
          <div className="moreinfo">
            <div className="intro-col1">
              <p>輕井澤王子大飯店滑雪場</p>
              <h4>地址</h4>
              <p className="intro-all">長野縣北佐久郡輕井澤町輕井澤 389-0102</p>
              <h4>營業時間</h4>
              <p className="intro-all">
                平日：8:00～17:00
                <br />
                週六、週日、假日：8:00～17:00
                <br />
                *根據雪地狀況會變更營業期間敬請留意
              </p>
              <h4>纜車價格</h4>
              <p className="intro-all">
                成人: ¥6,600
                <br />
                12歲（含）以下兒童可免費搭乘
                <br />
                年長者:¥5,500
              </p>

              <h4 className="text-official">官網</h4>
              <a
                href="https://www.princehotels.co.jp/ski/karuizawa/winter/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
                className="official"
              >
                點此前往官網查詢最新資訊
              </a>
            </div>
            <div className="intro-col2">
              <a
                href="https://maps.app.goo.gl/1eYRyjeUu6YdRPoR7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-5 mapurl"
              >
                Google Map
              </a>
            </div>
            <div className="intro-col3">
              <div className="date">
                <p> 12/01</p>
                <p className="year" style={{ fontFamily: "GenSenRounded-M" }}>
                  2023
                </p>
                <p className="deadline">~03/31</p>
                <p className="year2" style={{ fontFamily: "GenSenRounded-M" }}>
                  2024
                </p>
              </div>
              <div className="traffic">
                <h4>交通</h4>
                <p>
                  自駕車
                  <br />
                  關越高速公路練馬IC→藤岡JCT→上信越高速公路→碓冰輕井澤IC下→輕井澤王子飯店滑雪場
                  <br />
                  乘電車路線
                  <br />
                  東京車站→輕井澤站→步行10分鐘→輕井澤王子飯店滑雪場
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  return <div>{content}</div>;
};

export default Intro;
