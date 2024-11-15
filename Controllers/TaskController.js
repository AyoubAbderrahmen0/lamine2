const Task = require("../Models/Task");

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        if (!tasks) {
            res.status(404).send({ msg: "No tasks found" });
        } else {
            res.status(200).send(tasks);
        }
    } catch (error) {
        console.log(error, "getall")
        res.status(500).send({ msg: "Error fetching tasks" });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.status(200).send({ msg: "task found successfully", task });
    } catch (error) {
        console.log(error, "getByID")
        res.status(500).send({ msg: "error on getting task", error });
    }
};

exports.addTask = async (req, res) => {
    try {
        const { name, description, status, duration, isDone, assignedTo } = req.body;
        const newTask = new Task({ name, description, status, duration, isDone, assignedTo });
        await newTask.save();
        const TaskList = await Task.find();
        res.status(200).send({ msg: "task added successfully", newTask });
    } catch (error) {
        console.log(error, "add")
        res.status(500).send({ msg: "error on adding task", error });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params._id);
        const TaskList = await Task.find();
        res.status(200).send({ msg: "task deleted successfully", deleteTask, TaskList });
    } catch (error) {
        console.log(error, "delete")
        res.status(500).send({ msg: "error on deleting task", error });
    }
};

exports.updateTask = async (req, res) => {

    try {
        const { isDone } = req.body;
        const TaskList = await Task.find();
        const updatedTask = await Task.findByIdAndUpdate(req.params._id, { isDone });
        res.status(200).send({ msg: "task updated successfully", updatedTask, TaskList });
    } catch (error) {
        console.log(error, "update")
        res.status(500).send({ msg: "error on updating task", error });
    }
}
