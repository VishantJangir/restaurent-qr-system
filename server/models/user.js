const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
  
    name:{type:String},
    email:{type:String},
    passwordHash:{type:String},
    isActive:{type:Boolean},
    refreshToken:{type:String}
})

module.exports=mongoose.model("User",userSchema)