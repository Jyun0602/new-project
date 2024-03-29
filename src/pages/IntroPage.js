// import React from "react";
import React, { useEffect } from "react";
import "../styles/IntroPage.css";
import ScrollToTopButton from "../component/ScrollToTop/ScrollToTopButton";
import introTextImage from "../images/intro-text.svg";
import introPic1Image from "../images/intro-pic1.jpg";
import introBgImage from "../images/intro-bg.jpg";
import introSkiImage from "../images/intro-ski.jpg";
import introSbImage from "../images/intro-sb.jpg";
import p3JapanImage from "../images/p3-japan.svg";
import p3LevelImage from "../images/p3-level.svg";
import p3GreenImage from "../images/p3-green.svg";
import p3RedImage from "../images/p3-red.svg";
import p3BlackImage from "../images/p3-black.svg";
import p4EuropeImage from "../images/p4-europe.svg";
import p4LevelImage from "../images/p4-level.svg";
import p4GreenCircleImage from "../images/p4-Green circle.svg";
import p4BlueSquareImage from "../images/p4-Blue square.svg";
import p4RedRectangleImage from "../images/p4-Red rectangle.svg";
import p4BlackDiamondImage from "../images/p4-Black diamond.svg";
import p4DoubleBlackDiamondImage from "../images/p4-Double black diamond.svg";
const IntroPage = () => {
  useEffect(() => {
    const imageList = [
      introTextImage,
      introPic1Image,
      introBgImage,
      introSkiImage,
      introSbImage,
      p3JapanImage,
      p3JapanImage,
      p3LevelImage,
      p3GreenImage,
      p3RedImage,
      p3BlackImage,
      p4EuropeImage,
      p4LevelImage,
      p4GreenCircleImage,
      p4BlueSquareImage,
      p4RedRectangleImage,
      p4BlackDiamondImage,
      p4DoubleBlackDiamondImage,
    ];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }, []);
  return (
    <main className="App">
      {/* // page1 */}
      <section id="intro1">
        <div className="title">
          <div>
            <img className="logo" src={introTextImage} alt="滑雪介紹" />
          </div>

          <span className="title-intro">雪上的滑板運動</span>

          <figure className="title-intro">
            <img src={introPic1Image} alt="" />
          </figure>
        </div>
        <hr />

        <figure className="Mountain">
          <div className="p1">
            <div className="p1-1">
              <p>
                在冬季，滑雪是旅遊的熱門活動之一。
                <br />
                因氣候關係，台灣缺乏適當的場地，僅有室內人造滑雪場，因此滑雪在台灣並不盛行。
                {/* <img src="./images" alt="" />  */}
              </p>
            </div>
            <div>
              <p>
                大部分的滑雪者主要選擇前往日本、韓國、歐美等國家。
                <br />
                許多人會選擇前往日本滑雪，因地理位置鄰近於台灣，且在價格和品質方面cp值較高。
              </p>
            </div>
          </div>
          <img src={introBgImage} alt="山" />
        </figure>
      </section>

      {/* // // page2 */}
      <section id="intro2">
        {/* <span className="title-ski">雙板</span> */}
        {/* <span className="page2-title2">單板</span> */}

        {/* <span className="text1">スキー</span> */}
        {/* <span className="text2">スノーボード</span> */}
        <div className="intro-box">
          <span className="page2-title1">雙板</span>
          <p className="p3">
            單板滑雪和雙板滑雪的最大差異在於使用的雪板。學習單板滑雪較為困難，
            在控制平衡和轉向上可能會感到更具挑戰性。
            <br />
            此外，熟悉單板滑雪者掌握技巧可以通過跳躍、甩尾等技巧在雪道上進行花式滑雪，展現出更多的技術和風格。
          </p>
        </div>
        <div className="intro-pic">
          <figure className="intro-ski">
            <span className="text1">スキー</span>
            <img src={introSkiImage} alt="雙板" />
          </figure>
          <figure className="intro-sb">
            <span className="page2-title2">單板</span>
            <span className="text2">スノーボード</span>
            <img src={introSbImage} alt="單板" />
          </figure>
        </div>
      </section>

      {/* //雪道分級 */}
      {/* //page3 */}
      <section id="level">
        {/* <img
          class="bg"
          src="../images/introduction/second_page/介紹bg.svg"
          alt="bg"
        /> */}
        <div className="pic-title1">
          <figure className="intro-title1">
            <img src={p3JapanImage} alt="日本" />
          </figure>
          <figure className="intro-title1-2">
            <img src={p3LevelImage} alt="雪道分級" />
          </figure>
        </div>
        <div className="level-text">
          <div className="level-intro">
            <figure className="g1">
              <img src={p3GreenImage} alt="綠線" />
            </figure>
            <h3>綠線 初級雪道</h3>
            <p className="intro-jp">
              初學者建議選擇寬敞且平坦的滑雪斜坡，
              <br />
              其傾斜角度約為6%到25%，
              <br />
              非常適合初學者進行練習。
            </p>
          </div>
          <div className="level-intro2">
            <figure className="r1">
              <img src={p3RedImage} alt="紅線" />
            </figure>
            <h3>紅線 中級雪道</h3>
            <p className="intro-jp">
              在日本多數滑雪場中，
              <br />
              有40%到60%的區域
              <br />
              被劃分為中級難度的雪道。
            </p>
          </div>

          <div className="level-intro3">
            <figure className="b1">
              <img src={p3BlackImage} alt="黑線" />
            </figure>
            <h3>黑線 高級雪道</h3>
            <p className="intro-jp">
              黑線是在雪道中最具挑戰性的路線，
              <br />
              其路線相對較為陡峭，
              <br />
              雪道的難度取決於目標受眾。
            </p>
          </div>
        </div>
      </section>

      {/* page4  */}
      <section id="level2">
        <div className="pic-title2">
          <figure className="intro-title2">
            <img src={p4EuropeImage} alt="歐洲" />
          </figure>
          <figure className="title2-1">
            <img src={p4LevelImage} alt="雪道分級" />
          </figure>
        </div>
        <div className="intro-text">
          <div className="level2-intro1">
            <figure className="g2">
              <img src={p4GreenCircleImage} alt="綠線" />
            </figure>
            <h3>綠線雪道</h3>
            <p className="intro-p">初學者練習的雪道，雪道坡度平緩。</p>
          </div>
          <div className="level2-intro2">
            <figure className="b2">
              <img src={p4BlueSquareImage} alt="藍線" />
            </figure>
            <h3>藍線雪道</h3>
            <p className="intro-p">
              雪道斜率不會超過25%，且雪道通常會經過平整處理，或者因坡度本身極緩而無需進行平整。
            </p>
          </div>
          <div className="level2-intro3">
            <figure className="r2">
              <img src={p4RedRectangleImage} alt="紅線" />
            </figure>
            <h3>紅線雪道</h3>
            <p className="intro-p">
              相較於藍色雪道可能更陡或更窄，雪道斜率通常不會超過40%，而且通常都經過平整處理。
            </p>
          </div>
          <div className="level2-intro4">
            <figure className="bl2">
              <img src={p4BlackDiamondImage} alt="黑線" />
            </figure>
            <h3>黑線雪道</h3>
            <p className="intro-p">
              山上最難的雪道之一，其斜坡傾斜度超過40%，可能尚未經過平整處理。
            </p>
          </div>
          <div className="level2-intro5">
            <figure className="db2">
              <img src={p4DoubleBlackDiamondImage} alt="雙黑線" />
            </figure>
            <h3>雙黑線雪道</h3>
            <p className="intro-p">
              適合滑雪經驗豐富的滑雪者，相較於黑色雪道，其難度更高。這些雪道通常非常陡峭，
              <br />
              可能存在其他危險因素，如狹窄的雪道、強風，或是有樹木、岩石等障礙物。
            </p>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </main>
  );
};

export default IntroPage;
