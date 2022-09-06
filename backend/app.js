import express from "express"
import mongoose from "mongoose"
import router from "./routes/user-routes"

const app = express()

app.use(express.json())
app.use("/api/user", router)


mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.g9irziq.mongodb.net/Blog?retryWrites=true&w=majority'
    )
    .then(() => app.listen(5000))
    .then(() => console.log('Database Connected')).catch((err) => console.log(err))
