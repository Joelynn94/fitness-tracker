const express = require("express");
const router = express.Router();
const Workout = require("../models/workout")

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((results) => {
      res.json(results)
    })
    .catch(err => {
      res.status(400).json(err);
    })
})

module.exports = router;