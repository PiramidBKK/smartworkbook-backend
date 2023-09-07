import express from "express";
import { createSwdetail, deleteSwdetail, getAllSwdetail, getSingleSwdetail, updateSwdetail } from "../controllers/swdetailCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";

const swdetailRoutes = express.Router();

swdetailRoutes.post("/addswdetail/:configID", isLoggedIn, createSwdetail)
swdetailRoutes.get("/", isLoggedIn, getAllSwdetail)
swdetailRoutes.get("/:id", isLoggedIn, getSingleSwdetail)
swdetailRoutes.put("/:id", isLoggedIn, updateSwdetail )
swdetailRoutes.delete("/:id", isLoggedIn, deleteSwdetail)

export default swdetailRoutes;