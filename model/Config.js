import mongoose from "mongoose";

const Schema = mongoose.Schema;

const configSchema = new Schema({
    projectname:{
        type: String,
        required: true,
    },

    locationname:{
        type: String,
        required: true,
    },

    filetypes:{

        type: [String],
        enum: [
            "Network System",
            "Firewall System",
            "Server System",
            "CCTV System",
            "Telephone System",
            "IPTV System",
            "Internet Gateway",
            "Clients (PC , Laptop)",
            "WiFi System",
            "Access Control",
            "Digital Signage",
            "Cabling",
            "Other"
        ],
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },

    images:[
        {
            type: String,
            required: true,
        },
    ],

    dvdesigns:[
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Dvdesign",
        }, 
    ],

    swdetails:[
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Swdetail",
        },
    ],

    swinterfaces:[
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Swinterface",
        },
    ],

    dvlogins:[
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Dvlogin",
        },
    ],

},

{timestamps: true},

);

const Config = mongoose.model("Config", configSchema);

export default Config;
