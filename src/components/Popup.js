import React from "react";
import X from "../assets/X.png";

const popupStyles = {
  position: "fixed",
  top: "53px",
  right: "70px",
  zIndex: "99",
};

const Popup = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {showPopup && (
        <div className="popup" style={popupStyles}>
          <div className="popup-content">
            <h1>რეზიუმე წარმატებით გაიგზავნა 🎉</h1>
            <div
              style={{
                display: "flex",
                height: "100%",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <button
                className="close-button"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
                onClick={() => setShowPopup(false)}
              >
                <img src={X} alt="X" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
