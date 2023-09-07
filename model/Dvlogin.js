import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dvloginSchema = new Schema({
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

    devicename:{
        type: String,
        required: true,

    },
    dvusername:{
        type: String,
        required: true,

    },
    dvpassword:{
        type: String,
        required: true,

    },
    remark:{
        type: String,

    },

},
{ timestamps: true },
);

const Dvlogin = mongoose.model("Dvlogin", dvloginSchema);

export default Dvlogin;

