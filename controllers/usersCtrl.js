import User from "../model/Users.js";
import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js";
import { getTokenFromHeader } from "../utils/getTokenFromHeaders.js";
import { verifyToken } from "../utils/verifyToken.js";


//@desc register user
//@route /api/v1/register
//access All

export const registerCtrl = asyncHandler(async(req, res) =>{
    const {username, password} = req.body;
    //check if users exists
    const UserExists = await User.findOne({username});
    if (UserExists){
        throw new Error("User already exists");
    };

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const user = await User.create({
        username,
        password: hashedPassword,
    })

    res.status(201).json({
        status: "success",
        message: "User register successfully",
        data: user,
    });
});

//@desc login users
//@route /api/v1/users/login
//@access All

export const loginCtrl = asyncHandler(async(req, res) =>{
    const {username, password} = req.body;
    //find user by username
    console.log("Node.js version:", process.version);

    const userFound = await User.findOne({
        username,
    });
    if (userFound && await bcrypt.compare(password, userFound?.password)){
        res.json({
            status: "success",
            msg: "login success",
            userFound,
            token: generateToken(userFound?._id),
            
        });
    }else{
        throw new Error('Invalid login credential');
    };
});

//@desc get user profile
//@route GET /api/v1/users/profile
//@access Private

export const getUserProfile = asyncHandler(async(req, res) => {
    //find user
    const user = await User.findById(req.userAuthId);
    console.log(user);
    
    res.json({
        msg: "Welcome",
        user,
        
    });
});

