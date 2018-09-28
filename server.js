const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const routes = require("./server/routes/routes.js");
const bodyParser = require("body-parser");
const db = require('./config/keys').mongoURI

//Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected ...'))
    .catch(err => console.log(err))


// initialize express server
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// parse application/json
const jsonParser = bodyParser.json();
app.use(jsonParser);

// allow cors
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// Initialize routes
app.use("/api", routes);

// Listen for requests
app.listen(process.env.PORT || 5000, () =>
	console.log("Listening for requests")
);
