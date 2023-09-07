import Dvdesign from "../model/Dvdesign.js";
import asyncHandler from "express-async-handler";
import Config from "../model/Config.js";





//@desc Create Device Design
//@route /api/v1/dvdesign/addnew
//@access All

export const createDvdesign = asyncHandler(async(req, res) =>{
    const { config, vlanid, vlanname, ipsubnet, gateway, hostrange, remark } = req.body;

    //find Project
    const { configID } = req.params;
    const configFound = await Config.findById(configID).populate("dvdesigns");

    //check if design exists

    const  existingDvdesign = await Dvdesign.findOne({
        vlanid,
        config: configFound?._id,
    });

    if(existingDvdesign){
        throw new Error("Please use another vlan ID");
    };

    //create vlan
    const dvdesign = await Dvdesign.create({
        vlanid,
        vlanname,
        ipsubnet,
        gateway,
        hostrange,
        remark,
        config: configFound?._id,
        user: req.userAuthId,
        
    });

    
    //push dvdesign into config
    configFound.dvdesigns.push(dvdesign?._id);

    //resave
    await configFound.save();

    res.json({
        success: true,
        msg: "Vlan created",
        dvdesign,

    });

});





//@desc Get all  Device Design
//@route /api/v1/dvdesign/getall
//@access All

export const getAllDvdesign = asyncHandler(async(req, res) => {

    const dvdesign = await Dvdesign.find();

    res.json({
        msg: "Get All Success",
        dvdesign
    })
});





//@desc get one Device Design
//@route api/v1/dvdesign/:id
//@access All

export const getoneDvdesign = asyncHandler(async(req, res) =>{
    const dvdesign = await Dvdesign.findById(req.params.id);

    res.json({
        msg: "success",
        dvdesign
    });

});





//@desc Update Device Design
//@route api/v1/dvdesign/update
//@access All

export const updateDvdesign = asyncHandler(async(req, res) => {
    const { vlanid, vlanname, ipsubnet, gateway, hostrange, remark } = req.body;

    //update vlan
    const dvdesign = await Dvdesign.findByIdAndUpdate(req.params.id, 
        { vlanid,vlanname, ipsubnet, gateway, hostrange, remark  }, 
        { new: true, });

    res.json({
        status: "success",
        msg: "Update successfully",
        dvdesign,
    });

    
});


//@desc delete Device Design
//@route api/v1/dvdesign/delete
//@access All

export const deleteDvdesign = asyncHandler(async(req, res) => {

    const dvdesign = await Dvdesign.findByIdAndDelete(req.params.id);

    res.json({
        status: "success",
        msg: "Delete successfully",
    });
    
});