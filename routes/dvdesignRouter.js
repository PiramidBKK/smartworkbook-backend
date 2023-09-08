import { createDvdesign, deleteDvdesign,getoneDvdesign ,getAllDvdesign, updateDvdesign } from "../controllers/dvdesignCtrl.js";
import express from "express";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";

const dvdesignRouter = express.Router();

dvdesignRouter.post("/addnew/:configID",isLoggedIn ,createDvdesign);
dvdesignRouter.get("/", getAllDvdesign);
dvdesignRouter.get("/:id", getoneDvdesign);
dvdesignRouter.put("/:id", updateDvdesign);
dvdesignRouter.delete("/:id", deleteDvdesign);

export default dvdesignRouter;