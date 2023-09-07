import dotenv from "dotenv";
dotenv.config();
import express from "express";
import dbConnect from "../config/dbConnect.js";
import userRoutes from "../routes/usersRoute.js";
import { gobalErrHandler, notFound } from "../middlewares/gobalErrHandler.js";
import configRoutes from "../routes/configRoute.js";
import dvdesignRoutes from "../routes/dvdesignRoute.js";
import dvloginRoutes from "../routes/dvloginRoute.js";
import swdetailRoutes from "../routes/swdetailRoute.js";
import swinterfaceRoutes from "../routes/swinterfaceRoute.js";

//dbConnect
dbConnect();

const app = express();

//pass incoming data
app.use(express.json());

//routes
app.use('/api/v1/users/', userRoutes);
app.use('/api/v1/workbook/', configRoutes);
app.use('/api/v1/dvdesign/', dvdesignRoutes);
app.use('/api/v1/dvlogin/', dvloginRoutes);
app.use('/api/v1/swdetail/', swdetailRoutes);
app.use('/api/v1/swinterface/', swinterfaceRoutes);

//error middleware
app.use(gobalErrHandler);
app.use(notFound);

export default app;