var express=require("express")
var router=express.Router()

var registercontroler=require('./controler/registercontroler')
var feedbackcontroler= require('./controler/feedbackcontroler')
var complientcontroler=require('./controler/complientcontroler')
var addbookcontroler=require('./controler/addbookcontroler')
var hirebookcontroler=require('./controler/hirebookcontroler')

router.post('/registerdata',registercontroler.studentregisterdata)
router.post('/find',registercontroler.viewOne)
router.get('/profileview/:id',registercontroler.findstudentprofile)
router.get('/findprofileedit/:id',registercontroler.findeditprofile)
router.post('/editprofile/:id',registercontroler.findprofileupdate)
router.get('/welcomename/:id',registercontroler.findstudentname)


router.post('/studentfeedback',feedbackcontroler.studentfeedbackdata)

router.post('/studentcomplient',complientcontroler.studentcomplientdata)

router.post('/addbook',addbookcontroler.upload,addbookcontroler.addbookdata)
router.get('/findbook',addbookcontroler.findbookdata)
router.get('/viewonebookdetail/:id',addbookcontroler.upload,addbookcontroler.viewonebook)
router.get('/findbook/:id',addbookcontroler.bookdetailfound)
router.post('/onebookupdate/:id',addbookcontroler.bookupdate)

router.post('/hirebookdata/:studentid',hirebookcontroler.hirebook)
router.get('/hirebookfind/:studentid',hirebookcontroler.findhirebook)




module.exports=router