const express = require("express");
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

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
