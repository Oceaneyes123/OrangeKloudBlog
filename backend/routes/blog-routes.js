import express from 'express'
import { getAllBlogs, addBlog, getById } from '../controller/blog-controller'

const blogRouter = express.Router()

blogRouter.get("/", getAllBlogs)
blogRouter.post("/add", addBlog)
blogRouter.get("/:id", getById)

export default blogRouter