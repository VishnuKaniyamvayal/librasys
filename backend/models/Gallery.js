import mongoose from "mongoose";

const gallery = new mongoose.Schema({
    ImageUrl:{
        type:String,
        require:true
    },
    ImageName:{
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

export default mongoose.model( "gallery" , gallery)