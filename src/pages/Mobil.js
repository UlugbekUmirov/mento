import kursimg from "../img/Frame 427320745.svg";
import appstore from "../img/Group 58.png";
import googleplay from "../img/Group 56.png";
import { useTranslation } from "react-i18next";
export default function Mobil() {
  const { t } = useTranslation("translation", { keyPrefix: "Mobil" });
  return (
    <div className="container">
      <div
        className="mobile-ilova 
    "
        id="about"
      >
        <div className="mobile-ilova__title">
          <h2>{t("h2")}</h2>
          <p>{t("p")}</p>
          <div>
            <img src={appstore} alt="" />
            <img src={googleplay} alt="" />
          </div>
        </div>
        <div className="kurs-image">
          <div className="image">
            <img src={kursimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
