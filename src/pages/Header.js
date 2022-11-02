import Rectangle from "../img/Rectangle 31.png";
import vector from "../img/Vector.svg";
import { useState } from "react";
import Video from "./Video";
import Selection from "../test/Selection";
import Login from "../test/Login";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Header() {
  const { t } = useTranslation("translation", { keyPrefix: "header" });
  const [videoshow, setVideoshow] = useState(false);
  const [loginshow, setLoginshow] = useState(false);
  const [selectionshow, setSelectionshow] = useState(false);

  const handleShowVideo = () => {
    setVideoshow(!videoshow);
  };
  const hanldleShowSelection = () => {
    setSelectionshow(!selectionshow);
  };
  const handleSHowLogin = () => {
    setLoginshow(!loginshow);
  };
  return (
    <div className="header ">
      <div className="container">
        <div className="home ">
          <div className="home-title ">
            <h1>{t("hometitleh1")}</h1>
            <p>{t("hometitlep")}</p>
            <Link to="/test">
              <button className="button-header" onClick={handleSHowLogin}>
                {t("homebutton")}
              </button>
            </Link>
          </div>
          <div className="reactangle" onClick={handleShowVideo}>
            <span className="click">
              <img className="vector" src={vector} alt="" />
            </span>
            <img className="rectangle-img" src={Rectangle} alt="" />
          </div>
        </div>
        {loginshow && <Login handleSHowLogin={handleSHowLogin} />}
        {videoshow && <Video handleShowVideo={handleShowVideo} />}
        {selectionshow && (
          <Selection hanldleShowSelection={hanldleShowSelection} />
        )}
      </div>
    </div>
  );
}
