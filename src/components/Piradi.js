import React, { useState } from "react";
import { Link } from "react-router-dom";
import Vector from "../assets/Vector.png";
import Line from "../assets/Line.png";
import Tick from "../assets/Tick.png";
import Warn from "../assets/Warn.png";

const Piradi = ({ formData, setFormData, page, setPage }) => {
  const { firstName, lastName, aboutMe, email, phone, imageFile } = formData;

  const [error, setError] = useState({
    errFirstName: true,
    errLastName: true,
    errImageFile: true,
    errEmail: true,
    errPhone: true,
  });
  const { errFirstName, errLastName, errEmail, errPhone, errImageFile } = error;

  const [borderColorFirst, setBorderColorFirst] = useState("");
  const [borderColorLast, setBorderColorLast] = useState("");
  const [borderColorAboutMe, setBorderColorAboutMe] = useState("");
  const [borderColorEmail, setBorderColorEmail] = useState("");
  const [borderColorPhone, setBorderColorPhone] = useState("");
  const [borderColorImage, setBorderColorImage] = useState("");
  const [warnOrTickFirst, setWarnOrTickFirst] = useState("");
  const [warnOrTickLast, setWarnOrTickLast] = useState("");
  const [warnOrTickEmail, setWarnOrTickEmail] = useState("");
  const [warnOrTickPhone, setWarnOrTickPhone] = useState("");
  const [warnOrTickImage, setWarnOrTickImage] = useState("");

  const [file, setFile] = useState(null);

  // const handleFileInputChange = (e) => {
  //   const file = e.target.files[0];

  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     const base64 = reader.result;

  //     setFormData((prev) => ({
  //       ...prev,
  //       imageFile: [base64],
  //     }));
  //   };

  //   setFile(file);
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     imageFile: file,
  //   }));

  //   if (file) {
  //     // Check if the file is a valid image file
  //     if (file.type.startsWith("image")) {
  //       // Set the error object to indicate that a valid image file has been uploaded
  //       setError((prev) => ({
  //         ...prev,
  //         errImageFile: false,
  //       }));
  //     } else {
  //       // Set the error object to indicate that an invalid file has been uploaded
  //       setError((prev) => ({
  //         ...prev,
  //         errImageFile: true,
  //       }));
  //     }
  //   }
  // };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      const binaryData = new Uint8Array(reader.result);

      setFormData((prev) => ({
        ...prev,
        imageFile: binaryData,
      }));
    };

    setFile(file);

    if (file) {
      // Check if the file is a valid image file
      if (file.type.startsWith("image")) {
        // Set the error object to indicate that a valid image file has been uploaded
        setError((prev) => ({
          ...prev,
          errImageFile: false,
        }));
      } else {
        // Set the error object to indicate that an invalid file has been uploaded
        setError((prev) => ({
          ...prev,
          errImageFile: true,
        }));
      }
    }
  };

  const isGeorgian = /^[\u10A0-\u10FF]+$/;
  const isGeorgianPhone = /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
  const isRedberryEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$@|redberry\.ge$/;

  const handleFormChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { id, value } = e.target;

    if (id === "phone") {
      value = value.replace(
        /(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})/,
        "$1 $2 $3 $4 $5"
      );
    }
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    setError((prev) => {
      const stateObj = { ...prev, [id]: "" };

      switch (id) {
        case "firstName":
          if (!value || value.length < 2 || !isGeorgian.test(value)) {
            setBorderColorFirst("#EF5050"); //red
            setWarnOrTickFirst(Warn);
            setError((prerr) => ({
              ...prerr,
              errFirstName: true,
            }));
          } else {
            setBorderColorFirst("#98E37E"); //green
            setWarnOrTickFirst(Tick);
            setError((prerr) => ({
              ...prerr,
              errFirstName: false,
            }));
          }
          break;

        case "lastName":
          if (!value || value.length < 2 || !isGeorgian.test(value)) {
            setBorderColorLast("#EF5050"); //red
            setWarnOrTickLast(Warn);
            setError((prerr) => ({
              ...prerr,
              errLastName: true,
            }));
          } else {
            setBorderColorLast("#98E37E"); //green
            setWarnOrTickLast(Tick);
            setError((prerr) => ({
              ...prerr,
              errLastName: false,
            }));
          }

          break;

        case "aboutMe":
          if (value) {
            setBorderColorAboutMe("#98E37E"); //green
          }

          break;

        case "email":
          if (!value || !isRedberryEmail.test(value)) {
            setBorderColorEmail("#EF5050"); //red
            setWarnOrTickEmail(Warn);
            setError((prerr) => ({
              ...prerr,
              errEmail: true,
            }));
          } else {
            setBorderColorEmail("#98E37E"); //green
            setWarnOrTickEmail(Tick);
            setError((prerr) => ({
              ...prerr,
              errEmail: false,
            }));
          }
          break;
        case "phone":
          if (!value || !isGeorgianPhone.test(value)) {
            setBorderColorPhone("#EF5050"); //red
            setWarnOrTickPhone(Warn);
            setError((prerr) => ({
              ...prerr,
              errPhone: true,
            }));
          } else {
            setBorderColorPhone("#98E37E"); //green
            setWarnOrTickPhone(Tick);
            setError((prerr) => ({
              ...prerr,
              errPhone: false,
            }));
          }
          break;
        default:
          break;
      }

      return stateObj;
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hah");
  };

  console.log(formData);

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
                    პირადი ინფო
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
            <form className="sign-up-box" onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
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
                  <label for="firstName" style={{ color: borderColorFirst }}>
                    სახელი
                  </label>
                  <input
                    style={{
                      borderColor: borderColorFirst,
                      backgroundImage: `url(${warnOrTickFirst})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right",
                    }}
                    type="text"
                    placeholder="ანზორ"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={handleFormChange}
                    onBlur={validateInput}
                    required
                  />
                  <h6>მინიმუმ 2 ასო, ქართული ასოები</h6>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <label for="lastName" style={{ color: borderColorLast }}>
                    გვარი
                  </label>
                  <input
                    style={{
                      borderColor: borderColorLast,
                      backgroundImage: `url(${warnOrTickLast})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right",
                    }}
                    type="text"
                    placeholder="მუმლაძე"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={handleFormChange}
                    onBlur={validateInput}
                    required
                  />
                  <h6>მინიმუმ 2 ასო, ქართული ასოები</h6>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "19px",
                  width: "100%",
                  height: "27px",
                }}
                className="private-photo"
              >
                <h1 className="add-photo">პირადი ფოტოს ატვირთვა</h1>

                <input
                  accept="image/*"
                  id="image"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileInputChange}
                />
                <label htmlFor="image" className="upload-btn">
                  ატვირთვა
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <label for="aboutMe">ჩემ შესახებ (არასავალდებულო)</label>

                <textarea
                  type="text"
                  placeholder="ზოგადი ინფო შენ შესახებ"
                  name="aboutMe"
                  id="aboutMe"
                  value={aboutMe}
                  onChange={handleFormChange}
                  onBlur={validateInput}
                  style={{
                    resize: "none",
                    // width: "798px",
                    height: "103px",
                    padding: "13px 16px",
                    borderColor: borderColorAboutMe,
                    borderRadius: "4px",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <label for="email" style={{ color: borderColorEmail }}>
                  ელ.ფოსტა
                </label>
                <input
                  style={{
                    borderColor: borderColorEmail,
                    backgroundImage: `url(${warnOrTickEmail})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                    width: "100%",
                  }}
                  type="email"
                  placeholder="anzorr666@redberry.ge"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleFormChange}
                  onBlur={validateInput}
                  required
                />
                <h6>უნდა მთავრდებოდეს @redberry.ge-ით</h6>
                {/* {error.lastName && (
                        <h6 className="err">{error.lastName}</h6>
                      )} */}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <label for="phone" style={{ color: borderColorPhone }}>
                  მობილურის ნომერი
                </label>
                <input
                  style={{
                    borderColor: borderColorPhone,
                    backgroundImage: `url(${warnOrTickPhone})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                    width: "100%",
                  }}
                  type="tel"
                  placeholder="+995 551 12 34 56"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={handleFormChange}
                  onBlur={validateInput}
                  required
                />
                <h6>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</h6>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-end",
                  marginTop: "150px",
                }}
              >
                <button
                  className="next-btn"
                  type="submit"
                  style={{
                    cursor:
                      !firstName ||
                      !lastName ||
                      !email ||
                      !phone ||
                      !imageFile ||
                      errFirstName ||
                      errLastName ||
                      errEmail ||
                      errPhone ||
                      errImageFile
                        ? "not-allowed"
                        : "pointer",
                  }}
                  disabled={
                    !firstName ||
                    !lastName ||
                    !email ||
                    !phone ||
                    !imageFile ||
                    errFirstName ||
                    errLastName ||
                    errEmail ||
                    errPhone ||
                    errImageFile
                      ? true
                      : false
                  }
                  onClick={() => {
                    setPage((p) => p + 1);
                    handleSubmit();
                  }}
                >
                  შემდეგი
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Piradi;
