import mongoose from "mongoose";

const configSchema = new mongoose.Schema({
    ImageUrl:{
        type:String,
        require:true
    },
    Uploadedby:{
        type:String,
    },
},
{
    timestamps:true
})

export default mongoose.model( "Config" , configSchema)