const path = require("path");

function htmlRoutes(app) {

  // route for the index page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });

  // route for the exercise page
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
  });

  // route for the stats page
  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
  });
}

module.exports = htmlRoutes;