import React from "react";
import { useState } from "react";
import axios from "axios";

const Lectures = () => {
  const [lecture, setLecture] = useState({
    title: "",
    instructors: "",
    category: "",
    type: "",
    scheduled: "",
    time: "",
    link: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLecture({ ...lecture, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(lecture);

    axios
      .post("http://localhost:8080/lecture", lecture)
      .then((res) => {
        alert(res.data.message);
        e.target.reset();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="mainBox">
        <h1 className="nameHead">Lectures</h1>
        <form onSubmit={handleSubmit}>
          <div className="divideInput">
            <div>
              <label>Title:</label>
            </div>
            <div>
              <input
                type="text"
                id="title"
                className="inpBox"
                onInput={handleChange}
                required
              />
            </div>
          </div>

          <div className="divideInput">
            <div>
              <label>Instructors:</label>
            </div>
            <div>
              <input
                type="text"
                id="instictors"
                className="inpBox"
                onInput={handleChange}
                required
              />
            </div>
          </div>
          <div className="divideInput">
            <div>
              <label>Category ( Coding / DSA )</label>
            </div>
            <div>
              <input
                type="text"
                id="category"
                className="inpBox"
                onInput={handleChange}
                required
              />
            </div>
          </div>
          <div className="divideInput">
            <div>
              <label>Type ( Live / Video / Read)</label>
            </div>
            <div>
              <input
                type="text"
                id="type"
                className="inpBox"
                onInput={handleChange}
                required
              />
            </div>
          </div>
          <div className="divideInput">
            <div>
              <label>Scheduled:</label>
            </div>
            <div>
              <input
                type="Date"
                id="scheduled"
                className="inpBox"
                onInput={handleChange}
                required
              />
            </div>
          </div>
          <div className="divideInput">
            <div>
              <label>Time:</label>
            </div>
            <div>
              <input
                type="time"
                id="time"
                className="inpBox"
                onInput={handleChange}
                required
              />
            </div>
          </div>
          <div className="divideInput">
            <div>
              <label>Link:</label>
            </div>
            <div>
              <input
                type="link"
                id="link"
                className="inpBox"
                onInput={handleChange}
                required
              />
            </div>
          </div>

          <input type="submit" value="Submit" className="submitBtn" />
        </form>
      </div>
    </>
  );
};

export default Lectures;
