import { createDvdesign, deleteDvdesign,getoneDvdesign ,getAllDvdesign, updateDvdesign } from "../controllers/dvdesignCtrl.js";
import express from "express";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import multer from "multer";

const dvdesignRouter = express.Router();

const upload = multer();

dvdesignRouter.post("/addnew/:configID",isLoggedIn,upload.none() ,createDvdesign);
dvdesignRouter.get("/", getAllDvdesign);
dvdesignRouter.get("/:id", getoneDvdesign);
dvdesignRouter.put("/:id", updateDvdesign);
dvdesignRouter.delete("/:id", deleteDvdesign);

export default dvdesignRouter;