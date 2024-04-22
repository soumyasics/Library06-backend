// const { title } = require('process')
const { log } = require('console');
var addbookschema=require('../model/addbookschema')
const multer=require('multer')

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "./upload");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage }).single("image");



var addbookdata=async(req,res)=>{
    const addbook=new addbookschema({
        title:req.body.title,
        auther:req.body.auther,
        isbn:req.body.isbn,
        image:req.file
    })
    addbook.save()
    .then((data)=>{
        res.json({
            msg:"book added ",
            data:data,
            status:200
        })
    })
    .catch((err)=>{
        console.log(err);
        res.json({
            msg:"not added",
            err:err,
            status:400
        })
    })
}

var findbookdata=(req,res)=>{
    addbookschema.find()
    .then((data)=>{
        res.json({
            msg:"find the book details",
            data:data,
            status:200
        })
    })
        .catch((err)=>{
            res.json({
                msg:"book details not found",
                err:err,
                status:400
            })
        })
   

}

module.exports={upload,addbookdata,findbookdata}