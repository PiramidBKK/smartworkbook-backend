import Swinterface from "../model/Swinterface.js";
import asyncHandler from "express-async-handler"
import Config from "../model/Config.js";

//@desc Create Switch interface
//@route /api/v1/swinterface/addnew/:configID
//@access All dvdesign

export const createSwInterface = asyncHandler(async(req, res) =>{
    const {
        config,
        swname,
        port,
        connectto, 
        description, 
        vlanid, 
        mode,
        label,
        remark 
    } = req.body;

    //find Project
    const { configID } = req.params;
    const configFound = await Config.findById(configID).populate("swinterfaces");

    // Count the existing Switch interfaces for the same configuration
    const existingInterfacesCount = configFound.swinterfaces.length;
    const portNumber = existingInterfacesCount + 1;
    const generatedport = `port${portNumber}`;

    const swinterface = await Swinterface.create({
        port: generatedport ,
        connectto, 
        description, 
        vlanid, 
        mode,
        label,
        remark,
        config: configFound?._id,
        user: req.userAuthId,
        
    });

    //push swinterface into config
    configFound.swinterfaces.push(swinterface?._id);

    //resave
    await configFound.save();

    res.json({
        success: true,
        msg: "Switch interface created",
        swinterface,
    
    });

});



//@desc get all Switch interface
//@route /api/v1/swinterface
//@access All

export const getAllSwInterface = asyncHandler(async(req, res) =>{
    const getallswinterface = await Swinterface.find();

    res.json({
        msg: "Get All Success",
        getallswinterface
    });

});

//@desc get single Switch interface
//@route /api/v1/swinterface/:id
//@access All

export const getSingleSwInterface = asyncHandler(async(req, res) =>{
    const getsingleswinterface = await Swinterface.findById(req.params.id);

    res.json({
        msg: "Get single Success",
        getsingleswinterface

    });

});

//@desc update Switch interface
//@route /api/v1/swinterface/:id
//@access All

export const updateSwInterface = asyncHandler(async(req, res) =>{
    const {
        swname, 
        connectto, 
        description, 
        vlanid, 
        mode,
        label,
        remark 
    } = req.body;

    const updateswinterface = await Swinterface.findByIdAndUpdate(req.params.id,
        {
            swname, 
            connectto, 
            description, 
            vlanid, 
            mode,
            label,
            remark 
        },
        {new: true},

        );

    res.json({
        msg: "Update All Success",
        updateswinterface
        
    });

});

//@desc delete Switch interface
//@route /api/v1/swinterface/:id
//@access All

export const deleteSwInterface = asyncHandler(async(req, res) => {

    const deleteswinterface = await Swinterface.findByIdAndDelete(req.params.id);

    res.json({
        status: "success",
        msg: "Delete successfully",
    });
    
});

