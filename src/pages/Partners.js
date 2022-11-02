import logoone from "../img/Image.png";
import logotwo from "../img/Image-1.png";
import logothree from "../img/Image-2.png";
import logofour from "../img/Image-3.png";
import logofive from "../img/Image-4.png";
import logosix from "../img/Image-5.png";
import { useTranslation } from "react-i18next";
/* import logoseven from "../img/Image-6";
import logoeight from "../img/Image-7.png"; */

export default function Partners() {
  const { t } = useTranslation("translation", { keyPrefix: "Exports" });
  return (
    <div className="container">
      <div className="exports">{t("h1partners")}</div>
      <div className="partners">
        <img src={logoone} alt="" />
        <img src={logotwo} alt="" />
        <img src={logothree} alt="" />
        <img src={logofour} alt="" />
        <img src={logofive} alt="" />
        <img src={logosix} alt="" />
        {/*         <img src={logoseven} alt="" />
        <img src={logoeight} alt="" /> */}
      </div>
    </div>
  );
}
