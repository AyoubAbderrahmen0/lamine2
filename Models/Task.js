

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const taskSchema = new schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default: "Detailed explanation of the task"
    },
    status:{
        type:String,
        default: " Not Started"
    },
    duration:{
        type:Number,
        default:0
    },
    isDone:{
        type:Boolean,
        required:false
    },
    assignedTo:{
        type: String,
    }
})

module.exports = mongoose.model("Task", taskSchema);