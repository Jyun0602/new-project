import React, { useEffect } from "react";
// import React from "react";
import "../styles/EquipmentPage.css";
import ScrollToTopButton from "../component/ScrollToTop/ScrollToTopButton";
import equipmentTextImage from "../images/equipment-text.svg";
import equipmentPeopleSkiImage from "../images/equipment-people-ski.svg";
import equipmentPeopleSbImage from "../images/equipment-people-sb.svg";
import textClothImage from "../images/text-cloth.svg";
import OuterSkiImage from "../images/Outer-ski.svg";
import OuterSbImage from "../images/Outer-sb.svg";
import textAccessoriesImage from "../images/text-accessories.svg";
import AccessoriesSkiImage from "../images/Accessories-ski.svg";
import AccessoriesSbImage from "../images/Accessories-sb.svg";
import textToolImage from "../images/text-tool.svg";
import toolSkiImage from "../images/tool-ski.svg";
import toolSbImage from "../images/tool-sb.svg";

const EquipmentPage = () => {
  useEffect(() => {
    const imageList = [
      equipmentTextImage,
      equipmentPeopleSkiImage,
      equipmentPeopleSbImage,
      textClothImage,
      OuterSkiImage,
      OuterSbImage,
      textAccessoriesImage,
      AccessoriesSkiImage,
      AccessoriesSbImage,
      textToolImage,
      toolSkiImage,
      toolSbImage,
    ];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }, []);
  return (
    <main>
      {/* 最裡層 */}

      <section id="equipment1">
        <figure className="title1">
          <img src={equipmentTextImage} alt="裝備介紹" />
        </figure>
        <figure className="people-ski">
          <img src={equipmentPeopleSkiImage} alt="雙板人物" />
        </figure>
        <figure className="people-sb">
          <img src={equipmentPeopleSbImage} alt="單板人物" />
        </figure>
        <div className="e-inside">
          <div className="inside">
            <h4>保暖衣物</h4>
            <p className="p1">
              建議內層選擇具吸濕排汗材質的衣物，不需選擇發熱衣的材質，
              <br />
              防止運動時流汗導致衣物濕掉太冷。
            </p>
          </div>
          <div className="socks">
            <h4>長襪</h4>
            <p className="p2">穿著長襪有助於減輕小腿與滑雪鞋之間的直接磨擦。</p>
          </div>
        </div>
      </section>

      {/* 外套  */}

      <section id="equipment2">
        <figure className="title2">
          <img src={textClothImage} alt="雪衣" />
        </figure>
        <figure className="people-ski">
          <img src={OuterSkiImage} alt="雙板人物" />
        </figure>
        <figure className="people-sb">
          <img src={OuterSbImage} alt="單板人物" />
        </figure>
        <div className="e-outer">
          <div className="outer">
            <h4>外套</h4>
            <p className="p1">
              滑雪外套選擇具備保暖、透氣、防風和防水四大功能，
              <br />
              可在外套口袋塞入小的瓶裝水，補充水分。
            </p>
          </div>
          <div className="bottom">
            <h4>雪褲</h4>
            <p className="p2">
              建議購買滑雪專用的褲子，因為滑雪時會需要把褲子套住雪鞋外側，
              <br />
              避免雪進入褲管中，但雪鞋蠻粗的，一般的防水褲不容易套入。
            </p>
          </div>
        </div>
      </section>

      {/* 配件  */}

      <section id="equipment3" className="page3-box">
        <figure className="title3">
          <img src={textAccessoriesImage} alt="配件" />
        </figure>
        <figure className="people-ski">
          <img src={AccessoriesSkiImage} alt="雙板人物" />
        </figure>
        <figure className="people-sb">
          <img src={AccessoriesSbImage} alt="單板人物" />
        </figure>
        <div className="e-acc">
          <div className="helmet">
            <h4>安全帽</h4>
            <p className="p1">
              請務必選擇合適的安全帽，並正確地佩戴，
              <br />
              安全帽可以減少頭部受到的衝擊力，保護腦部免受傷害。
            </p>
          </div>
          <div className="goggles">
            <h4>雪鏡</h4>
            <p className="p2">
              雪地會反射紫外線，滑行當中，風雪會吹打眼睛，阻礙視野，
              <br />
              為了避免眼睛受傷，滑雪需配戴抗紫外線的雪鏡。
            </p>
          </div>
          <div className="boots">
            <h4>滑雪鞋</h4>
            <p className="p2">滑雪鞋有分雙板鞋和單板鞋兩種。</p>
            <h4>雙板鞋</h4>
            <p className="p2">
              外殻比較硬和高身，穿脫比較不方便，但有很好的保護作用。
            </p>
            <h4>單板鞋</h4>
            <p className="p2">滑雪鞋有分雙板鞋和單板鞋兩種。</p>
          </div>
        </div>

        <div className="gloves">
          <h4>滑雪手套</h4>
          <p className="p2">
            配戴有防水和保暖功能的手套，
            <br />
            能抗寒和減輕撞擊力。
          </p>
        </div>
      </section>

      {/* 雪具  */}
      <section id="equipment4">
        <figure className="title4">
          <img src={textToolImage} alt="雪具" />
        </figure>
        <figure className="people-ski2">
          <img src={toolSkiImage} alt="雙板人物" />
        </figure>
        <figure className="people-sb2">
          <img src={toolSbImage} alt="單板人物" />
        </figure>

        <div className="e-tools">
          <div className="ski2">
            <h4>雙板</h4>
            <p className="p1">
              雙板是兩塊板分別在左右腳上獨立使用，
              <br />
              長而且窄身。在沒動力時，可以步行而不用脫板。
            </p>
          </div>
          <div className="ski1">
            <h4>雪仗</h4>
            <p className="p1">
              輔助滑行使用，選擇可以收縮調整長度以便收納的雪杖。
              <br />
              可根據地形或坡度調整長度來幫助施力與平衡，
              <br />
              且在滑行時收納在背包裡或固定在背包上。
            </p>
          </div>
          <div className="e-sb">
            <h4>單板</h4>
            <p className="p2">
              由單一塊板構成，滑行時雙腳會固定在同一塊板上，短而且寬身。
              <br />
              沒動力時需要脫下其中一個/全部固定器來步行。
            </p>
          </div>
        </div>
      </section>
      {/* 補充 */}
      <ScrollToTopButton />
    </main>
  );
};

export default EquipmentPage;
