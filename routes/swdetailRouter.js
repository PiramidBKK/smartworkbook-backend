import express from "express";
import { createSwdetail, deleteSwdetail, getAllSwdetail, getSingleSwdetail, updateSwdetail } from "../controllers/swdetailCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import multer from "multer";

const swdetailRouter = express.Router();

const upload = multer();

swdetailRouter.post("/addnew/:configID", isLoggedIn,upload.none(), createSwdetail)
swdetailRouter.get("/", isLoggedIn, getAllSwdetail)
swdetailRouter.get("/:id", isLoggedIn, getSingleSwdetail)
swdetailRouter.put("/:id", isLoggedIn, updateSwdetail )
swdetailRouter.delete("/:id", isLoggedIn, deleteSwdetail)

export default swdetailRouter;