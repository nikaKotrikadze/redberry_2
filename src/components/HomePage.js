import bgImg from "../assets/bgImg.png";
import redLogo from "../assets/redLogo.png";
import middleLogo from "../assets/middleLogo.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100vw",
              padding: "30px",
              gap: "30px",
            }}
          >
            <img
              src={redLogo}
              alt="redberry_logo"
              style={{
                height: "38px",
                width: "236px",
                backgroundRepeat: "no-repeat",
              }}
            />
            <hr />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "70%",
            marginTop: "10%",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={middleLogo}
            alt="middle_logo"
            style={{
              height: "299px",
              width: "299px",
            }}
          />
        </div>
        <Link
          to={`/form`}
          style={{
            textDecoration: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "blue",

              left: "50%",
              top: "50%",
            }}
          >
            <button
              className="add-resume-btn"
              style={{
                position: "absolute",
                backgroundColor: "#1A1A1A",
                fontFamily: "Helvetica Neue",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "24px",
                color: "#FFFFFF",
                height: "60px",
                width: "464px",
                border: "none",
                borderRadius: "8px",
                padding: "18px 60px 18px 60px",
                justify: "space-between",
                cursor: "pointer",
              }}
            >
              {" "}
              რეზიუმეს დამატება{" "}
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
