import dotenv from "dotenv";
dotenv.config();
import express from "express";
import dbConnect from "../config/dbConnect.js";
import { gobalErrHandler, notFound } from "../middlewares/gobalErrHandler.js";
import userRoutes from "../routes/usersRoute.js"
import dvdesignRouter from "../routes/dvdesignRouter.js";
import configRouter from "../routes/configRouter.js";
import dvloginRouter from "../routes/dvloginRouter.js";
import swdetailRouter from "../routes/swdetailRouter.js";
import swinterfaceRouter from "../routes/swinterfaceRouter.js";
import cors from 'cors';

//dbConnect
dbConnect();

const app = express();
app.use(cors());

//pass incoming data
app.use(express.json());

//routes
app.use('/api/v1/users/', userRoutes);
app.use('/api/v1/config/', configRouter);
app.use('/api/v1/dvdesign/', dvdesignRouter);
app.use('/api/v1/dvlogin/', dvloginRouter);
app.use('/api/v1/swdetail/', swdetailRouter);
app.use('/api/v1/swinterface/', swinterfaceRouter);

//error middleware
app.use(gobalErrHandler);
app.use(notFound);

export default app;