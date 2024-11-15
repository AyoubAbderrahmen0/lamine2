

const express = require("express");
const { getAllTasks, getTaskById, addTask, deleteTask, updateTask } = require("../Controllers/TaskController");


const router = express.Router();


router.get("/getAllTasks", getAllTasks);
router.get("/getTaskById/:_id",getTaskById);
router.post("/addTask",addTask);
router.delete("/deleteTask/:_id",deleteTask);
router.put("/updateTask/:_id",updateTask);

module.exports = router;