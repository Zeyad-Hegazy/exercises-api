const Workout = require("../models/workoutModel.js");

const getWorkouts = async (req, res) => {
	try {
		const workouts = await Workout.find({}).sort({ createdAt: -1 });
		res
			.status(200)
			.json({ message: "All workouts", status: 200, result: workouts });
	} catch (error) {
		res
			.status(500)
			.json({ message: "somthing went wrong", status: 500, result: error });
	}
};

const getWorkout = async (req, res) => {
	const id = req.params.id;

	try {
		const workout = await Workout.findById(id);

		if (!workout) {
			return res.status(404).json({
				message: "no such workout",
				status: 404,
			});
		}

		res
			.status(200)
			.json({ message: "This is Workout", status: 200, result: workout });
	} catch (error) {
		res
			.status(500)
			.json({ message: "somthing went wrong", status: 500, result: error });
	}
};

const createWorkout = async (req, res) => {
	const { title, reps, load } = req.body;
	try {
		const workout = await Workout.create({ title, reps, load });
		res
			.status(201)
			.json({ message: "workout created", status: 201, result: workout });
	} catch (error) {
		res
			.status(500)
			.json({ message: "somthing went wrong", status: 500, result: error });
	}
};

const deleteWorkout = async (req, res) => {
	const id = req.params.id;

	try {
		await Workout.findByIdAndRemove(id);
		res.status(200).json({ message: "workout deleted", status: 200 });
	} catch (error) {
		res
			.status(500)
			.json({ message: "somthing went wrong", status: 500, result: error });
	}
};

const updateWorkout = async (req, res) => {
	const id = req.params.id;
	const { title, reps, load } = req.body;

	try {
		const workout = await Workout.findByIdAndUpdate(id, { title, reps, load });
		res
			.status(200)
			.json({ message: "workout updated", status: 200, result: workout });
	} catch (error) {
		res
			.status(500)
			.json({ message: "somthing went wrong", status: 500, result: error });
	}
};

module.exports = {
	getWorkouts,
	getWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout,
};
