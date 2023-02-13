import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Vector from "../assets/Vector.png";
import Line from "../assets/Line.png";
import Tick from "../assets/Tick.png";
import Warn from "../assets/Warn.png";

const Experience = ({
  educationData,
  setEducationData,
  addingSchool,
  setAddingSchool,
  setPage,
  page,
  setShowPopup,
  initialFormState,
}) => {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    fetch("https://resume.redberryinternship.ge/api/degrees", {
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setDegrees(data));
  }, []);

  const [SchoolForms, setSchoolForms] = useState([
    {
      school: "",
      degree: "",
      endDate: "",
      description: "",
    },
  ]);
  console.log(SchoolForms);

  const addExperienceForm = () => {
    setSchoolForms([
      ...SchoolForms,
      {
        school: "",
        degree: "",
        endDate: "",
        description: "",
      },
    ]);
  };
  const [error, setError] = useState({
    errSchool: true,
    errDegree: true,
    errEndDate: true,
    errDescription: true,
  });

  const isFormValid = Object.values(error).every((prev) => !prev);

  // console.log(error)

  const [borderColorSchool, setBorderColorSchool] = useState("");
  const [borderColorDegree, setBorderColorDegree] = useState("");
  const [borderColorEndDate, setBorderColorEndDate] = useState("");
  const [borderColorDescription, setBorderColorDescription] = useState("");

  const [warnOrTickSchool, setWarnOrTickSchool] = useState("");
  const [warnOrTickDegree, setWarnOrTickDegree] = useState("");
  const [warnOrTickEndDate, setWarnOrTickEndDate] = useState("");
  const [warnOrTickDescription, setWarnOrTickDescription] = useState("");

  const handleFormChange = (e, formIndex) => {
    const newSchoolForms = [...SchoolForms];
    newSchoolForms[formIndex][e.target.name.slice(0, -1)] = e.target.value;
    setSchoolForms(newSchoolForms);

    const id = e.target.id;
    const value = e.target.value;

    setSchoolForms((prevState) => {
      prevState.forEach((stateObj, index) => {
        if (index !== formIndex) return;

        switch (id) {
          case `school${index}`:
            if (!value || value.length < 2) {
              setBorderColorSchool("#EF5050"); //red
              setWarnOrTickSchool(Warn);
              setError((prevErr) => ({
                ...prevErr,
                errSchool: true,
              }));
            } else {
              setBorderColorSchool("#98E37E"); //green
              setWarnOrTickSchool(Tick);
              setError((prevErr) => ({
                ...prevErr,
                errSchool: false,
              }));
            }
            break;

          case `degree${index}`:
            if (!value || value.length < 2) {
              setBorderColorDegree("#EF5050"); //red
              setWarnOrTickDegree(Warn);
              setError((prevErr) => ({
                ...prevErr,
                errDegree: true,
              }));
            } else {
              setBorderColorDegree("#98E37E"); //green
              setWarnOrTickDegree(Tick);
              setError((prevErr) => ({
                ...prevErr,
                errDegree: false,
              }));
            }
            break;

          case `endDate${index}`:
            if (!value) {
              setBorderColorEndDate("#EF5050"); //red
              setWarnOrTickEndDate(Warn);
              setError((prevErr) => ({
                ...prevErr,
                errEndDate: true,
              }));
            } else {
              setBorderColorEndDate("#98E37E"); //green
              setWarnOrTickEndDate(Tick);
              setError((prevErr) => ({
                ...prevErr,
                errEndDate: false,
              }));
            }

            break;

          case `description${index}`:
            if (!value || value.length < 2) {
              setBorderColorDescription("#EF5050"); //red
              setWarnOrTickDescription(Warn);
              setError((prevErr) => ({
                ...prevErr,
                errDescription: true,
              }));
            } else {
              setBorderColorDescription("#98E37E"); //green
              setWarnOrTickDescription(Tick);
              setError((prevErr) => ({
                ...prevErr,
                errDescription: false,
              }));
            }

            break;
        }
      });
      return prevState;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowPopup(true);

    const response = await fetch(
      "https://resume.redberryinternship.ge/api/cvs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(initialFormState),
      }
    );

    const data = await response.json();

    if (data.success) {
      setPage((p) => p + 1);
    } else {
      // handle error
    }
  };

  setAddingSchool(SchoolForms);
  //   console.log(addingSchool);
  return (
    <>
      <div
        style={{
          backgroundColor: "#F9F9F9",
          height: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "60px",
            width: "100%",
          }}
        >
          <button
            onClick={() => {
              window.location.reload();
            }}
            style={{
              border: "none",
              background: "initial",
              padding: "initial",
              margin: "initial",
              width: "40px",
              height: "40px",
            }}
          >
            <Link
              to={`/`}
              style={{
                textDecoration: "none",
                padding: 0,
                margin: 0,
                width: "40px",
                height: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              >
                <img src={Vector} />
              </div>
            </Link>
          </button>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <h1
                    style={{
                      fontFamily: "Helvetica Neue",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "29px",
                      color: "#1A1A1A",
                    }}
                  >
                    განათლება
                  </h1>

                  <p
                    style={{
                      fontFamily: "Helvetica Neue",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "24px",
                      textAlign: "right",
                      color: "#1A1A1A",
                    }}
                  >
                    {page}/3
                  </p>
                </div>
                <img src={Line} alt="line" />
              </div>
            </div>

            {/* <hr /> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "45px",
              }}
            >
              {/* <button
                    className="add-experience-btn"
                    onClick={addExperienceForm}
                  >
                    მეტი გამოცდილების დამატება
                  </button> */}
              {SchoolForms.map((degreeForm, index) => (
                <form
                  className="sign-up-box"
                  onSubmit={handleSubmit}
                  key={index}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "40px",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <label
                        for={`position${index}`}
                        style={{ color: borderColorSchool }}
                      >
                        სასწავლებელი
                      </label>
                      <input
                        style={{
                          borderColor: borderColorSchool,
                          backgroundImage: `url(${warnOrTickSchool})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right",
                          width: "100%",
                        }}
                        type="text"
                        placeholder="სასწავლებელი"
                        name={`school${index}`}
                        id={`school${index}`}
                        value={degreeForm.school}
                        onChange={(e) => handleFormChange(e, index)}
                        // onBlur={validateInput}
                        required
                      />
                      <h6>მინიმუმ 2 სიმბოლო</h6>
                    </div>
                  </div>

                  {/* start date and end date HEEEEEREEEEEE */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <label
                        for={`startDate${index}`}
                        style={{ color: borderColorDegree }}
                      >
                        ხარისხი
                      </label>

                      <select
                        style={{
                          borderColor: borderColorDegree,
                        }}
                        className="select"
                        name={`degree${index}`}
                        id={`degree${index}`}
                        value={degreeForm.degree}
                        onChange={(e) => handleFormChange(e, index)}
                        // onBlur={validateInput}
                        required
                      >
                        <option value="">აირჩიეთ ხარისხი</option>
                        {degrees.map((degree) => (
                          <option key={degree.id} value={degree.title}>
                            {degree.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <label
                        for={`endDate${index}`}
                        style={{ color: borderColorEndDate }}
                      >
                        დამთავრების რიცხვი
                      </label>
                      <input
                        style={{
                          borderColor: borderColorEndDate,
                        }}
                        type="date"
                        name={`endDate${index}`}
                        id={`endDate${index}`}
                        value={degreeForm.endDate}
                        onChange={(e) => handleFormChange(e, index)}
                        // onBlur={validateInput}
                        required
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      width: "100%",
                    }}
                  >
                    <label
                      for={`description${index}`}
                      style={{ color: borderColorDescription }}
                    >
                      აღწერა
                    </label>

                    <textarea
                      type="text"
                      placeholder="განათლების აღწერა"
                      name={`description${index}`}
                      id={`description${index}`}
                      value={degreeForm.description}
                      onChange={(e) => handleFormChange(e, index)}
                      // onBlur={validateInput}
                      style={{
                        resize: "none",
                        width: "798px",
                        height: "123px",
                        padding: "13px 16px",
                        borderColor: borderColorDescription,
                        borderRadius: "4px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right",
                      }}
                      required
                    />
                  </div>
                  <hr />
                </form>
              ))}

              <button
                className="add-experience-btn"
                onClick={addExperienceForm}
              >
                მეტი სასწავლებლის დამატება
              </button>
            </div>

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                marginTop: "150px",
              }}
            >
              <button
                className="next-btn"
                onClick={() => {
                  setPage((p) => p - 1);
                }}
              >
                უკან
              </button>
              <button
                className="next-btn"
                style={{
                  cursor: !isFormValid ? "not-allowed" : "pointer",
                }}
                disabled={!isFormValid ? true : false}
                onClick={(e) => {
                  setPage((p) => p + 1);
                  // setShowPopup(true);
                  // //SUBMIT THE FORM
                  handleSubmit(e);
                }}
              >
                დასრულება
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
