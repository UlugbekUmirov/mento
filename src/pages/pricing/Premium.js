import { useEffect, useState } from "react";
import ReactSelect from "./ReactSelect";
import axios from "../../Api/axios";
import PricingModal from "./PricingModal";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar";
import Footer from "../../Footer";
export default function Premium(props) {
  const [isAgreeone, setIsAgreeone] = useState(false);
  const [isAgreetwo, setIsAgreetwo] = useState(false);
  const [isAgreethree, setIsAgreethree] = useState(false);
  const [isAgreefour, setIsAgreefour] = useState(false);
  const [test, setTest] = useState(false);
  const [options, setOptions] = useState([]);
  const [onlineone, setOnlineone] = useState([]);
  const [onlinetwo, setOnlinetwo] = useState([]);
  const [onlinethree, setOnlinethree] = useState([]);
  const [onlinefour, setOnlinefour] = useState([]);
  const [plans, setPlans] = useState({});
  const [pricing, setPricing] = useState(false);
  const [activePayment, setActivePayment] = useState(0);
  const [ispricing, issetPricing] = useState(0);
  const [type, setType] = useState([]);
  const [step, setStep] = useState(0);
  const [login, setLogin] = useState("");
  const { t } = useTranslation("translation", { keyPrefix: "Pricing" });
  const checkedHandlerone = (e) => {
    setIsAgreeone(!isAgreeone);
    setOnlineone([]);
  };
  const checkedHandlertwo = () => {
    setIsAgreetwo(!isAgreetwo);
    setOnlinetwo([]);
  };
  const checkedHandlerthree = () => {
    setOnlinethree([]);

    setIsAgreethree(!isAgreethree);
  };
  const checkedHandlerfour = () => {
    setIsAgreefour(!isAgreefour);
    setOnlinefour([]);
  };
  const checkHandlefive = () => {
    setTest(!test);
  };
  const HandlePricingModal = () => {
    setPricing(!pricing);
  };

  useEffect(() => {
    const data = new FormData();
    axios()
      .get("/courses/")
      .then((response) => {
        const data = response?.data?.courses;
        const courses = Array.isArray(data) ? data : [];
        setOptions(courses);
      })
      .catch(() => setOptions([]));

    axios()
      .get("/course/price")
      .then((response) => {
        console.log(response);
        const plans = response?.data?.plans;
        setPlans(plans);
      })
      .catch(() => console.log("err"));

    axios()
      .get("/get-payment-types/")
      .then((response) => {
        const status = response?.data?.status;
        if (status === 1) {
          setStep(1);
        } else {
          setStep(0);
        }
        const Type = response?.data?.type;
        const type = Array.isArray(Type) ? Type : [];
        setType(type);
        if (status === 1) {
          setStep(step);
        }
      })
      .catch(() => setType([]));

      data.append('login' , login)
      axios()
      .post('/get-payment-url-front/' , data)
      .then(response =>{
       const status = response?.data?.status;
       if(status === 1){
      setStep(1)
      }
      })
  }, []);

  return (
    <div>
      <Navbar/>
      <main>
    <div className="container premiums">
      <div className="pricing-title exports">{t("pricingtitle")}</div>
      <div className="premium ">
        <div className="row">
          <div className="pricings col-lg-8  col-12">
            <div className="onlaynkurs plan">
              <div class="form-check">
                <div style={{"display":"flex" , "alignItems":"center"}} >
                <input
                  class="form-check-input"
                  type="checkbox"
                  checked={isAgreeone}
                  onChange={checkedHandlerone}
                  id="flexCheckIndeterminateone"
                />
                <label class="form-check-label" for="flexCheckIndeterminateone">
                  {t("onlinekurs")}
                </label>
                </div>  
                </div> 
             <div >     
                {isAgreeone && (
                  <ReactSelect
                    style={{"marginTop":"1rem"}}
                    value={onlineone}
                    onChange={setOnlineone}
                    options={options.map(({ id, name }) => ({
                      label: name,
                      value: id,
                    }))}
                  />
                )}
                </div>          
          <div>
                {onlineone.length !== 0 && isAgreeone ? (
                  <div className="counts">
                    {onlineone.length !== 0 ? (
                      <div className="count">{onlineone.length + "x"}</div>
                    ) : (
                      ""
                    )}
                    <div className="count-number">
                      {onlineone.length !== 0 ? 99000 : ""}
                    </div>
                    <div className="month">{t("oyiga")}</div>
                  </div>
                ) : (
                  ""
                )}
         </div>
        </div>
            <div className="mandatory plan">
              <div class="form-check">
                <div  style={{"display":"flex"}}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  checked={isAgreetwo}
                  name="isAgree"
                  onChange={checkedHandlertwo}
                  id="flexCheckIndeterminatetwo"
                />
                <label class="form-check-label" for="flexCheckIndeterminatetwo">
                  {t("mandatory")}
                </label>
                </div>
                </div>
                <div >
                {isAgreetwo && (
                  <ReactSelect
                    value={onlinetwo}
                    onChange={setOnlinetwo}
                    options={options.map(({ id, name }) => ({
                      label: name,
                      value: id,
                    }))}
                  />
                )}</div>
                {onlinetwo.length !== 0 && isAgreetwo ? (
                  <div className="counts">
                    {onlinetwo.length !== 0 ? (
                      <div className="count">{onlinetwo.length + "x"}</div>
                    ) : (
                      ""
                    )}
                    <div className="count-number">
                      {onlinetwo.length !== 0 ? 99000 : ""}
                    </div>
                    <div className="month">{t("oyiga")}</div>
                  </div>
                ) : (
                  ""
                )}
             
            </div>
            <div className="withteacher plan">
              <div class="form-check"> 
                <div style={{"display":"flex"}}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexCheckIndeterminatethree"
                  checked={isAgreethree}
                  onChange={checkedHandlerthree}
                />
                <label
                  class="form-check-label"
                  for="flexCheckIndeterminatethree"
                >
                  {t("withteacher")}
                </label>
                </div>
               </div>
               <div >
                {isAgreethree && (
                  <ReactSelect
                    value={onlinethree}
                    onChange={setOnlinethree}
                    options={options.map(({ id, name }) => ({
                      label: name,
                      value: id,
                    }))}
                  />
                )}</div>
                {onlinethree.length !== 0 && isAgreethree ? (
                  <div className="counts">
                    {onlinethree.length !== 0 ? (
                      <div className="count">{onlinethree.length + "x"}</div>
                    ) : (
                      ""
                    )}
                    <div className="count-number">
                      {onlinethree.length !== 0 ? 99000 : ""}
                    </div>
                    <div className="month">{t("oyiga")}</div>
                  </div>
                ) : (
                  ""
                )}
           
            </div>
            <div className="exam plan">
              <div class="form-check">
              <div style={{"display":"flex"}}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexCheckIndeterminatefour"
                  onChange={checkHandlefive}
                />
                <label
                  class="form-check-label"
                  for="flexCheckIndeterminatefour"
                >
                  {t("exam")}
                </label>
                </div>
              </div>
            </div>
            <div className="books plan">
              <div class="form-check">
              <div style={{"display":"flex"}}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexCheckIndeterminatefive"
                  checked={isAgreefour}
                  onChange={checkedHandlerfour}
                />
                <label
                  class="form-check-label"
                  for="flexCheckIndeterminatefive"
                >
                  {" "}
                  {t("books")}
                </label>
                </div>
                </div>
                <div >
                {isAgreefour && (
                  <ReactSelect
                    value={onlinefour}
                    onChange={setOnlinefour}
                    options={options
                    .map(({ id, name }) => ({
                      label: name,
                      value: id,
                    }))}
                  />
                )}
                </div>
                {onlinefour.length !== 0 && isAgreefour ? (
                  <div className="counts">
                    {onlinefour.length !== 0 ? (
                      <div className="count">{onlinefour.length + "x"}</div>
                    ) : (
                      ""
                    )}
                    <div className="count-number">
                      {onlinefour.length !== 0 ? 99000 : ""}
                    </div>
                    <div className="month">{t("oyiga")}</div>
                  </div>
                ) : (
                  ""
                )}
             
            </div>
          </div>
          <div className="col-lg-4">
            <div className="moneys plantwo col-12">
              <h2> {t("onlinekurs")}:</h2>
              {onlineone.length !== 0 &&
                isAgreeone &&
                onlineone.map((e) => {
                  const a = e.label;
                  return (
                    <div className="money-table">
                      <ul className="">
                        <li className="">
                          <span>{a}</span>
                        </li>
                      </ul>
                      <span>
                        {plans.course_price} {t("som")}
                      </span>
                    </div>
                  );
                })}
              <hr />
              <h2>
                {t("mandatory")}:
                {onlinetwo.map((e) => {
                  const a = e.label;
                  return (
                    <div className="money-table">
                      <ul className="">
                        <li className="">
                          <span>{a}</span>
                        </li>
                      </ul>
                      <span>
                        {plans.required_course_price} {t("som")}
                      </span>
                    </div>
                  );
                })}
              </h2>
              <hr />
              <h2>
                {t("withteacher")}:
                {onlinethree.map((e) => {
                  const a = e.label;
                  return (
                    <div className="money-table">
                      <ul className="">
                        <li className="">
                          <span>{a}</span>
                        </li>
                      </ul>
                      <span>
                        {plans.mentor_course_price} {t("som")}
                      </span>
                    </div>
                  );
                })}
              </h2>
              <hr />
              <h2>
                {t("exam")}
                {test && (
                  <div className="money-table">
                    <ul className="">
                      <li className="">
                        <span>{t("exam_price")}</span>
                      </li>
                    </ul>
                    <span>
                      {plans.exam_price} {t("som")}
                    </span>
                  </div>
                )}
              </h2>
              <hr />
              <h2>
                {t("books")}:
                {onlinefour.map((e) => {
                  const a = e.label;
                  return (
                    <div className="money-table">
                      <ul className="">
                        <li className="">
                          <span>{a}</span>
                        </li>
                      </ul>
                      <span>
                        {plans.book_course_price} {t("som")}
                      </span>
                    </div>
                  );
                })}
              </h2>
              <hr />
              <br />
            </div>
            <div className="all planthree">
              <hr className="border-all " />
              <h4>
                <span className="before"></span>
                <span className="after"></span>
                <span>{t("all")}:</span>
                <span style={{ alignItems: "center" }}>
                  <span style={{ marginRight: "6px" }}>
                    {plans.book_course_price * onlinefour.length +
                      plans.course_price * onlineone.length +
                      plans.mentor_course_price * onlinethree.length +
                      plans.required_course_price * onlinetwo.length +
                      (test ? parseInt(plans.exam_price) : 0)}
                  </span>
                  {t("som")}
                </span>
              </h4>
            </div>
            <input
              onClick={HandlePricingModal}
              style={{ marginTop: "18px" }}
              type="submit"
              className="yuborish"
              value={t("button")}
            />
          </div>
          {pricing && step === 0 ? (
            <PricingModal
              activePayment={activePayment}
              login = {login}
              step={step}
              setActivePayment={setActivePayment}
              HandlePricingModal={HandlePricingModal}
              type={type}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
      </main>
      <Footer/>
    </div>
  );
}
