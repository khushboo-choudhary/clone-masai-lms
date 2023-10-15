import axios from "axios";
import React, { useState } from "react";

const Assignments = () => {
  const [assignment, setAssignment] = useState({
    title: "",
    instructors: "",
    type: "",
    scheduled: "",
    time: "",
    link: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;

    setAssignment({ ...assignment, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(assignment);

    axios
      .post("http://localhost:8080/assignment", assignment)
      .then((res) => {
        alert(res.data.message);
        e.target.reset();
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <>
      <div className="mainBox">
        <h1 className="nameHead">Assignments</h1>
        <form onSubmit={handleSubmit}>
          <div className="divideInput">
            <div>
              <label>Title :</label>
            </div>
            <div>
              <input
                type="text"
                className="inpBox"
                id="title"
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
                className="inpBox"
                id="instructors"
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
                className="inpBox"
                id="scheduled"
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
                className="inpBox"
                id="time"
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
                className="inpBox"
                id="link"
                onInput={handleChange}
                required
              />
            </div>
          </div>
          <div className="divideInput">
            <div>
              <label>Password:</label>
            </div>
            <div>
              <input
                type="text"
                className="inpBox"
                id="password"
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

export default Assignments;
