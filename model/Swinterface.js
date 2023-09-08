import mongoose from "mongoose";

const Schema = mongoose.Schema;

const swinterfaceSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    config:{
        type: mongoose.Schema.Types.ObjectId,
        required: true

    },
    image:{
        type: String,
    },
    swname:{
        type: String

    },
    port:{
        type: String
    },
    connectto:{
        type: String,

    },
    description:{
        type: String,

    },
    vlanid:{
        type: String,

    },
    mode:{
        type: String,

    },
    label:{
        type: String,


    },
    remark:{
        type: String,
    },



},
{timestamps: true}
)

const Swinterface = mongoose.model("Swinterface", swinterfaceSchema);

export default Swinterface;


