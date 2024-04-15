var mongoose=require('mongoose')
var feedbackschema=new mongoose.Schema({
    studentname:String,
    studentnumber:Number,
    feedback:String
})
module.exports=new mongoose.model('studentfeedback',feedbackschema)