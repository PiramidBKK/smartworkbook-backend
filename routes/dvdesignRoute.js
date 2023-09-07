import { createDvdesign, deleteDvdesign,getoneDvdesign ,getAllDvdesign, updateDvdesign } from "../controllers/dvdesignCtrl.js";
import express from "express";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";

const dvdesignRoutes = express.Router();

dvdesignRoutes.post("/addnew/:configID",isLoggedIn ,createDvdesign);
dvdesignRoutes.get("/", getAllDvdesign);
dvdesignRoutes.get("/:id", getoneDvdesign);
dvdesignRoutes.put("/:id", updateDvdesign);
dvdesignRoutes.delete("/:id", deleteDvdesign);

export default dvdesignRoutes;