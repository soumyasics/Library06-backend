var mongoose=require('mongoose')
var complientschema=new mongoose.Schema({
    registercomplient:String,
    corection:String
})
module.exports=new mongoose.model('studentcomplient',complientschema)