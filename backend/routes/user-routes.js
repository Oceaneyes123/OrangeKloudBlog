import express from 'express'
import { getAllUsers, signup, login, blockUser, getByEmail, followUser, getFollowerList, getCommonFollowerList} from '../controller/user-controller'

const router = express.Router()

router.get("/", getAllUsers)

router.post("/signup", signup)
router.post("/login", login)
router.post("/block", blockUser)
router.post("/getByEmail", getByEmail)
router.post("/follow", followUser)
router.get("/followerList", getFollowerList)
router.get("/commonFollowerList", getCommonFollowerList)

export default router