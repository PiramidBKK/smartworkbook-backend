import Swdetail from "../model/Swdetail.js";
import asyncHandler from "express-async-handler"
import Config from "../model/Config.js";

//@desc create switch detail
//@route /api/v1/swdetail/
//@access All

export const createSwdetail = asyncHandler(async(req, res) =>{
    const {
        config,
        port, 
        hostname, 
        location, 
        brand, 
        model, 
        serialnumber, 
        macaddress,  
        ipaddress, 
        subnetmask,
        defaultgateway, 
        remark 
    } = req.body;

    //find project
    const {configID} = req.params;
    const configFound = await Config.findById(configID).populate("swdetails");
    


    //check dvdetail exists
    const  existingswdetail = await Swdetail.findOne({
        hostname,
        config: configFound?._id,
    });

    if(existingswdetail){
        throw new Error("Switch detail alreadt exists")
    }

    //create swdetail
    const swdetail = await Swdetail.create({
        port, 
        hostname, 
        location, 
        brand, 
        model, 
        modelimg,
        serialnumber, 
        macaddress,  
        ipaddress, 
        subnetmask,
        defaultgateway, 
        remark,
        config: configFound?._id,
        user: req.userAuthId,
    });

    //push swdetail into config
    configFound.swdetails.push(swdetail?._id);

    //resave
    await configFound.save();

    res.json({
        success: true,
        msg: "switch deatil created",
        swdetail,

    });

})

//@desc get all switch detail
//@route /api/v1/swdetail/
//@access All

export const getAllSwdetail = asyncHandler(async(req, res) =>{
    const allSwdetail = await Swdetail.find().populate("swinterfaces");
    ;

    res.json({
        success: true,
        msg: "switch deatil created",
        allSwdetail,

    });

})

//@desc get single switch detail
//@route /api/v1/swdetail/:id
//@access All

export const getSingleSwdetail = asyncHandler(async(req, res) =>{
    const singleSwdetail = await Swdetail.findById(req.params.id).populate("swinterfaces");;

    res.json({
        success: true,
        msg: "get single switch deatil",
        singleSwdetail,

    });

});

//@desc update  switch detail
//@route /api/v1/swdetail/
//@access All

export const updateSwdetail = asyncHandler(async(req, res) =>{
    const {
        port, 
        hostname, 
        location, 
        brand, 
        model, 
        modelimg,
        serialnumber, 
        macaddress,  
        ipaddress, 
        subnetmask,
        defaultgateway, 
        remark 
    } = req.body;


    const updateSwdetail = await Swdetail.findByIdAndUpdate(req.params.id,
        {
            port, 
            hostname, 
            location, 
            brand, 
            model, 
            modelimg,
            serialnumber, 
            macaddress,  
            ipaddress, 
            subnetmask,
            defaultgateway, 
            remark 
        },
        {new: true}
        );

    res.json({
        success: true,
        msg: "updated switch deatil",
        updateSwdetail,

    });

});

//@desc delete switch detail
//@route /api/v1/swdetail/
//@access All

export const deleteSwdetail = asyncHandler(async(req, res) =>{
    const deleteswdetail = await Swdetail.findByIdAndDelete(req.params.id);

    res.json({
        status: "success",
        msg: "Deleted",

    });

});