import { Router } from "express";
import { createUser, readUsers, editUser, deleteUser } from "../controller/userController.js";

const router = Router();

router.post("/", createUser);
router.get("/", readUsers)
router.put("/:id", editUser)
router.delete(":id", deleteUser)

export default router;