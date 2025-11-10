import express from "express";
import { CreateUser } from "#controllers/UserController/user-controller.js";

const router = express.Router();

router.post("/", CreateUser);

export default router;
