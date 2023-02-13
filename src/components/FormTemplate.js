import React from "react";
import mailSign from "../assets/mail-sign.png";
import phoneSign from "../assets/phone-sign.png";
import bottomLogo from "../assets/bottom-logo.png";
import Popup from "./Popup";
import { Link } from "react-router-dom";
import Vector from "../assets/Vector.png";

const FormTemplate = (props) => {
  const {
    formData,
    experienceData,
    page,
    addingExp,
    addingSchool,
    showPopup,
    setShowPopup,
  } = props;
  console.log(addingSchool);

  return (
    <>
      <div
        className="top-left-corner"
        style={{ display: page < 4 ? "none" : "block" }}
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
          <a
            href={`/`}
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
          </a>
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: page < 4 ? "100vh" : "auto",
          marginTop: page < 4 ? "0px" : "50px",
          marginBottom: page < 4 ? "0px" : "50px",
          width: "50vw",
          border: page < 4 ? "none" : "1px solid black",
        }}
      >
        <div className="form-template">
          <div className="profile">
            <div className="profile-info">
              <div className="name-contacts-div">
                <h1 className="name">
                  {formData.firstName} {formData.lastName}
                </h1>

                <div className="contacts-div">
                  {formData.email != "" && (
                    <div className="email-div">
                      <img src={mailSign} alt="mail-sign" />
                      <p className="email dyn-info">{formData.email}</p>
                    </div>
                  )}
                  {formData.phone != "" && (
                    <div className="phone-div">
                      <img src={phoneSign} alt="phone-sign" />
                      <p className="phone dyn-info">{formData.phone}</p>
                    </div>
                  )}
                </div>
              </div>
              {formData.aboutMe != "" && (
                <div className="aboutMe">
                  <h1>ჩემს შესახებ</h1>
                  <p>{formData.aboutMe}</p>
                </div>
              )}
            </div>

            {formData.imageFile != "" && (
              <div className="image">
                <img
                  className="profile-pic"
                  alt="profile-pic"
                  src={URL.createObjectURL(new Blob([formData.imageFile]))}
                />
              </div>
            )}
          </div>

          {Object.values(addingExp).some((value) => value !== "") && (
            <div className="experience">
              <hr />
              <div className="experience-heading-div">
                <h1>გამოცდილება</h1>
              </div>
              {addingExp.map((experience, index) => (
                <>
                  <div key={index} className="p-div">
                    {(experience.position || experience.employer) && (
                      <p className="position-employer">
                        {experience.position}, {experience.employer}
                      </p>
                    )}
                    {(experience.startDate || experience.endDate) && (
                      <p className="start-end-date">
                        {experience.startDate} - {experience.endDate}
                      </p>
                    )}
                  </div>
                  {experience.description && (
                    <div className="description-div">
                      <p>{experience.description}</p>
                    </div>
                  )}
                </>
              ))}
            </div>
          )}

          {Object.values(addingSchool).some((value) => value !== "") && (
            <div className="experience">
              <hr />
              <div className="experience-heading-div">
                <h1>განათლება</h1>
              </div>
              {addingSchool.map((education, index) => (
                <>
                  <div key={index} className="p-div">
                    {(education.school || education.degree) && (
                      <p className="position-employer">
                        {education.school}, {education.degree}
                      </p>
                    )}
                    {education.endDate && (
                      <p className="start-end-date">{education.endDate}</p>
                    )}
                  </div>
                  {education.description && (
                    <div className="description-div">
                      <p>{education.description}</p>
                    </div>
                  )}
                </>
              ))}
            </div>
          )}
        </div>
        <img src={bottomLogo} alt="bottom-logo" className="bottom-logo" />
      </div>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </>
  );
};

export default FormTemplate;
