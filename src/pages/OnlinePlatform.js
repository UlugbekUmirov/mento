import kursimg from "../img/Frame 427320745.svg";
import { useTranslation } from "react-i18next";
import Login from "../test/Login"
import { useState } from "react";
import { Link } from "react-router-dom";
export default function OnlinePlatform() {
  const [loginshow, setLoginshow] = useState(false);
  
  const handleSHowLogin = () => {
    setLoginshow(!loginshow);
  };
  const { t } = useTranslation("translation", { keyPrefix: "OnlinePlatform" });
  return (
    <div className="container">
      <div className="online-platform">
        <div className="kurs-img">
          <div className="image">
            <img src={kursimg} alt="" />
          </div>
        </div>
        <div className="left"></div>
        <div className="online-platform__title">
          <h2>{t("h2")}</h2>
          <p>{t("p")}</p>
          <Link to='test'>
          <button onClick={handleSHowLogin} className="start-kurs">
            {t("button")}
          </button>
          </Link> 
        </div>     
      </div>
    </div>
  );
}
