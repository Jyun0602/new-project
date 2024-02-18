import React, { useState } from "react";
import "../styles/EquipmentPage.css";
import "./counter/Outer.css";

function Outer() {
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
            <img src="../images/equipment-text.svg" alt="裝備介紹" />
          </figure>
          <figure class="people-ski">
            <img src="../images/equipment-people-ski.svg" alt="雙板人物" />
          </figure>
          <figure class="people-sb">
            <img src="../images/equipment-people-sb.svg" alt="單板人物" />
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

        <section id="equipment2">
          <figure class="title2">
            <img src="../images/equipment-text.svg" alt="裝備介紹" />
          </figure>
          <figure class="people-ski">
            <img src="../images/equipment-people-ski.svg" alt="雙板人物" />
          </figure>
          <figure class="people-sb">
            <img src="../images/equipment-people-sb.svg" alt="單板人物" />
          </figure>
          <div class="outer">
            <h4>外套</h4>
            <p class="p1">
              滑雪外套選擇具備保暖、透氣、防風和防水四大功能，
              <br />
              可在外套口袋塞入小的瓶裝水，補充水分。
            </p>
          </div>
          <div class="bottom">
            <h4>雪褲</h4>
            <p class="p2">
              建議購買滑雪專用的褲子，因為滑雪時會需要把褲子套住雪鞋外側，
              <br />
              避免雪進入褲管中，但雪鞋蠻粗的，一般的防水褲不容易套入。
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Outer;
