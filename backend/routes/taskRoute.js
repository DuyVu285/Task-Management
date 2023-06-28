const express = require("express");
const Task = require("../models/taskModel");
const router = express.Router();
const { createTask, getTask } = require("../controllers/taskController");

router.post("/api/tasks", createTask);
router.get("/api/tasks", getTask);

module.exports = router;
