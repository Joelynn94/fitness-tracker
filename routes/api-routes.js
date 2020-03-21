const Workout = require("../models/workout")

module.exports = function(app) {
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((results) => {
        res.json(results)
      })
      .catch(err => {
        res.status(400).json(err);
      })
  })

  app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.status(400).json(err)
      })
  })

  // app.get("/api/workouts/:id", ({ params }, res) => {
  //   Workout.findOneAndUpdate({ _id : params.id })
  //     .then(results => {
  //       res.json(results)
  //       console.log({_id : params.id})
  //     })
  //     .catch(err => {
  //       res.status(400).json(err)
  //     })
  // })

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((results) => {
        res.json(results)
      })
      .catch(err => {
        res.status(400).json(err);
      })
  })
}
