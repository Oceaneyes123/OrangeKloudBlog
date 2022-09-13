import mongoose from "mongoose"
import Blog from '../model/Blog'
import User from '../model/User'


export const getAllBlogs = async (req, res, next) => {
    let blogs

    try{
        blogs = await Blog.find().populate('user')
    } catch(err) {
       return console.log(err)
    }

    if(!blogs)  {
        return res.status(404).json({message: "No Blogs Found"})
    }

    return res.status(200).json({blogs})
}


export const addBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body

    let existingUser

    try {
        existingUser = await User.findById(user)
    } catch (err) {
        return console.log(err)
    }

    if(!existingUser){
        return res.status(400).json({message: "No user with this ID"})
    }

    const blog = new Blog({
        title,
        description,
        image,
        user
    })

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        //will save the blog to the databes
        await blog.save({session});
        //determine the reference user of the blog then save
        existingUser.blogs.push(blog)
        await existingUser.save({session})
        await session.commitTransaction()
    } catch (err) {
        console.log(err)
        return res.status(200).json({message: err})
    }

    return res.status(200).json({blog})
}

export const getById = async (req, res, next) => {
    const id = req.params.id;
    let blog
    try{
        blog = await Blog.findById(id)
    }catch(err){
        return console.log(err)
    }

    if(!blog){
        return res.status(404).json({message: "No Blog Found"})
    }

    return res.status(200).json({blog})
}


export const getByUserId = async(req, res, next) => {
    const userId = req.params.id
    let userBlogs
    console.log(userId)
    try {
        userBlogs = await User.findById(userId).populate("blogs")
        console.log(userBlogs)
    } catch (err) {
        return console.log(err)
    }

    if(!userBlogs){
        return res.status(404).json({message: "No Blogs Found"})
    }

    return res.status(200).json({blogs: userBlogs})
}