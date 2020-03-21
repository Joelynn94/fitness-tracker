// bring in express
const express = require("express");
// bring in mongoose 
const mongoose = require("mongoose");
// bring in mongojs
const mongojs = require("mongojs");
// bring in logger 
const logger = require("morgan");

const path = require("path");


// sets up the port to listen to
const PORT = process.env.PORT || 8080;

// initializes express 
const app = express();

// bringing in the morgan logger 
app.use(logger("dev"));

// bringing in middleware to parse the request body 
app.use(express.urlencoded({ extended: true }));
// bringing in middleware to parse the request json
app.use(express.json());

// bringing in middleare to serve static files such as images, CSS files, and JavaScript files
app.use(express.static("public"));

// using mongoose to connect to database
mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/workoutsDB", { useNewUrlParser: true, useFindAndModify: false});

// bringing in the routes folder 
app.use(require("./routes/api.js"));

// route for the index page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"))
});

// route for the exercise page
app.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "exercise.html"))
});

// route for the stats page
app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "stats.html"))
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});