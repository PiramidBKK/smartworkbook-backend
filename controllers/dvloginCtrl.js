import Config from "../model/Config.js";
import Dvlogin from "../model/Dvlogin.js";
import asyncHandler from "express-async-handler";

//@desc Create Device Login
//@route /api/v1/dvlogin//adddvlogin/:configID
//@access All

export const createDvlogin = asyncHandler(async(req, res) => {
    const {config, devicename, dvusername, dvpassword, remark} = req.body;

    //find project
    const { configID } = req.params;
    const configFound = await Config.findById(configID).populate('dvlogins')

    //check
    const loginFound = await Dvlogin.findOne({devicename});
    if(loginFound){
        throw new error('device name already exists');
    }


    //create dvlogin
    const dvlogin = await Dvlogin.create({
        devicename,
        dvusername,
        dvpassword,
        remark,
        config: configFound?._id,
        user: req.userAuthId,

    });

    //push dvdesign into config
    configFound.dvlogins.push(dvlogin?._id);

    //resave
    await configFound.save();
    

    //respond
    res.json({
        status:"success",
        msg:"deviclogin created",
        dvlogin
    });

});


//@desc get all Device Login
//@route /api/v1/dvlogin/
//@access All

export const getDvlogin = asyncHandler(async(req, res) =>{

    const getalldvlogin = await Dvlogin.find();

    res.json({
        status: "success",
        getalldvlogin
    });
});

//@desc update Device Login
//@route /api/v1/dvlogin/:id
//@access All

export const updateDvlogin = asyncHandler(async(req, res)=>{
    const {devicename, dvusername, dvpassword, remark} = req.body;

    const updatedvlogin = await Dvlogin.findByIdAndUpdate(req.params.id, {devicename, dvusername, dvpassword, remark}, {new: true});

    res.json({
        msg: "update successfully",
        updatedvlogin
    });

});


//@desc delete Device Login
//@route /api/v1/dvlogin/:id
//@access All

export const deleteDvlogin = asyncHandler(async(req, res)=>{
    const deletedvlogin = await Dvlogin.findByIdAndDelete(req.params.id);

    res.json({
        status: "success",
        msg: "device login removed",
        
    });

});
