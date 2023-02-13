import React, { useState } from "react";
import { Link } from "react-router-dom";
import Vector from "../assets/Vector.png";
import Line from "../assets/Line.png";
import Tick from "../assets/Tick.png";
import Warn from "../assets/Warn.png";

const Experience = ({
  experienceData,
  setExperienceData,
  page,
  setPage,
  addingExp,
  setAddingExp,
}) => {
  // console.log(experienceData);
  // const { position, employer, startDate, endDate, description } =
  //   experienceData;

  const [experienceForms, setExperienceForms] = useState([
    {
      position: "",
      employer: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  console.log(experienceForms);

  const addExperienceForm = () => {
    setExperienceForms([
      ...experienceForms,
      {
        position: "",
        employer: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };
  const [error, setError] = useState({
    errPosition: true,
    errEmployer: true,
    errStartDate: true,
    errEndDate: true,
    errDescription: true,
  });

  const isFormValid = Object.values(error).every((prev) => !prev);

  // console.log(error)

  const [borderColorPosition, setBorderColorPosition] = useState("");
  const [borderColorEmployer, setBorderColorEmployer] = useState("");
  const [borderColorStartDate, setBorderColorStartDate] = useState("");
  const [borderColorEndDate, setBorderColorEndDate] = useState("");
  const [borderColorDescription, setBorderColorDescription] = useState("");

  const [warnOrTickPosition, setWarnOrTickPosition] = useState("");
  const [warnOrTickEmployer, setWarnOrTickEmployer] = useState("");
  const [warnOrTickStartDate, setWarnOrTickStartDate] = useState("");
  const [warnOrTickEndDate, setWarnOrTickEndDate] = useState("");
  const [warnOrTickDescription, setWarnOrTickDescription] = useState("");

  // const handleFormChange = (e) => {
  //   setExperienceData((prev) => ({
  //     ...prev,
  //     [e.target.id]: e.target.value,
  //   }));
  //   validateInput(e);
  // };
  // const handleFormChange = (e, index) => {
  //   const newExperienceForms = [...experienceForms];
  //   newExperienceForms[index] = {
  //     ...newExperienceForms[index],
  //     [e.target.name]: e.target.value,
  //   };
  //   setExperienceForms(newExperienceForms);
  // };

  // ALMOST CORRECT  ALMOST CORRECT  ALMOST CORRECT  ALMOST CORRECT  ALMOST CORRECT  ALMOST CORRECT  ALMOST CORRECT  ALMOST CORRECT  ALMOST CORRECT

  const handleFormChange = (e, formIndex) => {
    const newExperienceForms = [...experienceForms];
    newExperienceForms[formIndex][e.target.name.slice(0, -1)] = e.target.value;
    setExperienceForms(newExperienceForms);

    const id = e.target.id;
    const value = e.target.value;

    setExperienceForms((prevState) => {
      prevState.forEach((stateObj, index) => {
        if (index !== formIndex) return;

        switch (id) {
          case `position${index}`:
            if (!value || value.length < 2) {
              setBorderColorPosition("#EF5050"); //red
              setWarnOrTickPosition(Warn);
              setError((prevErr) => ({
                ...prevErr,
                errPosition: true,
              }));
            } else {
              setBorderColorPosition("#98E37E"); //green
              setWarnOrTickPosition(Tick);
              setError((prevErr) => ({
                ...prevErr,
                errPosition: false,
              }));
            }
            break;

          case `employer${index}`:
            if (!value || value.length < 2) {
              setBorderColorEmployer("#EF5050"); //red
              setWarnOrTickEmployer(Warn);
              setError((prevErr) => ({
                ...prevErr,
                errEmployer: true,
              }));
            } else {
              setBorderColorEmployer("#98E37E"); //green
              setWarnOrTickEmployer(Tick);
              setError((prevErr) => ({
                ...prevErr,
                errEmployer: false,
              }));
            }
            break;

          case `startDate${index}`:
            if (!value) {
              setBorderColorStartDate("#EF5050"); //red
              setWarnOrTickStartDate(Warn);
              setError((prevErr) => ({
                ...prevErr,
                errStartDate: true,
              }));
            } else {
              setBorderColorStartDate("#98E37E"); //green
              setWarnOrTickStartDate(Tick);
              setError((prevErr) => ({
                ...prevErr,
                errStartDate: false,
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
            if (!value) {
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
    console.log("hah");
  };

  setAddingExp(experienceForms);
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
                    გამოცდილება
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
              {experienceForms.map((experienceForm, index) => (
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
                        style={{ color: borderColorPosition }}
                      >
                        თანამდებობა
                      </label>
                      <input
                        style={{
                          borderColor: borderColorPosition,
                          backgroundImage: `url(${warnOrTickPosition})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right",
                          width: "100%",
                        }}
                        type="text"
                        placeholder="თანამდებობა"
                        name={`position${index}`}
                        id={`position${index}`}
                        value={experienceForm.position}
                        onChange={(e) => handleFormChange(e, index)}
                        // onBlur={validateInput}
                        required
                      />
                      <h6>მინიმუმ 2 სიმბოლო</h6>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <label
                        for={`employer${index}`}
                        style={{ color: borderColorEmployer }}
                      >
                        დამსაქმებელი
                      </label>
                      <input
                        style={{
                          borderColor: borderColorEmployer,
                          backgroundImage: `url(${warnOrTickEmployer})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right",
                          width: "100%",
                        }}
                        type="text"
                        placeholder="დამსაქმებელი"
                        name={`employer${index}`}
                        id={`employer${index}`}
                        value={experienceForm.employer}
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
                        style={{ color: borderColorStartDate }}
                      >
                        დაწყების რიცხვი
                      </label>
                      <input
                        style={{
                          borderColor: borderColorStartDate,
                        }}
                        type="date"
                        name={`startDate${index}`}
                        id={`startDate${index}`}
                        value={experienceForm.startDate}
                        onChange={(e) => handleFormChange(e, index)}
                        // onBlur={validateInput}
                        required
                      />
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
                        value={experienceForm.endDate}
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
                      placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                      name={`description${index}`}
                      id={`description${index}`}
                      value={experienceForm.description}
                      onChange={(e) => handleFormChange(e, index)}
                      // onBlur={validateInput}
                      style={{
                        resize: "none",
                        width: "798px",
                        height: "123px",
                        padding: "13px 16px",
                        borderColor: borderColorDescription,
                        borderRadius: "4px",
                        backgroundImage: `url(${warnOrTickDescription})`,
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
                მეტი გამოცდილების დამატება
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
                onClick={() => {
                  setPage((p) => p + 1);
                }}
              >
                შემდეგი
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
