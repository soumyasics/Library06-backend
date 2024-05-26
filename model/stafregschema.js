var mongoose=require("mongoose")
var stafregschema=new mongoose.Schema({
    stafname:String,
    Stafnumber:Number,
    stafemail:String,
    stafpassword:String
})
module.exports=new mongoose.model('stafregister',stafregschema)