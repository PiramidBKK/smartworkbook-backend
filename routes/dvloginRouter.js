import { createDvlogin , getDvlogin, updateDvlogin, deleteDvlogin} from "../controllers/dvloginCtrl.js";
import express from "express";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";


const dvloginRouter = express.Router();

dvloginRouter.post("/adddvlogin/:configID" ,isLoggedIn , createDvlogin);
dvloginRouter.get("/" ,isLoggedIn , getDvlogin);
dvloginRouter.put("/:id" ,isLoggedIn , updateDvlogin);
dvloginRouter.delete("/:id" ,isLoggedIn , deleteDvlogin);

export default dvloginRouter;
