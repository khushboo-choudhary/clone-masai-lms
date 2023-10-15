import React from "react";
import Navbar from "./Header/Navbar";
import "./styles/LectureDetails.css";
import "./styles/Lecture.css";

const formatDate = (date) => {
  const formattedDate = new Date(date).toISOString().split("T")[0];
  return formattedDate;
};

const LectureDetails = () => {
  const data = JSON.parse(localStorage.getItem("lectureData"));
  console.log("data:", data);

  return (
    <>
      <Navbar />
      <div className="navBox">
        <div className="content">
          <p className="topic" style={{ color: "#5046e5", fontSize: "18px" }}>
            {data.instructors}{" "}
            <button
              style={{
                backgroundColor: "#fef9c3",
                color: "#724c3c",
                border: "none",
                padding: "5px",
                borderRadius: "5px",
                fontSize: "12px",
              }}
            >
              {data.category}
            </button>{" "}
            <button
              style={{
                backgroundColor: "#e0e7ff",
                color: "#864e0e",
                border: "none",
                padding: "5px",
                borderRadius: "5px",
                fontSize: "12px",
              }}
            >
              Live
            </button>
          </p>
          <p className="desc" style={{ fontSize: "14px" }}>
            {data.instructors}({formatDate(data.scheduled)}, - {data.time})
          </p>
        </div>
      </div>
      <div className="mainDetails">
        <p className="classLink">{data.title}</p>
        <br />
        <button style={{ backgroundColor: "#fef9c3", border: "none" }}>
          <a
            className="classLink2"
            href={data.link}
            target="_blank"
            rel="noreferrer"
          >
            Click to Open Link
          </a>
        </button>
      </div>
    </>
  );
};

export default LectureDetails;
