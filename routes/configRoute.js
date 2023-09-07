import express from "express";
import { addWorkbookCtrl, deleteWorkbook, getAllWorkbook, getSingleWorkbook, updateWorkbook } from "../controllers/configCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import upload from "../config/fileUpload.js";


const configRoutes = express.Router();

configRoutes.post("/addnew",isLoggedIn,upload.array("files") ,addWorkbookCtrl);
configRoutes.get("/", getAllWorkbook);
configRoutes.get("/:id", getSingleWorkbook);
configRoutes.put("/:id", updateWorkbook);
configRoutes.delete("/:id", deleteWorkbook);


export default configRoutes;