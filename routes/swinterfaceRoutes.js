import { createSwInterface, deleteSwInterface, getAllSwInterface, getSingleSwInterface, updateSwInterface } from "../controllers/swinterfaceCtrl.js";
import express from "express";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import swinterfaceFileUpload from "../config/swinterfaceFileUpload.js";


const swinterfaceRoutes = express.Router();

swinterfaceRoutes.post("/addnew/:configID", isLoggedIn, swinterfaceFileUpload.single("file") ,createSwInterface);
swinterfaceRoutes.get("/", isLoggedIn, getAllSwInterface);
swinterfaceRoutes.get("/:id", isLoggedIn, getSingleSwInterface);
swinterfaceRoutes.put("/:id", isLoggedIn, updateSwInterface);
swinterfaceRoutes.delete("/:id", isLoggedIn, deleteSwInterface);

export default swinterfaceRoutes;

