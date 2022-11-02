import fizika from "../img/Rectangle 10039-1.png";
import tarix from "../img/Rectangle 10039-2.png";
import biologiya from "../img/Rectangle 10039-3.png";
import matematika from "../img/Rectangle 10039-3.png";
import geografiya from "../img/Rectangle 10039-5.png";
import dasturlash from "../img/Rectangle 10039.png";
import clock from "../img/Frame (3).svg";
import book from "../img/Frame (4).svg";
import { useTranslation } from "react-i18next";

export default function Kurs() {
  const { t } = useTranslation("translation", { keyPrefix: "Kurs" });
  return (
    <div className="kurs">
      <h2 className="exports">{t("h2")}</h2>
      <div className="container">
        <div className="content">
          <div className="card ">
            <img src={fizika} className="card-img-top" alt="" />
            <div className="card-body">
              <span>{t("card1h")}</span>
              <p className="card-text">{t("cardp")}</p>
              <div className="timevsbook">
                <div className="time">
                  <img src={clock} alt="" />
                  100 soat
                </div>
                <div className="book">
                  <img src={book} alt="" />2 {t("kitob")}
                </div>
              </div>
            </div>
          </div>
          <div className="card  ">
            <img src={tarix} className="card-img-top" alt="" />
            <div className="card-body">
              <span>{t("card2h")}</span>
              <p className="card-text">{t("cardp")}</p>
              <div className="timevsbook">
                <div className="time">
                  <img src={clock} alt="" />
                  100 {t("soat")}
                </div>
                <div className="book">
                  <img src={book} alt="" />2 {t("kitob")}
                </div>
              </div>
            </div>
          </div>
          <div className="card ">
            <img src={biologiya} className="card-img-top" alt="" />
            <div className="card-body">
              <span>{t("card3h")}</span>
              <p className="card-text">{t("cardp")}</p>
              <div className="timevsbook">
                <div className="time">
                  <img src={clock} alt="" />
                  100 {t("soat")}
                </div>
                <div className="book">
                  <img src={book} alt="" />2 {t("kitob")}
                </div>
              </div>
            </div>
          </div>
          <div className="card ">
            <img src={matematika} className="card-img-top" alt="" />
            <div className="card-body">
              <span>{t("card4h")}</span>
              <p className="card-text">{t("cardp")}</p>
              <div className="timevsbook">
                <div className="time">
                  <img src={clock} alt="" />
                  100 {t("soat")}
                </div>
                <div className="book">
                  <img src={book} alt="" />2 {t("kitob")}
                </div>
              </div>
            </div>
          </div>
          <div className="card ">
            <img src={geografiya} className="card-img-top" alt="" />
            <div className="card-body">
              <span>{t("card5h")}</span>
              <p className="card-text">{t("cardp")}</p>
              <div className="timevsbook">
                <div className="time">
                  <img src={clock} alt="" />
                  100 {t("soat")}
                </div>
                <div className="book">
                  <img src={book} alt="" />2 {t("kitob")}
                </div>
              </div>
            </div>
          </div>
          <div className="card ">
            <img src={dasturlash} className="card-img-top" alt="" />
            <div className="card-body">
              <span>{t("card6h")}</span>
              <p className="card-text">{t("cardp")}</p>
              <div className="timevsbook">
                <div className="time">
                  <img src={clock} alt="" />
                  100 {t("soat")}
                </div>
                <div className="book">
                  <img src={book} alt="" />2 {t("kitob")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
