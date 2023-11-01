import { createDvlogin , getDvlogin, updateDvlogin, deleteDvlogin, getSingleDvlogin} from "../controllers/dvloginCtrl.js";
import express from "express";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import multer from "multer";

const upload = multer();

const dvloginRouter = express.Router();

dvloginRouter.post("/addnew/:configID" ,isLoggedIn,upload.none() , createDvlogin);
dvloginRouter.get("/" ,isLoggedIn , getDvlogin);
dvloginRouter.get("/:id" ,isLoggedIn , getSingleDvlogin);
dvloginRouter.put("/:id" ,isLoggedIn , updateDvlogin);
dvloginRouter.delete("/:id" ,isLoggedIn , deleteDvlogin);

export default dvloginRouter;
