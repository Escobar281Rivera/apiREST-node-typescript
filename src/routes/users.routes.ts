import { Router } from "express";
import UsersController from "../controllers/users.controller";
import userValidate from "../validators/user.validate";


const router = Router()

const user = UsersController



router.get("/", user.listUsers)
router.post('/', userValidate ,user.createUser)
//router.post("/createRol:id", user.createUsers)
router.get("/:id", user.byIdUser)
router.put("/:id", user.updateUser)
router.delete("/:id", user.deleteUser)

export default router