import { createSwInterface, deleteSwInterface, getAllSwInterface, getSingleSwInterface, updateSwInterface } from "../controllers/swinterfaceCtrl.js";
import express from "express";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";

const swinterfaceRouter = express.Router();

swinterfaceRouter.post("/addnew/:configID",isLoggedIn, createSwInterface);
swinterfaceRouter.get("/", isLoggedIn, getAllSwInterface);
swinterfaceRouter.get("/:id", isLoggedIn, getSingleSwInterface);
swinterfaceRouter.put("/:id", isLoggedIn, updateSwInterface);
swinterfaceRouter.delete("/:id", isLoggedIn, deleteSwInterface);

export default swinterfaceRouter;

