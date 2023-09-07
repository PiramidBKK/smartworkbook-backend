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
    port:{
        type: Number,
        required: true
    },
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