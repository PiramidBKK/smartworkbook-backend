import mongoose from "mongoose";

const Schema = mongoose.Schema;

const swdetailSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true

    },
    config:{
        type: mongoose.Schema.Types.ObjectId,
        required: true

    },
    swinterfaces:[
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Swinterface",
        },
    ],

    hostname:{
        type: String,
        required: true

    },
    location:{
        type: String,
        required: true

    },
    brand:{
        type: String,
        required: true

    },
    model:{
        type: String,
        required: true

    },
    modelimg:{
        type: String
    },
    serialnumber:{
        type: String,
        required: true
        
    },
    macaddress:{
        type: String,
        required: true
        
    },
    ipaddress:{
        type: String,
        required: true
        
    },
    subnetmask:{
        type: String,
        required: true
        
    },
    defaultgateway:{
        type: String,
        required: true  
    },
    remark:{
        type: String,
    },

},
{timestamps: true},
);

const Swdetail = mongoose.model("Swdetail", swdetailSchema);

export default Swdetail;