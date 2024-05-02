var mongoose=require('mongoose')
const { type } = require('os')
var hirebookschema=new mongoose.Schema({
    studentid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'studentregister'
    },
    bookid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'addbook'

    },
    date:Date
    

})
module.exports=new mongoose.model('hirebook',hirebookschema)