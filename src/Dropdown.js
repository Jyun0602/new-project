import React from "react";

export default function Dropdown() {
  return (
    <div>
      <select onChange={handleChange}>
        <option value="">請選擇滑雪場</option>
        <option value="option1">萬座溫泉滑雪場</option>
        <option value="option2">丸沼高原滑雪場</option>
        <option value="option3">上越國際滑雪場</option>
        <option value="option4">岩原滑雪場</option>
        <option value="option5">菅平高原滑雪場</option>
        <option value="option6">輕井澤王子大飯店滑雪場</option>
      </select>
      {selectedOption && (
        <div>
          {selectedOption === "option1" && (
            <div>
              <img src="../pic_1.jpg" alt="萬座溫泉滑雪場" />
              <h3>萬座溫泉</h3>
              <h4>滑雪場</h4>
              <h4>特色</h4>
              <p>
                在海拔1,994公尺的山頂，可以俯瞰壯麗的富士山風景。步行至附設的飯店只需短短一分鐘，享受溫泉和滑雪的樂趣。
              </p>
              <ul class="ticket">
                <li>纜車票</li>
                <li>¥5500</li>
                <li>降雪量</li>
                <li>40cm</li>
              </ul>
            </div>
          )}
          {selectedOption === "option2" && (
            <div>
              <img src="../pic_2.jpg" alt="丸沼高原滑雪場" />
              <h3>丸沼高原</h3>
              <h4>滑雪場</h4>
              <h4>特色</h4>
              <p>
                海拔2,000公尺，擁有長達4公里的高品質雪道，分為22個不同難度的課程，適合初學者到高級玩家。
              </p>
              <ul class="ticket">
                <li>纜車票</li>
                <li>¥6000</li>
                <li>降雪量</li>
                <li>75cm</li>
              </ul>
            </div>
          )}
          {selectedOption === "option3" && (
            <div>
              <img src="../pic_3.jpg" alt="上越國際滑雪場" />
              <h3>上越國際</h3>
              <h4>滑雪場</h4>
              <h4>特色</h4>
              <p>
                佔地1000萬平方米，配置25條基本道和22條變化豐富的雪道，提供多樣滑道難度，適合各級玩家。
              </p>
              <ul class="ticket">
                <li>纜車票</li>
                <li>¥5500</li>
                <li>降雪量</li>
                <li>60cm</li>
              </ul>
            </div>
          )}
          {selectedOption === "option4" && (
            <div>
              <img src="../pic_4.jpg" alt="岩原滑雪場" />
              <h3>岩原</h3>
              <h4>滑雪場</h4>
              <h4>特色</h4>
              <p>
                擁有600米寬闊平敞的初級滑雪道, 海拔高度較低,加上交通便利 ,
                推薦給新手的滑雪場。
              </p>
              <ul class="ticket">
                <li>纜車票</li>
                <li>¥6000</li>
                <li>降雪量</li>
                <li>25cm</li>
              </ul>
            </div>
          )}
          {selectedOption === "option5" && (
            <div>
              <img src="../pic_5.jpg" alt="菅平高原滑雪場" />
              <h3>菅平高原</h3>
              <h4>滑雪場</h4>
              <h4>特色</h4>
              <p>
                是區域最大規模的兒童樂園，雪道寬廣且坡度平緩，有多項滑雪課程提供報名，適合初學者滑雪。
              </p>
              <ul class="ticket">
                <li>纜車票</li>
                <li>¥5400</li>
                <li>降雪量</li>
                <li>45cm</li>
              </ul>
            </div>
          )}
          {selectedOption === "option6" && (
            <div>
              <img src="../pic_6.jpg" alt="輕井澤王子大飯店滑雪場" />
              <h3>輕井澤王子</h3>
              <h3>大飯店</h3>
              <h4>滑雪場</h4>
              <h4>特色</h4>
              <p>
                是區域最大規模的兒童樂園，雪道寬廣且坡度平緩，有多項滑雪課程提供報名，適合初學者滑雪。
              </p>
              <ul class="ticket">
                <li>纜車票</li>
                <li>¥8000</li>
                <li>降雪量</li>
                <li>50cm</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
