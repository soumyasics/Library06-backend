var mongoose=require("mongoose")
var registerschema=new mongoose.Schema({
    studentname:String,
    studentnumber:Number,
    studentemail:String,
    studentpassword:String

})
module.exports=new mongoose.model('studentregister',registerschema)