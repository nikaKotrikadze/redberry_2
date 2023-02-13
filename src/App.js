import "./index.css";
import HomePage from "./components/HomePage";
import Piradi from "./components/Piradi";
import Experience from "./components/Experience";
import { BrowserRouter as Router, Form, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import FormTemplate from "./components/FormTemplate";
import Education from "./components/Education";

function App() {
  const [page, setPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const initialState = {
    profile: {
      firstName: "",
      lastName: "",
      imageFile: "",
      aboutMe: "",
      email: "",
      phone: "",
    },
    experience: {
      position: "",
      employer: "",
      startDate: "",
      endDate: "",
      description: "",
      addExperience: [],
    },
    education: {
      school: "",
      degree: "",
      endDate: "",
      description: "",
      addSchool: [],
    },
  };

  const [initialFormState, setInitialFormState] = useState(initialState);
  const [formData, setFormData] = useState(initialState.profile);
  const [experienceData, setExperienceData] = useState(initialState.experience);
  const [addingExp, setAddingExp] = useState(
    initialState.experience.addExperience
  );
  const [addingSchool, setAddingSchool] = useState(
    initialState.education.addSchool
  );
  const [educationData, setEducationData] = useState(initialState.education);

  const renderForm = () => {
    switch (page) {
      case 1:
        return (
          <Piradi
            formData={formData}
            setFormData={setFormData}
            setPage={setPage}
            page={page}
          />
        );
      case 2:
        return (
          <Experience
            experienceData={experienceData}
            setExperienceData={setExperienceData}
            setPage={setPage}
            page={page}
            addingExp={addingExp}
            setAddingExp={setAddingExp}
          />
        );
      case 3:
        return (
          <Education
            educationData={educationData}
            setEducationData={setEducationData}
            setPage={setPage}
            page={page}
            addingSchool={addingSchool}
            setAddingSchool={setAddingSchool}
            setShowPopup={setShowPopup}
            initialFormState={initialFormState}
          />
        );
      default:
        return;
    }
  };

  console.log(formData);
  console.log(experienceData);
  return (
    <div style={{ display: "flex" }}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/form" element={renderForm()}></Route>
          </Routes>
        </div>
      </Router>
      {window.location.pathname === "/form" && (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            // backgroundColor: "#0e80bf",
            display: "flex",
            justifyContent: page < 4 ? "" : "center",
            alignItems: "",
            height: "auto",
            flex: 1,
          }}
        >
          {Object.values(initialState).some((value) => value !== "") && (
            <FormTemplate
              formData={formData}
              page={page}
              addingExp={addingExp}
              addingSchool={addingSchool}
              showPopup={showPopup}
              setShowPopup={setShowPopup}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
