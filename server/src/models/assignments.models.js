const mongoose = require("mongoose");

const assignmentModel = new mongoose.Schema(
  {
    title: { type: String, required: true },
    instructors: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    scheduled: { type: Date, required: true },
    time: { type: String, required: true },
    link: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    //timestamps:true,
  }
);

module.exports = mongoose.model("Assignment", assignmentModel);
