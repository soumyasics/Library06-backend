var express=require("express")
var db=require('./dbconection')

var myapp= express()

var bodyparser=require("body-parser")
myapp.use(bodyparser.json())
myapp.use(bodyparser.urlencoded({extended:false}))
myapp.use(express.static( `${__dirname}/upload`));


var cors=require("cors")
myapp.use(cors())

var router=require("./router")
myapp.use('/',router)

myapp.listen(5000,function(){
    console.log("conected");
})
