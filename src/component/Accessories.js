// const Counter= () => {
//   return (
//     <main>
//       {/* 配件  */}

//       <section id="equipment3">
//         <figure class="title3">
//           <img src="./images/equipment-text.svg" alt="裝備介紹" />
//         </figure>
//         <figure class="people-ski">
//           <img src="./images/equipment-people-ski.svg" alt="雙板人物" />
//         </figure>
//         <figure class="people-sb">
//           <img src="./images/equipment-people-sb.svg" alt="單板人物" />
//         </figure>
//         <div class="helmet">
//           <h4>安全帽</h4>
//           <p class="p1">
//             請務必選擇合適的安全帽，並正確地佩戴，
//             <br />
//             安全帽可以減少頭部受到的衝擊力，保護腦部免受傷害。
//           </p>
//         </div>
//         <div class="goggles">
//           <h4>雪鏡</h4>
//           <p class="p2">
//             雪地會反射紫外線，滑行當中，風雪會吹打眼睛，阻礙視野，
//             <br />
//             為了避免眼睛受傷，滑雪需配戴抗紫外線的雪鏡。
//           </p>
//         </div>
//         <div class="boots">
//           <h4>滑雪鞋</h4>
//           <p class="p2">滑雪鞋有分雙板鞋和單板鞋兩種。</p>
//           <h4>雙板鞋</h4>
//           <p class="p2">
//             外殻比較硬和高身，穿脫比較不方便，但有很好的保護作用。
//           </p>
//           <h4>單板鞋</h4>
//           <p class="p2">滑雪鞋有分雙板鞋和單板鞋兩種。</p>
//         </div>

//         <div class="gloves">
//           <h4>滑雪手套</h4>
//           <p class="p2">
//             配戴有防水和保暖功能的手套，
//             <br />
//             能抗寒和減輕撞擊力。
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Counter;

//Counter.jsx

import React, { useState } from "react";
import "../styles/EquipmentPage.css";
import "./counter/Accessories.css";

function Accessories() {
  const [myNumber, setMyNumber] = useState(0);
  //useState的標準寫法

  function onClickButtonHandler() {
    setMyNumber((prev) => prev + 1);
  }
  //點擊按鈕會觸發的函式

  return (
    <div>
      {myNumber === 0 ? (
        <section id="equipment1">
          <figure class="title1">
            <img src="./images/equipment-text.svg" alt="裝備介紹" />
          </figure>
          <figure class="people-ski">
            <img src="./images/equipment-people-ski.svg" alt="雙板人物" />
          </figure>
          <figure class="people-sb">
            <img src="./images/equipment-people-sb.svg" alt="單板人物" />
          </figure>
          <div class="inside">
            <h4>保暖衣物</h4>
            <p class="p1">
              建議內層選擇具吸濕排汗材質的衣物，不需選擇發熱衣的材質，
              <br />
              防止運動時流汗導致衣物濕掉太冷。
            </p>
          </div>
          <div class="socks">
            <h4>長襪</h4>
            <p class="p2">穿著長襪有助於減輕小腿與滑雪鞋之間的直接磨擦。</p>
          </div>
        </section>
      ) : (
        //   <p>這是你點擊第{myNumber}按鈕</p>

        <section id="equipment3">
          <figure class="title3">
            <img src="./images/equipment-text.svg" alt="裝備介紹" />
          </figure>
          <figure class="people-ski">
            <img src="./images/equipment-people-ski.svg" alt="雙板人物" />
          </figure>
          <figure class="people-sb">
            <img src="./images/equipment-people-sb.svg" alt="單板人物" />
          </figure>
          <div class="helmet">
            <h4>安全帽</h4>
            <p class="p1">
              請務必選擇合適的安全帽，並正確地佩戴，
              <br />
              安全帽可以減少頭部受到的衝擊力，保護腦部免受傷害。
            </p>
          </div>
          <div class="goggles">
            <h4>雪鏡</h4>
            <p class="p2">
              雪地會反射紫外線，滑行當中，風雪會吹打眼睛，阻礙視野，
              <br />
              為了避免眼睛受傷，滑雪需配戴抗紫外線的雪鏡。
            </p>
          </div>
          <div class="boots">
            <h4>滑雪鞋</h4>
            <p class="p2">滑雪鞋有分雙板鞋和單板鞋兩種。</p>
            <h4>雙板鞋</h4>
            <p class="p2">
              外殻比較硬和高身，穿脫比較不方便，但有很好的保護作用。
            </p>
            <h4>單板鞋</h4>
            <p class="p2">滑雪鞋有分雙板鞋和單板鞋兩種。</p>
          </div>

          <div class="gloves">
            <h4>滑雪手套</h4>
            <p class="p2">
              配戴有防水和保暖功能的手套，
              <br />
              能抗寒和減輕撞擊力。
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Accessories;
