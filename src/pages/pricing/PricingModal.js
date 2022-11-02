import { useState } from "react";
import InputMask from "react-input-mask";
export default function PricingModal({
  HandlePricingModal,
  type,
  activePayment,
  setActivePayment,
  login,
  step 
}) {
  const [number, setNumber] = useState("");
  const [smsInvalid, setSmsInvalid] = useState(false);

  return (
    <div>
      {
      step === 0 ?
      <div className="video">
        <div className="selection-list">
          <i
            className="material-icons selection-close"
            onClick={HandlePricingModal}
          >
            close
          </i>
          <div className="icon-pricing">
            <svg fill="none" height="60" viewBox="0 0 60 60" width="60">
              <rect
                opacity="0.05"
                width="60"
                height="60"
                rx="13"
                fill="#5762F7"
              ></rect>
              <g clip-path="url(#clip0_373_2082)">
                <path
                  d="M18.6875 30.0625H23.0625V31.9375H18.6875V30.0625Z"
                  fill="#5762F7"
                ></path>
                <path
                  d="M38.0625 25.375H16.8125C15.2617 25.375 14 26.6367 14 28.1875V43.1875C14 44.7384 15.2617 46 16.8125 46H38.0625C39.6133 46 40.875 44.7384 40.875 43.1875V28.1875C40.875 26.6367 39.6133 25.375 38.0625 25.375ZM16.8125 29.125C16.8125 28.6073 17.2322 28.1875 17.75 28.1875H24C24.5177 28.1875 24.9375 28.6073 24.9375 29.125V32.875C24.9375 33.3928 24.5177 33.8125 24 33.8125H17.75C17.2322 33.8125 16.8125 33.3928 16.8125 32.875V29.125ZM17.75 37.5625H19.625C20.1427 37.5625 20.5625 37.9823 20.5625 38.5C20.5625 39.0178 20.1427 39.4375 19.625 39.4375H17.75C17.2322 39.4375 16.8125 39.0178 16.8125 38.5C16.8125 37.9823 17.2322 37.5625 17.75 37.5625ZM24 43.1875H17.75C17.2322 43.1875 16.8125 42.7678 16.8125 42.25C16.8125 41.7323 17.2322 41.3125 17.75 41.3125H24C24.5177 41.3125 24.9375 41.7323 24.9375 42.25C24.9375 42.7678 24.5177 43.1875 24 43.1875ZM25.25 39.4375H23.375C22.8573 39.4375 22.4375 39.0178 22.4375 38.5C22.4375 37.9823 22.8573 37.5625 23.375 37.5625H25.25C25.7677 37.5625 26.1875 37.9823 26.1875 38.5C26.1875 39.0178 25.7677 39.4375 25.25 39.4375ZM30.875 39.4375H29C28.4823 39.4375 28.0625 39.0178 28.0625 38.5C28.0625 37.9823 28.4823 37.5625 29 37.5625H30.875C31.3927 37.5625 31.8125 37.9823 31.8125 38.5C31.8125 39.0178 31.3927 39.4375 30.875 39.4375ZM37.125 33.8125H34C33.4823 33.8125 33.0625 33.3928 33.0625 32.875C33.0625 32.3573 33.4823 31.9375 34 31.9375H37.125C37.6427 31.9375 38.0625 32.3573 38.0625 32.875C38.0625 33.3928 37.6427 33.8125 37.125 33.8125ZM37.125 30.0625H34C33.4823 30.0625 33.0625 29.6428 33.0625 29.125C33.0625 28.6073 33.4823 28.1875 34 28.1875H37.125C37.6427 28.1875 38.0625 28.6073 38.0625 29.125C38.0625 29.6428 37.6427 30.0625 37.125 30.0625Z"
                  fill="#5762F7"
                ></path>
                <path
                  d="M45.9028 30.5739L44.0425 23.6313L40.9121 24.4701C42.0279 25.3277 42.7489 26.6747 42.7489 28.1876V34.3306L43.914 34.0184C45.412 33.6171 46.3042 32.0718 45.9028 30.5739Z"
                  fill="#5762F7"
                ></path>
                <path
                  d="M37.2894 23.5L43.5586 21.8202L43.0733 20.0091L30.0449 23.5H37.2894Z"
                  fill="#5762F7"
                ></path>
                <path
                  d="M16.186 23.5H22.8009L42.5884 18.198L42.0222 16.0849C41.6208 14.587 40.0756 13.6948 38.5776 14.0962L18.0517 19.5961C16.5537 19.9975 15.6616 21.5427 16.0629 23.0407L16.186 23.5Z"
                  fill="#5762F7"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_373_2082">
                  <rect
                    fill="white"
                    height="32"
                    transform="translate(14 14)"
                    width="32"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 className="pricing-modal__title">To’lov turini tanlang</h3>
          <div className="">
            <div id="myDIV" className="payment-types content-pricing">
              {type?.map((type) => {
                return (
                  <div
                    onClick={() => setActivePayment(type?.payment_type)}
                    className={
                      "payment col-xs-12 col-sm-4 " +
                      (type?.payment_type === activePayment ? "active" : "")
                    }
                  >
                   {/*  <img
                      style={{ maxWidth: "120px" }}
                      src={type.image}
                      alt={type.text}
                    /> */}
                  </div>
                );
              })}
            </div>
          </div>
          <InputMask
            className="InputMask money-input"
            placeholder="Telefon raqamingizni to'liq kiriting"
            formatChars={{ b: "[0-9]" }}
            mask="+998 (bb) bbb-bb-bb"
            maskChar=""
            value={login}
            onChange={(e) => {
              const login = e.target.value
                .replace(/-/g, "")
                .replace(/\(/g, "")
                .replace(/\)/g, "")
                .replace(/\+/g, "")
                .replace(/\s/g, "")
                .replace(/_/g, "");
              setNumber(login);
            }}
            onFocus={() => setSmsInvalid(false)}

          />
          <input
            type="submit"
            className="yuborish money-send"
            value="Yuboring"
          />
          <div className="number-text">Yoki qo'ngiroq qiling:</div>
          <div className="number-type">
            <a href="tel:+998 93 043-82-53">+998 93 043-82-53</a>
          </div>
        </div>

      </div>:
      <a target="_blank" 
      href={`https://my.click.uz/services/pay?service_id=${25236}&merchant_id=17579&amount=${23}&transaction_param=${495}&return_url=https://mento.uz`}></a>
      }
   
    </div>
  );
}
