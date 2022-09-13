import User from '../model/User'
import Blog from '../model/Blog'


export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find()
    }catch(err) {
        console.log(err)
    }

    if(!users){
        return res.status(404).json({message : "No user found"})
    }

    return res.status(200).json({users})
}


export const signup = async (req, res, next) => {
    const { name, email, password } = req.body

    let existingUser

    //check if available
    try{
        existingUser = await User.findOne({email})
    } catch (err) {
        console.log(err)
    }

    if(existingUser){
        return res.status(400).json({message: "User already exist"})
    }

    //save user
    const  user = new User({
        name,
        email,
        password,
        blogs: [],
        following: [],
        follower: [],
        block: [],
    })

    try{
        await user.save()
    }
    catch(err){
       return console.log(err)
    }

    return res.status(201).json({user})
}


export const login = async (req, res, next) => {
    const { email, password } = req.body

    let existingUser

    //check if available
    try{
        existingUser = await User.findOne({email})
    } catch (err) {
        console.log(err)
    }

    if(!existingUser){
        return res.status(400).json({message: "User don't exist"})
    }

    const isPasswordCorrect = password == existingUser.password ? true : false
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Incorrect password"})
    }

    return res.status(200).json({message:"Login Successful", user: existingUser})
    
}


export const getByEmail = async (req, res, next) => {
    const { email } = req.body

    let existingUser

    try{
        existingUser = await User.findOne({email: email})
    } catch (err) {
        console.log(err)
    }

    if(!existingUser){
        return res.status(400).json({message: "User don't exist"})
    }

    return res.status(200).json({user: existingUser})
    
}


export const blockUser = async(req, res, next) => {
    const {user, userToBlock} = req.body

    let existingUser, updatedUser

    try{
        existingUser = await User.findOne({email: user})
    } catch (err) {
        console.log(err)
    }

    if(!existingUser){
        return res.status(400).json({message: "No user of such name existed"})
    }

    let id = existingUser._id.valueOf()
    let newBlock = existingUser.block
    if(!newBlock.includes(userToBlock)){
        newBlock.push(userToBlock)
    }else{
        console.log("Already Block")
    }
 

    try{
       updatedUser = await User.findByIdAndUpdate(id, {block: newBlock})
    }catch (err) {
        console.log(err)
    }
    
   

    if(!updatedUser){
        return res.status(400).json({message: "Error Update"})
    }

    return res.status(200).json({success:true})
}


export const followUser = async(req, res, next) => {
    const {user, userToFollow} = req.body

    let existingUser, updatedUser, existingUserToFollow, updatedUserToFollow

    try{
        existingUser = await User.findOne({email: user})
        existingUserToFollow = await User.findOne({email: userToFollow})
    } catch (err) {
        console.log(err)
    }

    if(!existingUser){
        return res.status(400).json({message: "No user of such name existed"})
    }

    //id of user that will follow other user
    let followerId = existingUser._id.valueOf()

    //followed user
    let followingId = existingUserToFollow._id.valueOf()

    let following = existingUser.following
    if(!following.includes(userToFollow)){
        following.push(userToFollow)
    }else{
        console.log("Already Followed")
    }

    let follower = existingUserToFollow.follower
    if(!follower.includes(user)){
        follower.push(user)
    }else{
        console.log("Already a follower")
    }
 

    try{
       updatedUser = await User.findByIdAndUpdate(followerId, {following: following})
       updatedUserToFollow = await User.findByIdAndUpdate(followingId, {follower: follower})
    }catch (err) {
        console.log(err)
    }
    
   

    if(!updatedUser && !updatedUserToFollow){
        return res.status(400).json({message: "Error Update"})
    }

    return res.status(200).json({success:true})
}



export const getFollowerList = async(req, res, next) => {
    const {email} = req.body

    let existingUser

    try{
        existingUser = await User.findOne({email: email})
    } catch (err) {
        console.log(err)
    }

    if(!existingUser){
        return res.status(400).json({message: "No user of such name existed"})
    }

    return res.status(200).json({success:true, followers: existingUser.follower, count: existingUser.follower.length})
}

export const getCommonFollowerList = async(req, res, next) => {
    const {email} = req.body

    console.log(email)
    let existingUsers

    try{
        existingUsers = await User.find({email: {$in : email}})
    } catch (err) {
        console.log(err)
    }

    let commonArray = []

    for(let i = 0; i < existingUsers.length; i++){
        commonArray.push(existingUsers[i].follower)
    }

    commonArray = commonArray.reduce((a, b) => a.filter(c => b.includes(c)))
    
    

    if(!existingUsers){
        return res.status(400).json({message: "No user of such name existed"})
    }

    return res.status(200).json({success:true, followers: commonArray, count: commonArray.length})
}



export const getBlogsByUser = async(req, res, next) => {
    const {email, authorEmail} = req.body

    let userBlogs
    
    try {
        userBlogs = await User.findOne({email: authorEmail}).populate("blogs")
    } catch (err) {
        return console.log(err)
    }

    if(!userBlogs){
        return res.status(404).json({message: "No Blogs Found"})
    }
    
    let blogList = []

    for(let i = 0; i < userBlogs.blogs.length; i++){
        blogList.push(userBlogs.blogs[i].title)
    }

    return res.status(200).json({ success: true, blogs: blogList})
}