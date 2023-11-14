const express = require("express");
const router = express.Router();

const {
	getWorkouts,
	getWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout,
} = require("../controllers/workoutsControllers.js");

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", (req, res, next) => {
	res.json({ msg: "DELETE a workout" });
});

router.patch("/:id", (req, res, next) => {
	res.json({ msg: "UPDATE a workout" });
});

module.exports = router;
