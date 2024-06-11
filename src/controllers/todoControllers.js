import mongoose from 'mongoose'
import Todo from '../model/TodoModel.js'

export const getAllTodos = async (request, response) => {
    try {
        const todos = await Todo.find({});
        response.status(200).json(todos);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const getSingleTodo = async (request, response) => {
    try {
        const { id } = request.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(404).send({ message: "cannot such id " })
        }
        const todo = await Todo.findById(id)
        console.log("todo" + todo);
        if (!todo) {
            return response.status(404).send({ message: "cannot such todo" })
        }
        response.status(200).send(todo)
    } catch (error) {
        response.status(404).send({
            message: error.message
        })
    }
}

export const createTodo = async (request, response) => {
    try {
        const { title } = request.body
        if (!title) {
            return response.status(400).send({ message: "Title is required" })
        }
        await Todo.create({ title }).then(
            (data) => {
                response.status(201).send(data)
            }
        )
    } catch (error) {
        response.status(500).send({
            message: error.message
        })
    }
}

export const deleteTodo = async (request, response) => {
    try {
        const { id } = request.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(404).send({ message: "cannot such id " })
        }
        const todo = await Todo.findByIdAndDelete({ _id: id })
        if (!todo) {
            return response.status(404).send({ message: "cannot such todo" })
        }
        response.status(200).send({ todo })
    } catch (error) {
        response.status(404).send({
            message: error.message
        })
    }
}

export const updateTodo = async (request, response) => {
    try {
        const { id } = request.params
        const { title: updatedTitle } = request.body
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(404).send({ message: "cannot such id " })
        }
        if (!updatedTitle) {
            return response.status(404).send({ message: "All inputs must be filled" })
        }
        const todo = await Todo.findByIdAndUpdate({ _id: id }, { title: updatedTitle })
        if (!todo) {
            return response.status(404).send({ message: "cannot such todo" })
        }
        response.status(200).send({ todo })
    } catch (error) {
        response.status(404).send({
            message: error.message
        })
    }
}