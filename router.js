var express=require("express")
var router=express.Router()

var registercontroler=require('./controler/registercontroler')

router.post('/registerdata',registercontroler.studentregisterdata)
router.post('/find',registercontroler.viewOne)
router.get('/profileview/:id',registercontroler.findstudentprofile)
router.get('/findprofileedit/:id',registercontroler.findeditprofile)
router.post('/editprofile/:id',registercontroler.findprofileupdate)
module.exports=router