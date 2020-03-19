const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  workoutType: {
    type: String,
    trim: true,
    required: "Enter a workour type"
  },
  workoutName: {
    type: String,
    trim: true,
    required: true
  },
  duration: {
    type: Number,
    required: "Enter a duration"
  },
  weight: {
    type: Number,
    required: "Enter the weight you used"
  },
  reps: {
    type: Number,
    required: "Enter the amount of reps you did"
  },
  sets: {
    type: Number,
    required: "Enter the amount of sets you completed"
  },
  userCreated: {
    type: Date,
    default: Date.now()
  }
})
