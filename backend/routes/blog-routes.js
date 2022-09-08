import express from 'express'
import { getAllBlogs, addBlog, getById, getByUserId } from '../controller/blog-controller'

const blogRouter = express.Router()

blogRouter.get("/", getAllBlogs)
blogRouter.post("/add", addBlog)
blogRouter.get("/:id", getById)
blogRouter.get("/user/:id", getByUserId)

export default blogRouter