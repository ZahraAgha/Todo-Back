import express from "express"
import { createTodo, deleteTodo, getAllTodos ,getSingleTodo, updateTodo} from "../controllers/todoControllers.js"

const todosRoutes = express.Router()
todosRoutes.get("/", getAllTodos)
todosRoutes.get("/:id",getSingleTodo)
todosRoutes.post("/",createTodo)
todosRoutes.delete("/:id",deleteTodo)
todosRoutes.patch("/:id",updateTodo)

export default todosRoutes 