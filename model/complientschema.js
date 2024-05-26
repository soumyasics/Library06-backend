var mongoose=require('mongoose')
const { type } = require('os')
var complientschema=new mongoose.Schema({
    registercomplient:String,
    corection:String,
    studentid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'studentregister'
    }

})
module.exports=new mongoose.model('studentcomplient',complientschema)