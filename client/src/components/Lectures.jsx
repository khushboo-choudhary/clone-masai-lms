import React, { useEffect, useState } from "react";
import Navbar from "./Header/Navbar";
import { useNavigate } from "react-router";
import "./styles/Lecture.css";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Lectures = () => {
  const [lect, setlect] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/lecture?page=${page}`)
      .then((res) => {
        setlect(res.data.user);
        setTotalPage(res.data.totalpage);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [page]);

  const formatDate = (date) => {
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return formattedDate;
  };

  // Storing the data to the local Storage to pass the data tot the Assignment description page
  const dataPass = (data) => {
    localStorage.setItem("lectureData", JSON.stringify(data));
    navigate("/Lectures/LectureDetails");
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Navbar />
      <div className="navBox">
        <div>
          <p className="schedule">Lectures</p>
        </div>
      </div>
      <div className="dataLecture">
        {lect.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="singleBox"
                onClick={() => {
                  dataPass(data);
                }}
              >
                <div className="content">
                  <p
                    className="topic"
                    style={{ color: "#5046e5", fontSize: "18px" }}
                  >
                    {data.title}{" "}
                    <button
                      style={{
                        backgroundColor: "#32c55e",
                        color: "white",
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
                    <b>{data.instructors}</b> Scheduled <b>{data.category}</b>{" "}
                    at {formatDate(data.scheduled)}, - {data.time}
                  </p>
                </div>
                <div className="status">
                  <Button variant="contained" color="success" size="small">
                    Present
                  </Button>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="buttonDiv">
        <Stack spacing={2}>
          <Pagination
            className="page"
            count={totalPage}
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </Stack>
      </div>
    </>
  );
};

export default Lectures;
