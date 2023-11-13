const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
	res.json({ msg: "GET all workouts" });
});

router.get("/:id", (req, res, next) => {
	res.json({ msg: "Get single workout" });
});

router.post("/", (req, res, next) => {
	res.json({ msg: "POST a new workout" });
});

router.delete("/:id", (req, res, next) => {
	res.json({ msg: "DELETE a workout" });
});

router.patch("/:id", (req, res, next) => {
	res.json({ msg: "UPDATE a workout" });
});

module.exports = router;
