import { createSwInterface, deleteSwInterface, getAllSwInterface, getSingleSwInterface, updateSwInterface } from "../controllers/swinterfaceCtrl.js";
import express from "express";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import multer from "multer";

const swinterfaceRouter = express.Router();

const upload = multer();

swinterfaceRouter.post("/addnew/:configID/:swdetailID",isLoggedIn,upload.none(), createSwInterface);
swinterfaceRouter.get("/", isLoggedIn, getAllSwInterface);
swinterfaceRouter.get("/:id", isLoggedIn, getSingleSwInterface);
swinterfaceRouter.put("/:id", isLoggedIn, updateSwInterface);
swinterfaceRouter.delete("/:id", isLoggedIn, deleteSwInterface);

export default swinterfaceRouter;

