import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import todosRoutes from './src/routes/todos.js '
dotenv.config()

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5001;
const MongoDB_Url = process.env.MongoDb_Url;

app.use("/api/todos/", todosRoutes)

mongoose.connect(MongoDB_Url)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server listening on ${PORT} and succesfully connect database`);
        })
    }).catch((error) => {
        console.log(error);
    })