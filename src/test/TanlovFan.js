import { useState, useEffect } from "react";
import selectionone from "../img/icon-selection-2.svg";
import TestUz from "./TestUz";
import axios from "../Api/axios";
export default function TanlovFan() {
  const [testuz, setTestUz] = useState(false);
  const [step, setStep] = useState(0);
  const [courses, setCourses] = useState([]);
  const [id , setId] = useState('')
  const HandleTestUz = () => {
    setTestUz(!testuz);
    setStep(1);
    const data = new FormData();
    data.append("id", 12);
    axios()
    .get(`/questions/?courses=${id}`)
    .then((response) => {
      const data = response?.data?.courses ;
        const courses = Array.isArray(data) ? data : [];
        setCourses(courses);
      })
      .catch(() => console.log("err"));
  };
  
  return (
    <div>
      {step === 0 ? (
        <div className="video">
          <div className="selection-list">
            <img className="selectionone" src={selectionone} alt="" />
            <h2 className="exports">Test tilini tanlang</h2>
            <p>Psixologik test topshiriladigan tilni tanlang</p>
            <div className="selection-test content-selection">
              <div className="test-one test" onClick={HandleTestUz}>
                <div className="test-one__img"></div>
                <span>O'zbek tili</span>
              </div>
              <div className="test-two test" onClick="">
                <div className="test-two__img"></div>
                <span>Rus tili</span>
              </div>
              {testuz && <TestUz courses={courses} setCourses={setCourses} />}
            </div>
          </div>
        </div>
      ) : (
        <TestUz />
      )}
    </div>
  );
}
