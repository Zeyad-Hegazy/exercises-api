const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

const workoutRouter = require("./routes/workouts.js");

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

app.use("/api/workouts", workoutRouter);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`server running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.error(error);
	});
