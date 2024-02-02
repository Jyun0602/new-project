import React from "react";
import "../styles/IntroPage.css";

const IntroPage = () => {
  return (
    <main>
      {/* // page1 */}
      <section id="intro1">
        <div class="title">
          <div>
            <img class="logo" src="./images/intro-text.svg" alt="滑雪介紹" />
          </div>

          <span class="title-intro">雪上的滑板運動</span>

          <figure class="title-intro">
            <img src="./images/intro-pic1.jpg" alt="" />
          </figure>
        </div>
        <hr />

        <div class="p1">
          <p class="p1">
            滑板運動主要包括滑板和衝浪，而滑雪則是滑板運動的一環。
            <br />
            然而，由於台灣氣候的原因，缺乏適當的場地，僅有室內人造滑雪場，因此滑雪在台灣並不盛行。
            {/* <img src="./images" alt="" />  */}
          </p>
        </div>
        <div class="p2">
          <p>
            大部分的滑雪者主要選擇前往日本、韓國、歐美等國家。
            <br />
            許多人會選擇前往日本滑雪，因地理位置鄰近於台灣，且在價格和品質方面cp值較高。
          </p>
        </div>
      </section>

      {/* // // page2 */}
      <section id="intro2">
        <span class="title1">雙板</span>
        <span class="title2">單板</span>

        <span class="text1">スキー</span>
        <span class="text2">スノーボード</span>

        <p class="p3">
          單板滑雪和雙板滑雪的最大差異在於使用的雪板。一般來說，學習單板滑雪較為困難。
          <br />
          此外，熟悉單板滑雪者通常會在雪道上利用跳躍、甩尾等技巧炫技，來進行花式滑雪運動。
        </p>
        <div>
          <figure class="ski">
            <img src="./images/intro-ski.jpg" alt="雙板" />
          </figure>
          <figure class="sb">
            <img src="./images/intro-sb.jpg" alt="單板" />
          </figure>
        </div>
      </section>

      {/* //雪道分級 */}
      {/* //page3 */}
      <section id="level">
        {/* <img
          class="bg"
          src="./images/introduction/second_page/介紹bg.svg"
          alt="bg"
        /> */}
        <div class="title1">
          <figure class="text1">
            <img src="./images/p3-japan.svg" alt="日本" />
          </figure>
          <figure class="text2">
            <img src="./images/p3-level.svg" alt="雪道分級" />
          </figure>
        </div>

        <div class="level-intro">
          <figure class="g1">
            <img src="./images/p3-green.svg" alt="綠線" />
          </figure>
          <h3>綠線 初級雪道</h3>
          <p className="intro-jp">
            初學者建議選擇寬敞且平坦的滑雪斜坡，其傾斜角度約為6%到25%，非常適合初學者進行練習。
          </p>
        </div>
        <div class="level-intro2">
          <figure class="r1">
            <img src="./images/p3-red.svg" alt="紅線" />
          </figure>
          <h3>紅線 中級雪道</h3>
          <p className="intro-jp">
            在日本多數滑雪場中，有40%到60%的區域被劃分為中級難度的雪道。
          </p>
        </div>

        <div class="level-intro3">
          <figure class="b1">
            <img src="./images/p3-black.svg" alt="黑線" />
          </figure>
          <h3>黑線 高級雪道</h3>
          <p className="intro-jp">
            黑線是在雪道中最具挑戰性的路線，其路線相對較為陡峭，雪道的難度取決於目標受眾。
          </p>
        </div>
      </section>

      {/* page4  */}
      <section id="level2">
        <figure class="title2">
          <img src="./images/p4-europe.svg" alt="歐洲" />
        </figure>
        <figure className="title2-1">
          <img src="./images/p4-level.svg" alt="雪道分級" />
        </figure>
        <div class="intro-text intro-appear">
          <div class="level2-intro1">
            <figure class="g2">
              <img src="./images/p4-Green circle.svg" alt="綠線" />
            </figure>
            <h3>綠線雪道</h3>
            <p className="intro-p">初學者練習的雪道，雪道坡度平緩。</p>
          </div>
          <div class="level2-intro2">
            <figure class="b2">
              <img src="./images/p4-Blue square.svg" alt="藍線" />
            </figure>
            <h3>藍線雪道</h3>
            <p className="intro-p">
              雪道斜率不會超過25%，且雪道通常會經過平整處理，或者因坡度本身極緩而無需進行平整。
            </p>
          </div>
          <div class="level2-intro3">
            <figure class="r2">
              <img src="./images/p4-Red rectangle.svg" alt="紅線" />
            </figure>
            <h3>紅線雪道</h3>
            <p className="intro-p">
              相較於藍色雪道可能更陡或更窄，雪道斜率通常不會超過40%，而且通常都經過平整處理。
            </p>
          </div>
          <div class="level2-intro4">
            <figure class="bl2">
              <img src="./images/p4-Black diamond.svg" alt="黑線" />
            </figure>
            <h3>黑線雪道</h3>
            <p className="intro-p">
              山上最難的雪道之一，其斜坡傾斜度超過40%，可能尚未經過平整處理。
            </p>
          </div>
          <div class="level2-intro5">
            <figure class="db2">
              <img src="./images/p4-Double black diamond.svg" alt="雙黑線" />
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
    </main>
  );
};

export default IntroPage;
