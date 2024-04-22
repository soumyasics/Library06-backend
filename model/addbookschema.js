var mongoose=require("mongoose")
var addbookschema=new mongoose.Schema({
    title:String,
    auther:String,
    isbn:Number,
    image:Object,
    
})
module.exports=new mongoose.model('addbook',addbookschema)