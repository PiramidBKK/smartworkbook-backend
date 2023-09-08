import dotenv from "dotenv";
dotenv.config();
import express from "express";
import dbConnect from "../config/dbConnect.js";
import userRoutes from "../routes/usersRoutes.js";
import { gobalErrHandler, notFound } from "../middlewares/gobalErrHandler.js";
// import configRoutes from "../routes/configRoutes.js";
// import dvdesignRoutes from "../routes/dvdesignRoutes.js";
// import dvloginRoutes from "../routes/dvloginRoutes.js";
// import swdetailRoutes from "../routes/swdetailRoutes.js";
// import swinterfaceRoutes from "../routes/swinterfaceRoutes.js";
import cors from 'cors';

//dbConnect
dbConnect();

const app = express();
app.use(cors());

//pass incoming data
app.use(express.json());

//routes
// app.use('/api/v1/users/', userRoutes);
// app.use('/api/v1/config/', configRoutes);
// app.use('/api/v1/dvdesign/', dvdesignRoutes);
// app.use('/api/v1/dvlogin/', dvloginRoutes);
// app.use('/api/v1/swdetail/', swdetailRoutes);
// app.use('/api/v1/swinterface/', swinterfaceRoutes);

//error middleware
app.use(gobalErrHandler);
app.use(notFound);

export default app;