import mongoose from "mongoose";

const Schema = mongoose.Schema;

const designSchemna = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    config:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Config"
    },
    locationname:{
        type:mongoose.Schema.Types.ObjectId,
        // required:true,
        ref:"locationname"

    },
    vlanid:{
        type: String,
        required: true,
    },
    vlanname: {
        type: String,
        required: true,
    },
    ipsubnet:{
        type: String,
        required: true,
    },
    gateway:{
        type: String,
        required: true,
    },
    hostrange:{
        type: String,
        required: true,
    },
    remark:{
        type: String,
        required: true,
    },


},
{
    timestamps: true,
},
)

const Dvdesign = mongoose.model("Dvdesign", designSchemna);

export default Dvdesign;
