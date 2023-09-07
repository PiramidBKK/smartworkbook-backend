import express from "express";
import { registerCtrl, loginCtrl, getUserProfile } from "../controllers/usersCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";


const userRoutes = express.Router();

userRoutes.post("/register", registerCtrl);
userRoutes.post("/login", loginCtrl);
userRoutes.get("/profile", isLoggedIn, getUserProfile);

export default userRoutes;
