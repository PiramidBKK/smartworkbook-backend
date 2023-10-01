import { config } from "dotenv";
import Config from "../model/Config.js";
import asyncHandler from "express-async-handler"
import Dvdesign from "../model/Dvdesign.js";
import Dvlogin from "../model/Dvlogin.js";
import Swdetail from "../model/Swdetail.js";
import Swinterface from "../model/Swinterface.js";





//@desc Add device to database
//@route /api/v1/config/addnew
//@access All

export const addWorkbookCtrl = asyncHandler(async(req, res) =>{

    const {projectname, locationname, filetypes} = req.body;

    const convertedImgs = req.files.map((file) => file?.path);

    //check if projectname exists
    const projectExists = await Config.findOne({projectname});
    if(projectExists){
        throw new Error(
            "Project is already exists"
        );
    };

    //create new config
    const config = await Config.create({
        projectname,
        locationname,
        filetypes,
        images: convertedImgs,
        user: req.userAuthId,        
        
    });

    //test respond
    res.json({
        msg: "config",
        config,
    });

});

//
//@desc Get All Device log
//@route /api/v1/config/projectdetail
//@access All

export const getAllWorkbook = asyncHandler(async( req, res)=>{

    let configQuary = Config.find();

    //search by name
    if(req.query.projectname){
        configQuary = configQuary.find({
            projectname:{$regex: req.query.projectname, $options:'i'},
        });
        
    };
    

    //search by location
    if(req.query.locationname){
        configQuary = configQuary.find({
            locationname:{$regex: req.query.locationname, $options:'i'},
        });
        
    };

    //search by location
    if(req.query.filetypes){
        configQuary = configQuary.find({
            filetypes:{$regex: req.query.filetypes, $options:'i'},
        });
        
    };

    const configDvdesign = await configQuary.populate("dvdesigns")
    .populate("dvlogins")
    .populate("swdetails")
    .populate("swinterfaces");

    //get all
    res.json({
        status: "success",
        configDvdesign,

    });
});




//@desc Get single Device 
//@route /api/v1/config/projectdetail/:id
//@access All

export const getSingleWorkbook = asyncHandler(async( req, res)=>{
    const config = await Config.findById(req.params.id)
    .populate("dvdesigns")
    .populate("dvlogins")
    .populate({
        path: "swdetails",
        populate: {
            path: "swinterfaces",
        }
    })
    .populate("swinterfaces");

    //get all
    res.json({
        msg: "Single Project",
        config,

    });
});



//@desc update All Device 
//@route /api/v1/config/projectdetail/:id
//@access All

export const updateWorkbook = asyncHandler(async( req, res)=>{
    const {projectname, locationname, filetypes} = req.body;

    const config = await Config.findByIdAndUpdate(req.params.id, 
        {projectname, locationname, filetypes}, { new: true})
    .populate("dvdesigns")
    .populate("dvlogins")
    .populate("swdetails")
    .populate("swinterfaces");

    //get all
    res.json({
        msg: "All Project",
        config,

    });
});




//@desc Get All Device 
//@route /api/v1/config/projectdetail/:id
//@access All

export const deleteWorkbook = asyncHandler(async( req, res)=>{
    const config = await Config.findByIdAndDelete(req.params.id)

    const dvdesignDelete = config.dvdesigns;
    const dvloginDelete = config.dvlogins;
    const swdetailDelete = config.swdetails;
    const swinterfaceDelete = config.swinterfaces;

    await Dvdesign.deleteMany({_id: {$in: dvdesignDelete}});
    await Dvlogin.deleteMany({_id: {$in: dvloginDelete}});
    await Swdetail.deleteMany({_id: {$in: swdetailDelete}});
    await Swinterface.deleteMany({_id: {$in: swinterfaceDelete}});

    

    //get all
    res.json({
        msg: "All Project",
        
    });
});

