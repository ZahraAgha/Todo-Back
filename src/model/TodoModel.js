import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
const Todo = mongoose.model("todos", TodoSchema)
export default Todo