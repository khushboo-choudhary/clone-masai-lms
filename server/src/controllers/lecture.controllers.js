const express = require("express");
const Lecture = require("../models/lecture.models");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    const user = await Lecture.create(req.body);
    // Helper function to format time in HH:mm format
    const formatTime = (time) => {
      const [hours, minutes] = time.split(":");
      let formattedHours = parseInt(hours, 10);
      let period = "AM";

      // Convert to 12-hour format and determine AM/PM
      if (formattedHours >= 12) {
        period = "PM";
        if (formattedHours > 12) {
          formattedHours -= 12;
        }
      }

      const formattedMinutes = minutes.padStart(2, "0");
      return `${formattedHours}:${formattedMinutes} ${period}`;
    };

    let formattedTime = formatTime(user.time);
    user.time = formattedTime;
    // Save the updated lecture to the database
    await user.save();

    if (!user) throw Error("Something went wrong!");
    res.status(201).json({
      message: "Lecture created successfully!",
      user,
    });
  } catch (error) {
    return res.send(error.message);
  }
});

router.get("", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 5;
    const user = await Lecture.find()
      .skip((page - 1) * size)
      .limit(size)
      .lean()
      .exec();
    const totalpage = Math.ceil((await Lecture.find().countDocuments()) / size);
    return res.send({ user, totalpage });
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = router;
