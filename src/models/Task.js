import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide title"],
    trim: true,
    maxlength: 50,
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
    trim: true,
    maxlength: 500,
  },
  status: {
    type: Boolean,
    default: false,
  },
});
const Task = mongoose.model("Task", TaskSchema);
export default Task;
