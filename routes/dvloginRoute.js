import { createDvlogin , getDvlogin, updateDvlogin, deleteDvlogin} from "../controllers/dvloginCtrl.js";
import express from "express";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";


const dvloginRoutes = express.Router();

dvloginRoutes.post("/adddvlogin/:configID" ,isLoggedIn , createDvlogin);
dvloginRoutes.get("/" ,isLoggedIn , getDvlogin);
dvloginRoutes.put("/:id" ,isLoggedIn , updateDvlogin);
dvloginRoutes.delete("/:id" ,isLoggedIn , deleteDvlogin);

export default dvloginRoutes;
