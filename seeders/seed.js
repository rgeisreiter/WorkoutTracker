const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const workoutSeed = [
  {
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    exercises: [
      {
        type: "strength",
        name: "Tricep extension",
        duration: 10,
        weight: 50,
        reps: 10,
        sets: 3,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 8)),
    exercises: [
      {
        type: "body-weight",
        name: "pullups",
        reps: 5,
        sets: 5,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 7)),
    exercises: [
      {
        type: "strength",
        name: "Bench Press",
        duration: 15,
        weight: 315,
        reps: 5,
        sets: 3,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 6)),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 45,
        distance: 7,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 5)),
    exercises: [
      {
        type: "strength",
        name: "Leg Press",
        duration: 25,
        weight: 300,
        reps: 12,
        sets: 3,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: "strength",
        name: "Hammer Curls",
        duration: 15,
        weight: 35,
        reps: 20,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        type: "strength",
        name: "Calf Raises",
        duration: 10,
        weight: 150,
        reps: 20,
        sets: 3,
      },
    ],
  },

  db.Workout.deleteMany({})
    .then(() => db.Workout.collection.insertMany(workoutSeed))
    .then((data) => {
      console.log(data.result.n + " records");
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    }),
];
