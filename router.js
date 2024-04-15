var express=require("express")
var router=express.Router()

var registercontroler=require('./controler/registercontroler')
var feedbackcontroler= require('./controler/feedbackcontroler')

router.post('/registerdata',registercontroler.studentregisterdata)
router.post('/find',registercontroler.viewOne)
router.get('/profileview/:id',registercontroler.findstudentprofile)
router.get('/findprofileedit/:id',registercontroler.findeditprofile)
router.post('/editprofile/:id',registercontroler.findprofileupdate)
router.get('/welcomename/:id',registercontroler.findstudentname)


router.post('/studentfeedback',feedbackcontroler.studentfeedbackdata)
module.exports=router