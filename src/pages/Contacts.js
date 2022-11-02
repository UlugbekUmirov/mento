import { useState } from "react";
import InputMask from "react-input-mask";
import { useTranslation } from "react-i18next";
import axios from "../Api/axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contacts() {
  const { t } = useTranslation("translation", { keyPrefix: "Contact" });
  const notify = () => toast("So'rovingiz yuborildi");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [step, setStep] = useState(0);
  const [networkError, setNetworkError] = useState(false);

  const SendSMS = async (e) => {
   
   e.preventDefault();
    const data = new FormData();
    data.append("number", number);
    data.append("name", name);
    data.append("description", description);
    
    axios()
      .post("request/?lan=ru", data)
      .then((response) => {
        const status = response?.data?.status;

        if (status === 1) {
          setStep(1);
          setDescription("");
          setName("");
          setNumber("");
        } else {
          setNetworkError(true);
        }
      })
      .catch(() => setNetworkError(true));
    ///////////////////////////////
      await  axios().get(
        encodeURI(
          `https://api.telegram.org/bot5702349594:AAHkwZZFWMAgffq76pmtE1VaFuxJnf7nv4w/sendMessage?chat_id=${-1001818127319}&text=📮Text:${description}\n<b>👤Ismi:</b> ${name}\n<b>📞Telefon raqami:</b>+${number}\n&parse_mode=html`)
      );
  };

  return (
    <div>
      {step === 0 ? (
        <>
          <div className="contact container">
            <div className="exports">{t("h1")}</div>
            <div className="contact-text">
              Образовательная платформа №1 по качеству обучения. Вы получите
              знания, которые помогут вам освоить профессию мечты и изменить
              жизнь.
            </div>
            <form onSubmit={SendSMS}>
              <input
                name="name"
                type="text"
                className="feedback-input"
                placeholder={t('name')}
                value={name}
                onChange={(e) => {
                  const name = e.target.value;
                  setName(name);
                }}
              />
              <InputMask
                className="InputMask"
                placeholder={t('phone')}
                formatChars={{ b: "[0-9]" }}
                mask="+998 (bb) bbb-bb-bb"
                maskChar=""
                value={number}
                onChange={(e) => {
                  const number = e.target.value
                    .replace(/-/g, "")
                    .replace(/\(/g, "")
                    .replace(/\)/g, "")
                    .replace(/\+/g, "")
                    .replace(/\s/g, "")
                    .replace(/_/g, "");
                  setNumber(number);
                }}
              />
              <textarea
                name="text"
                className="feedback-input savol"
                placeholder={t('question')}
                value={description}
                onChange={(e) => {
                  const description = e.target.value;
                  setDescription(description);
                }}
              ></textarea>
              {networkError && <p style={{'color':"red"}} >Internetga ulanmagan . Iltimos internetingizni qayta tekshirib kuring</p>}
              <input
            
                onClick={notify}
                type="submit"
                className="yuborish"
                value={t("button")}
              />
            </form>
          </div>
        </>
      ) 
      : (
        <>
          <div className="contact container">
            <div className="exports">{t("h1")}</div>
            <p className="contact-text">
              Образовательная платформа №1 по качеству обучения. Вы получите
              знания, которые помогут вам освоить профессию мечты и изменить
              жизнь.
            </p>
            <form onSubmit={SendSMS }>
              <input
                name="name"
                type="text"
                className="feedback-input"
                placeholder="Ismi-sharifingiz*"
                value={name}
                onChange={(e) => {
                  const name = e.target.value
                    .replace(/-/g, "")
                    .replace(/\(/g, "")
                    .replace(/\)/g, "")
                    .replace(/\+/g, "")
                    .replace(/\s/g, "")
                    .replace(/_/g, "");
                  setName(name);
                }}
              />
              <InputMask
                className="InputMask"
                placeholder="Telefon raqamingiz*"
                formatChars={{ b: "[0-9]" }}
                mask="+998 (bb) bbb-bb-bb"
                maskChar=""
                value={number}
                onChange={(e) => {
                  const number = e.target.value
                    .replace(/-/g, "")
                    .replace(/\(/g, "")
                    .replace(/\)/g, "")
                    .replace(/\+/g, "")
                    .replace(/\s/g, "")
                    .replace(/_/g, "");
                  setNumber(number);
                }}
              />
              <textarea
                name="name"
                type="text"
                className="feedback-input savol"
                placeholder="Savolingiz*"
                value={description}
                onChange={(e) => {
                  const description = e.target.value;
                  setDescription(description);
                }}
              ></textarea>
              {networkError && <p style={{"color":"red"}}>Internetga ulanish muammosi. Iltimos qaytadan tekshirib ko'ring!</p>}
              <input    type="submit" className="yuborish" value={t("button")} />
            </form>
          </div>
          <h4>
            <ToastContainer />
          </h4>
        </>
      )}
    </div>
  );
}
