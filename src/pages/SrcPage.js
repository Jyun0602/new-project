import React from "react";
import "../styles/SrcPage.css";

const SrcPage = () => {
  return (
    <main>
      <section className="piclist">
        <div>
          <figure className="pic">
            <img src={`../../images/pic_1.jpg`} alt="萬座溫泉滑雪場" />
          </figure>
          <h3>萬座溫泉滑雪場</h3>
          <p>
            By Mytho88 - Own work, CC BY-SA 3.0,
            https://commons.wikimedia.org/w/index.php?curid=3581921
          </p>
        </div>
        <div>
          <figure className="pic">
            <img src={`../../images/pic_2.jpg`} alt="丸沼高原滑雪場" />
          </figure>
          <h3>丸沼高原滑雪場</h3>
          <p>
            By Ski Mania - Own work, Public Domain,
            https://commons.wikimedia.org/w/index.php?curid=14649132
          </p>
        </div>
        <div>
          <figure className="pic">
            <img src={`../../images/pic_3.jpg`} alt="上越國際滑雪場" />
          </figure>
          <h3>上越國際滑雪場</h3>
          <p>
            By Najirane-n - Own work, CC BY-SA 4.0,
            https://commons.wikimedia.org/w/index.php?curid=47561018
          </p>
        </div>
        <div>
          <figure className="pic">
            <img src={`../../images/pic_4.jpg`} alt="岩原滑雪場" />
          </figure>
          <h3>岩原滑雪場</h3>
          <p>
            By Famifamifami - Own work, Public Domain,
            https://commons.wikimedia.org/w/index.php?curid=8988879
          </p>
        </div>
        <div>
          <figure className="pic">
            <img src={`../../images/pic_5.jpg`} alt="菅平高原滑雪場" />
          </figure>
          <h3>菅平高原滑雪場</h3>
          <p>
            By 苗場山 - Own work, CC BY-SA 3.0,
            https://commons.wikimedia.org/w/index.php?curid=25091087
          </p>
        </div>
        <div>
          <figure className="pic">
            <img src={`../../images/pic_6.jpg`} alt="輕井澤王子大飯店滑雪場" />
          </figure>
          <h3>輕井澤王子大飯店滑雪場</h3>
          <p>
            By Ski Mania - Own work, Public Domain,
            https://commons.wikimedia.org/w/index.php?curid=18337519
          </p>
        </div>
      </section>
    </main>
    // <main>
    //   <tr>
    //     <td colSpan={2}>
    //       <figure className="pic">
    //         <img src={`../../images/pic_1.jpg`} />{" "}
    //       </figure>
    //       <h3>萬座溫泉滑雪場</h3>{" "}
    //       <p>
    //         By Mytho88 - Own work, CC BY-SA 3.0,
    //         https://commons.wikimedia.org/w/index.php?curid=3581921 //{" "}
    //       </p>
    //     </td>
    //   </tr>
    // </main>
  );
};

export default SrcPage;
