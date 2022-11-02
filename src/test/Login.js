import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import teachertwo from "../img/teacher 1.svg";
import mobile from "../img/mobile.svg";
import selectionone from "../img/icon-selection-2.svg";
import Select from "react-select";
import selectitwo from "../img/icon-selection-3.svg";
import selectiothree from "../img/Vector-icon-selection.svg";
import undov from "../img/undov.svg"
import smile from '../img/smileicons.svg'
import mask from '../img/Mask group.svg'
import InputMask from "react-input-mask";
import axios from "../Api/axios";
import Loader from "../pages/Loader";
import Selection from "./Selection";
import Footer from "../Footer";
import Navbar from "../pages/Navbar";
import ringer from "../audio/click.mp3";
import { isDisabled } from "@testing-library/user-event/dist/utils";
export default function Login(props) {
  const [codeshow, setCodeshow] = useState(false);
  const [smscode, setSmscode] = useState("");
  const [id, setId] = useState(0);
  const [step, setStep] = useState(0);
  const [selectionshow, setSelectionshow] = useState(false);
  const [login, setLogin] = useState("");
  const [authLevel, setAuthLevel] = useState(0);
  const [questionType, setQuestionType] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [testtanlov , setTesttanlov] = useState(false)
  const [smsInvalid, setSmsInvalid] = useState(false);
  const [loader, setLoader] = useState(false);
  const [testtanlowanswers , setTesttanlowanswers]  = useState(true)
  const [course, setCourse] = useState([]);
  const [types , setTypes] = useState({})
  const [courseresults , setCourseResult] =useState({})
  const [options, setOptions] = useState({});
  const [data , setData] = useState({})
  const [activebutton, setActivebutton] = useState(0);
  const [value, setValue] = useState({label: 'Fanni tanlang', value: '', isDisabled: true});
  const [valuetwo, setValuetwo] = useState({label: 'Fanni tanlang', value: '', isDisabled: true});
  const [valuethree, setValuethree] = useState({label: 'Fanni tanlang', value: '', isDisabled: true});
  const [activeQuestion, setActiveQuestion] = useState({});
  const [answers, setAnswers] = useState({});
  const [resulttab , setResultTab] = useState(false)
  const audio = new Audio(ringer); 
  audio.loop = true;

  const handleCodeShow = (e) => {
    setCodeshow(!codeshow);
    e.preventDefault();
    setLoader(true);
    const data = new FormData();
    data.append("login", login);
    data.append("is_test", 1);
    axios()
      .post("/register", data)
      .then((response) => {
        const status = response?.data?.status;
        setLoader(false);
        if (status === 1) {
          setStep(1);
        } else {
          setSmsInvalid(true);
        }
      })
      .catch(() => {
        setNetworkError(true);
        setLoader(false);
      });
  };
  const handleShowPsixologik = () => {
    setQuestionType(true);
    setStep(3);
  };
  const handleShowTanlovFan = () => {
    //setQuestionType(true);
    setTesttanlov(true)
    setStep(3);
  };
  const handelSelectionShow = (e) => {
    const data = new FormData();
    data.append("smscode", smscode);
    data.append("login", login);
    setLoader(true);
    axios()
      .post("/accept", data)
      .then((response) => {
        const status = response?.data?.status;
        setLoader(false);
        if (status === 1) {
          const token = response?.data?.token;
          localStorage.setItem("token", token);
          setStep(2);
        } else {
          setSmsInvalid(true);
        }
      })
      .catch(() => {
        //    setLoader(false);
        setNetworkError(true);

      });

    e.preventDefault();
  };
  const HandleTestUz = (id) => { 
    setId(id);
    setAuthLevel(1);
    axios()
      .get(`/questions/?courses=${id}&lan=${id}`)
      .then((response) => {
        const data = response?.data;
        const course = Array.isArray(data) ? data : [];
        setCourse(course);
        const activeQuestion = course[0] ? course[0] : {};
        setActiveQuestion(activeQuestion);
      })
      .catch(() => {
        setCourse([])
        setNetworkError(true);
      });
  };
  const HandelTestTanlovFan = () =>{
    setTesttanlov(false)
    setTesttanlowanswers(true)
    axios()
    .get(`/questions/?courses=${value.value},${valuetwo.value},${valuethree.value}&lan=ru`)
    .then((response) => {
      const data = response?.data;
      const course = Array.isArray(data) ? data : [];
       setCourse(course);
      const activeQuestion = course[0] ? course[0] : {};
      setActiveQuestion(activeQuestion); 
    })
    .catch(() => {
      setNetworkError(true);
      setCourse([])});
    
  }
  const Handletesttanlowanswers = ()=>{
    setId(id)
    const data = {courses : [value.value , valuetwo.value , valuethree.value]  , answers};
    axios()
      .post("/test-check-anonym?lan=ru", data)
      .then((response) => {
        const data  = response?.data;
        const status = data?.status;
        const  types = response?.data?.types
        const courseresults = response?.data?.course_results
        setCourseResult(courseresults)
        console.log(courseresults)
        setTypes(types)
        setData(data)
      ;
      if(status === 1){
        setTesttanlowanswers(false)
        }  
        })
        .catch((err)=>{
          setNetworkError(true);
          console.log(err)})
  }
  const HandleYakunlash = (id) => {
    setId(id);
    const data = {courses : [id]  , answers};
    axios()
      .post("/test-check-anonym?lan=ru", data)
      .then((response) => {
        const data  = response?.data;
        const status = data?.status;
        const  types = response?.data?.types
        const courseresults = response?.data?.course_results
        setCourseResult(courseresults)
        console.log(courseresults)
        setTypes(types)
        setData(data)
      ;
      if(status === 1){
          setAuthLevel(2);
        }  
        })
        .catch((err)=>{
          setNetworkError(true);
          console.log(err)})
      };                
  const  HandletabFan = () =>{
     setResultTab(true)
  
  }
  const HandletabQobilyat = () =>{
     setResultTab(false)
   
  }
  const defaultOptions = {
    isMulti: false,
    isSearchable: false,
    styles: {
      control: (styles) => ({
        ...styles,
        padding: "20px",
        width: "100%",
        margin: "24px 0px 16px",
        borderRadius: "12px",
      }),
      singleValue: (styles) => ({
        ...styles,
        background: "white",
      }),
      menu: (styles) => ({
        ...styles,
        borderRadius: "12px",
        borderBottom: "0",
        padding: '0',
        color:'black'
      }),
      option: (styles) => ({
        ...styles,
        height: "60px",
        fontSize: "16px",
        backgroundColor:"white",
        color:'black',
        fontWeight: "400",
        border: "0!important",
        "&:hover": {
          cursor: isDisabled === true ? "not-allowed" : "pointer",
          color:   isDisabled === true ? 'black' : "white",
          background:  isDisabled === true  ? "white ":  "#5762f7",
        },
      }),
      DropdownIndicator:(styles)=>({
       ...styles, 
       color:'black!important', 
       margin:'0px'
      }),
      indicatorsContainer:(styles)=>({
      ...styles,
      color:'black'
     }),
      clearIndicator: (styles) => ({
        ...styles,
        borderRadius: "50%",
      }),
      
      placeholder: (styles) => ({
        ...styles,
        color: "black",
        fontSize: "16px",
        fontWeight: "400",
      }),
    },
  };

  useEffect(() => {
    axios()
      .get("/courses/")
      .then((response) => {
        const data = response?.data?.courses;
        const courses = Array.isArray(data) ? data : [];
        setOptions(courses);
      })
      .catch(() => {
        setNetworkError(true);
        setOptions([])});
  }, []);


  return (
    <>
      {authLevel === 0 ? 
      (
        <>
          {step === 0 ? (
            loader ? (
              <Loader />
            ) : (
              <form onSubmit={handleCodeShow}>
                <div className="video">
                  <div className="selection-list">
                    <img className="selectionone" src={teachertwo} alt="" />
                    <h2 className="exports">Bilimingizni tekshiring</h2>
                    <p>
                      Testlar siz tanlagan fan doirasida turli mavzulardan
                      tuzilgan.
                    </p>
                    <InputMask
                      className="InputMask"
                      placeholder="Telefon raqamingiz"
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
                        setLogin(login);
                      }}
                      onFocus={() => setSmsInvalid(false)}
                    />

                    <input
                      type="submit"
                      value="Yuborish"
                      onClick={handleCodeShow}
                    />
                    {networkError && (
                      <h5 style={{ textAlign: "center", color: "red" }}>
                        internetingizni qayta tekshirib kuring{" "}
                      </h5>
                    )}
                  </div>
                </div>
              </form>
            )
          ) : step === 1 ? (
            <div>
              {loader ? (
                <Loader />
              ) : (
                //SendCode
                <form onSubmit={handelSelectionShow}>
                  <div className="video">
                    <div className="selection-list">
                      <img
                        className="selectionone mobile-icon"
                        src={mobile}
                        alt=""
                      />
                      <h2 className="exports">Tasdiqlash kodi</h2>
                      <p>
                        Tasdiqlash kodini
                        <span className="login-span">+{login}</span> raqamiga
                        yubordik. Tekshirib ko’ring!
                      </p>

                      <InputMask
                        className="InputMask"
                        placeholder="Tasdiqlash kodi"
                        formatChars={{ b: "[0-9]" }}
                        mask="b b b b"
                        maskChar=""
                        value={smscode}
                        onChange={(e) => {
                          const smscode = e.target.value
                            .replace(/-/g, "")
                            .replace(/\(/g, "")
                            .replace(/\)/g, "")
                            .replace(/\+/g, "")
                            .replace(/\s/g, "")
                            .replace(/_/g, "");
                          setSmscode(smscode);
                          setSmsInvalid(false);
                        }}
                        onFocus={() => {
                          setSmsInvalid(false);
                        }}
                      />
                      {smsInvalid && (
                        <span className="invalid-code">Sms kod noto'g'ri</span>
                      )}
                      <input type="submit" value="Yuborish" />
                    </div>

                    {selectionshow && (
                      <Selection handelSelectionShow={handelSelectionShow} />
                    )}
                  </div>
                  {networkError && <h4> xatolik bulli</h4>}
                </form>
              )}
            </div>
          ) : step === 2 ? (
            <div className="video">
              <div className="selection-list">
                <img className="selectionone" src={selectionone} alt="" />
                <h2 className="exports">Test turini tanlang</h2>
                <p>
                  Test savollari o'zingiz tanlagan fan doirasida turli
                  mavzulardan tuzilgan
                </p>
                <div className="selection-test content-selection">
                  <div className="test-one test" onClick={handleShowTanlovFan}>
                    <div className="test-one__img">
                      <img className="test-img" src={selectitwo} alt="" />
                    </div>
                    <span>Fanlar bo’yicha</span>
                  </div>
                  <div className="test-two test" onClick={handleShowPsixologik}>
                    <div className="test-two__img">
                      {" "}
                      <img src={selectiothree} alt="" />
                    </div>
                    <span>Psixologik</span>
                  </div>
                </div>
              </div>
            </div>
          ) : questionType ? (
            <div className="video">
              <div className="selection-list">
                <img className="selectionone" src={selectionone} alt="" />
                <h2 className="exports">Test tilini tanlang</h2>
                <p>Psixologik test topshiriladigan tilni tanlang</p>
                <div className="selection-test content-selection">
                  <div
                    className="test-one test"
                    onClick={() => HandleTestUz(12)}
                  >
                    <div className="test-one__img"></div>
                    <span>O'zbek tili</span>
                  </div>
                  <div
                    className="test-two test"
                    onClick={() => HandleTestUz(17)}
                  >
                    <div className="test-two__img"></div>
                    <span>Rus tili</span>
                  </div>
                </div>
              </div>
            </div>
          ) : testtanlov ? (
            <div>
              <div className="video">
                <div className="selection-list">
                  <div style={{ textAlign: "center" }}>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <rect
                        opacity="0.05"
                        width="60"
                        height="60"
                        rx="13"
                        fill="#5762F7"
                      ></rect>
                      <path
                        d="M18.8949 17.7763C18.8941 17.7763 18.8931 17.7763 18.8922 17.7763C18.5896 17.7763 18.3049 17.8943 18.09 18.1087C17.8726 18.3255 17.7529 18.6141 17.7529 18.9214V36.0921C17.7529 36.7218 18.2672 37.2353 18.8994 37.2369C21.5648 37.2433 26.0304 37.7988 29.111 41.0226V23.053C29.111 22.8395 29.0565 22.639 28.9536 22.4731C26.4252 18.4012 21.5663 17.7826 18.8949 17.7763Z"
                        fill="#5762F7"
                      ></path>
                      <path
                        d="M42.2476 36.0921V18.9213C42.2476 18.614 42.1279 18.3254 41.9106 18.1086C41.6957 17.8942 41.4108 17.7762 41.1085 17.7762C41.1075 17.7762 41.1065 17.7762 41.1057 17.7762C38.4343 17.7826 33.5755 18.4012 31.047 22.4731C30.9441 22.639 30.8896 22.8396 30.8896 23.053V41.0225C33.9703 37.7987 38.4359 37.2432 41.1012 37.2368C41.7334 37.2352 42.2476 36.7217 42.2476 36.0921Z"
                        fill="#5762F7"
                      ></path>
                      <path
                        d="M44.8554 21.7361H44.0252V36.0921C44.0252 37.6997 42.7153 39.0106 41.1052 39.0146C38.8444 39.02 35.1166 39.4621 32.4766 41.9608C37.0426 40.8428 41.8559 41.5696 44.5991 42.1947C44.9416 42.2727 45.2956 42.1921 45.57 41.9734C45.8434 41.7552 46.0003 41.4291 46.0003 41.079V22.881C46.0004 22.2497 45.4867 21.7361 44.8554 21.7361Z"
                        fill="#5762F7"
                      ></path>
                      <path
                        d="M15.9752 36.0921V21.7361H15.1449C14.5137 21.7361 14 22.2497 14 22.881V41.0787C14 41.4289 14.1569 41.7549 14.4303 41.9731C14.7045 42.1917 15.0582 42.2726 15.4012 42.1944C18.1444 41.5691 22.9579 40.8425 27.5237 41.9605C24.8837 39.4619 21.156 39.0199 18.8952 39.0145C17.2851 39.0106 15.9752 37.6997 15.9752 36.0921Z"
                        fill="#5762F7"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="exports">Kerakli fanni tanlang</h3>
                  <p>Test tanlangan fan dasturiga asoslanadi</p>
                  <Select
                    value={value}
                    onChange={setValue}
                    {...defaultOptions}
                    placeholder="Fanni tanlang"
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary25: "white",
                      },
                    })}
                    options={[
                      { label: "Fanni tanlang", value: "", isDisabled: true },
                      ...options
                        .filter(({ type }) => type === 1)
                        .map(({ id, name }) => ({
                          label: name,
                          value: id,
                        })),
                    ]}
                  />
                  <Select
                    {...defaultOptions}
                    placeholder="Fanni tanlang"
                    value={valuetwo}
                    onChange={setValuetwo}
                    options={[
                      { label: "Fanni tanlang", value: "", isDisabled: true },
                      ...options
                        .filter(({ type }) => type === 0)
                        .map(({ id, name }) => ({
                          label: name,
                          value: id,
                          if(value) {
                            return value === options.disabled;
                          },
                        })),
                    ]}
                  />
                  <Select
                    {...defaultOptions}
                    placeholder="Fanni tanlang"
                    value={valuethree}
                    onChange={setValuethree}
                    isOptionDisabled={({ value }) => value === valuetwo?.value}
                    options={options
                      .filter(({ type }) => type === 0)
                      .map(({ id, name }) => ({
                        label: name,
                        value: id,
                      }))}
                  />
                  <div className="testbuttons">
                    <button style={{ width: "100%" }} onClick = {HandelTestTanlovFan}>Yuborish</button>
                  </div>
                </div>
              </div>
            </div>
          ) :testtanlowanswers ? 
            <div>
            <Navbar />
            {networkError && (
                      <h5 style={{ textAlign: "center", color: "red" }}>
                        internetingizni qayta tekshirib kuring{" "}
                      </h5>
                    )}  
            <main className="main">
              <div className="container">
                <div className="Test-title">
                  <div className="belgilar-title">Savol belgilari</div>
                  <div className="all-buttons">
                    <div className="p">
                      <span className="icon-answred"></span>
                      <p>Javob berilgan</p>
                    </div>
                    <div className="p">
                      <span className="no-answred"></span>
                      <p>O’tkazib yuborilgan</p>
                    </div>
                    <div className="p">
                      <span className="active-icon"></span>
                      <p>Aktiv</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="">
                    {course.map((course, index) => {
                      const className =
                        activebutton === index
                          ? "active-button"
                          : answers[course?.id]
                          ? "answered-icons"
                          : activebutton > index
                          ? "no-answred-icons"
                          : "  ";
                      return (
                        <button
                          onClick={() => {
                            audio.loop = false;
                            audio.play();
                            setActivebutton(index);
                            setActiveQuestion(course);
                          }}
                          className={className + " another "}
                        >
                          {index + 1}
                        </button>
                      );
                    })}
                  </p>
                </div>
                {
                  <div className="testbuttons">
                    <button
                      onClick={() => {
                        audio.loop = false;
                        audio.play();
                        const index =
                          activebutton > 0 ? activebutton - 1 : activebutton;
                        const activeQuestion = course[index];
                        setActiveQuestion(activeQuestion);
                        setActivebutton(
                          activebutton > 0 ? activebutton - 1 : activebutton
                        );
                      }}
                    >
                      Oldingi
                    </button>
                    {activebutton === course.length - 1 ? (
                      <button
                        onClick={() => Handletesttanlowanswers(id)}
                        className="yakunlash-button"
                      >
                        Yakunlash
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          audio.loop = false;
                          audio.play();
                          const index =
                            activebutton < course.length - 1
                              ? activebutton + 1
                              : activebutton;
                          const activeQuestion = course[index];
                          setActiveQuestion(activeQuestion);
                          setActivebutton(
                            activebutton < course.length - 1
                              ? activebutton + 1
                              : activebutton
                          );
                        }}
                      >
                        Keyingi
                      </button>
                    )}
                  </div>
                }
                <h2 className="querstion">
                  <span className="index-question">{activebutton + 1}. </span>
                  <span
                    className="question"
                    style={{ fontFamily: "Gilroy", display: "inline" }}
                    dangerouslySetInnerHTML={{
                      __html: activeQuestion?.question,
                    }}
                  />
                </h2>
                <div className="">
                  <ul className="answer-ul">
                    {activeQuestion?.answers?.map((answer, id) => {
                      return (
                        <li
                          className="answer-li"
                          style={{ marginBottom: "24px" }}
                        >
                          <div className="form-check">
                            <label
                              htmlFor={"answer" + answer.id}
                              className="form-check-label"
                            >
                              <input
                                id={"answer" + answer.id}
                                type="radio"
                                name="flexRadioDefault"
                                onChange={() => {
                                  setAnswers({
                                    ...answers,
                                    [activeQuestion?.id]: answer?.id,
                                  });
                                 
                                }}
                                class="form-check-input "
                                checked={
                                 
                                  answers[activeQuestion?.id] === answer?.id
                                  
                                }
                              />
                              <span
                                className="answer"
                                dangerouslySetInnerHTML={{
                                  __html: answer?.answer,
                                }}
                              />
                            </label>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </main>
            <Footer />
           </div>:
          <div>
            <Navbar/>
            <div className="main container result-fan" style={{padding:"60px 0px 80px 0px"}}>
              <div className="left-result" >
                <h1>Test javoblari</h1>
                 <div className="tab-bar" style={{"cursor":"pointer" , "display":"flex"}}>
                  <div  className={ (resulttab ===true) &&  "clickbuttonresult" } onClick={HandletabFan}>Fanlar bo'yicha</div>
                  <div className={ (resulttab ===false) &&  "clickbuttonresult" } onClick={HandletabQobilyat}>Qobiliyatlar bo'yicha</div>
                 </div>
               { 
               resulttab ?
                 <ul style={{"margin":"16px 0px" , 'padding':'0px'}}>
                 {((Object.values(courseresults)).map(({name , avg })=>     
                   <div className="course-result__title">
                     <h4>
                      <span>{name}</span>
                      <span>Tog'ri javoblar: {avg}%</span>
                    </h4>
                    <p>
                      <hr />
                      <span style={{"fontSize":"16px" , "fontWeight":"500" , "color":"rgba(48, 48, 48, 0.3)"}}>Siz testni a’lo darajada topshirdingiz. Bilimlaringizni mustahkamlashdan to’xtamang.</span>
                    </p>
                   </div> 
            ))}
                 </ul>
                : 
                <ul style={{"margin":"16px 0px" , 'padding':'0px'}}>
                   {((Object.values(types)).map(({name , avg })=>   
                     <div className="course-result__title">
                     <h4>
                      <span>{name}</span>
                      <span>Tog'ri javoblar: {avg}%</span>
                    </h4>
                    <p style={{"fontSize":"16px" , "fontWeight":"500" , "color":"rgba(48, 48, 48, 0.3)"}}> 
                      <hr />
                      <span>Biz o’quvchilarga eslab qolishlarini 95% osonlashtirish uchun Leitner Box texnikasini o’rgatamiz. 
                      </span>
                    </p>
                   </div> 
                    ))} 
                </ul> 
                }
                 <Link to="/premium">
                  <button className="to-mento-premium">Mentoga qo'shilish</button>
                </Link>
              </div>
              <div className="right-result">
                <div className="info">
                  <img src={smile} alt="" />  
                  <p>“Jangda mag'lub bo'lish urushda mag'lub bo'lishdan farq qiladi, muvaffaqiyatga erishguningizcha ko'proq harakat qiling!”</p>
                </div>
                <div className="reyting">
                  <h4 style={{'marginBottom':"24px"}}>
                    <img src={mask} alt=""  style={{'marginRight':'12px' , }}/>
                    <span style={{'alignItems':'center'}}>Reyting</span>
                  </h4>
                  <div style={{"display":'flex' , "justifyContent":'space-between'}}>
                  <span style={{'fontSize':'18px',"fontWeight":"500",}}>O'zbekiston</span>
                  <span  style={{'fontSize':'18px',"fontWeight":"500",}}>{data?.position}</span>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        }
        </> 
      ) : authLevel === 1 ? (
        <>
          <div>
            <Navbar />
            {networkError && (
                      <h5 style={{ textAlign: "center", color: "red" }}>
                        internetingizni qayta tekshirib kuring{" "}
                      </h5>
                    )}
            <main className="main">
              <div className="container">
                <div className="Test-title">
                  <div className="belgilar-title">Savol belgilari</div>
                  <div className="all-buttons">
                    <div className="p">
                      <span className="icon-answred"></span>
                      <p>Javob berilgan</p>
                    </div>
                    <div className="p">
                      <span className="no-answred"></span>
                      <p>O’tkazib yuborilgan</p>
                    </div>
                    <div className="p">
                      <span className="active-icon"></span>
                      <p>Aktiv</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="">
                    {course.map((course, index) => {
                      const className =
                        activebutton === index
                          ? "active-button"
                          : answers[course?.id]
                          ? "answered-icons"
                          : activebutton > index
                          ? "no-answred-icons"
                          : "  ";
                      return (
                        <button
                          onClick={() => {
                            audio.loop = false;
                            audio.play();
                            setActivebutton(index);
                            setActiveQuestion(course);
                          }}
                          className={className + " another "}
                        >
                          {index + 1}
                        </button>
                      );
                    })}
                  </p>
                </div>
                {
                  <div className="testbuttons">
                    <button
                      onClick={() => {
                        audio.loop = false;
                        audio.play();
                        const index =
                          activebutton > 0 ? activebutton - 1 : activebutton;
                        const activeQuestion = course[index];
                        setActiveQuestion(activeQuestion);
                        setActivebutton(
                          activebutton > 0 ? activebutton - 1 : activebutton
                        );
                      }}
                    >
                      Oldingi
                    </button>
                    {activebutton === course.length - 1 ? (
                      <button
                      onClick={() => HandleYakunlash(id)}
                        className="yakunlash-button"
                      >
                        Yakunlash
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          audio.loop = false;
                          audio.play();
                          const index =
                            activebutton < course.length - 1
                              ? activebutton + 1
                              : activebutton;
                          const activeQuestion = course[index];
                          setActiveQuestion(activeQuestion);
                          setActivebutton(
                            activebutton < course.length - 1
                              ? activebutton + 1
                              : activebutton
                          );
                        }}
                      >
                        Keyingi
                      </button>
                    )}
                  </div>
                }
                <h2 className="querstion">
                  <span className="index-question">{activebutton + 1}. </span>
                  <span
                    className="question"
                    style={{ fontFamily: "Gilroy", display: "inline" }}
                    dangerouslySetInnerHTML={{
                      __html: activeQuestion?.question,
                    }}
                  />
                </h2>
                <div className="">
                  <ul className="answer-ul">
                    {activeQuestion?.answers?.map((answer, id) => {
                      return (
                        <li
                          className="answer-li"
                          style={{ marginBottom: "24px" }}
                        >
                          <div className="form-check">
                            <label
                              htmlFor={"answer" + answer.id}
                              className="form-check-label"
                            >
                              <input
                                id={"answer" + answer.id}
                                type="radio"
                                name="flexRadioDefault"
                                onChange={() => {
                                  setAnswers({
                                    ...answers,
                                    [activeQuestion?.id]: answer?.id,
                                  });
                                 
                                }}
                                class="form-check-input "
                                checked={
                                  answers[activeQuestion?.id] === answer?.id
                                }
                              />
                              <span
                                className="answer"
                                dangerouslySetInnerHTML={{
                                  __html: answer?.answer,
                                }}
                              />
                            </label>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </main>
           
            <Footer />
          </div>
        </>
      ) : (
        <>
          <Navbar/>
          <div className="main container section-resultat">
            <div className="">
              <h1 style={{marginTop:"20px"}} className="test-answers">Test javoblari</h1>
             <ul>    
              <span className="text-result">
            {((Object.values(types)).map(({name , avg , percentage})=>  
              <div style={{"alignItems":"center"}}>
                 { 
                 (avg > percentage)? 
                 <span >
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="12" fill="#5762F7"></circle><g clip-path="url(#clip0_289_1986)"><path d="M6.75 12L10.5 15.75L18 8.25" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g><defs><clipPath id="clip0_289_1986"><rect fill="white" height="18" transform="translate(3 3)" width="18"></rect></clipPath></defs></svg>
                  </span> : <><img src={undov} alt="" /></> }
                  <span style={{
                    'marginLeft':'12px' ,
                    "fontSize":"24px" ,
                    "fontWeight":"500",
                    "marginTop":"-2px", 
                    }}>{name} - {(avg > percentage) ? "Natijangiz a'lo" : "natijangiz a’lo emas. Qo’shimcha topshiriqdan o’tishingizni tavsiya etamiz."} </span>
              </div>
            ))}
              </span>
             </ul>
              <div>
                <Link to="/premium">
                  <button className="to-mento">Mentoga qo'shilish</button>
                </Link>
              </div>
            </div>
            <div style={{marginTop:"20px"}}   className="right-result">
              <div className="score">
                 <h5>Kognitiv test</h5> 
                <h3>
                  <span>
                    {data?.result}
                  </span>
                  <span>ball</span>
                </h3>
              </div>
              <div className="score-chart">
                <div className="item-result">
                  <div className="title">
                    <ul>    
              <span className="text-result" >
                {((Object.values(types)).map(({avg , name , percentage})=>  
               <div style={{
                "display":"flex" ,
                "margin":"20px 0px",
                "justifyContent":"space-between ",
                }}>
                <div 
                style={{
                  'width':"100px",
                  "lineHeight":"150%",
                  "fontWeight":"500",
                  "fontSize":"14px",
                  }}>{name}</div>
            <div className="progress-result">
                <div className="value-result" style={{"display":"flex"}}> 
                  <div className="toolpit" style={{
                    "width":`${percentage}%` , 
                    'backgroundColor':"rgb(87, 98, 247)"
                    }}>
                 </div>
                  <div style={{
                    "alignItems":"center",
                    "marginLeft":"8px"
                    }}>{avg}</div>
                </div>
             </div>
            </div>
                ))}
              </span>
             </ul>
             </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
