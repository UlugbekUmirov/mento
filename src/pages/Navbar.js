import logo from "../img/mento logo.svg";
import frame from "../img/Frame (2).svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
/* import Select from "react-select";
 */
export default function Navbar() {
  const { t } = useTranslation("translation", { keyPrefix: "navbar" });
  const { i18n } = useTranslation();
  const { language } = i18n;
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-link">
          <ul>
            <li>
              <a className="about" href="#about">
                {t("about")}
              </a>
            </li>
            <li>
              <a className="advantages" href="#advantages">
                {t("advantages")}
              </a>
            </li>
            <li>
              <a className="experts" href="#exports">
                {t("experts")}
              </a>
            </li>
            <li>
              <a href="#contacts">{t("contact")}</a>
            </li>
          </ul>
        </div>
        <div className="selects">
          <Link to="/premium">
            <button className="button-navbar">{t("button")}</button>
          </Link>
          <div className="select">
            <img src={frame} alt="" />
            <select
              value={language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="uz" selected>
                UZ
              </option>
              <option value="ru">RU</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
