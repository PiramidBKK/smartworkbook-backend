import express from "express";
import { addWorkbookCtrl, deleteWorkbook, getAllWorkbook, getSingleWorkbook, updateWorkbook } from "../controllers/configCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import upload from "../config/fileUpload.js";


const configRouter = express.Router();

configRouter.post("/addnew",isLoggedIn,upload.array("files") ,addWorkbookCtrl);
configRouter.get("/", getAllWorkbook);
configRouter.get("/:id", getSingleWorkbook);
configRouter.put("/:id", updateWorkbook);
configRouter.delete("/:id", deleteWorkbook);


export default configRouter;