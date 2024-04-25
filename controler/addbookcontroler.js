// const { title } = require('process')
const { log } = require('console');
var addbookschema=require('../model/addbookschema')
const multer=require('multer');
const { title } = require('process');

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

var viewonebook=(req,res)=>{
    const id =req.params.id
    addbookschema.findById(id)
    .then((data)=>{
        res.json({
            msg:"book detail viewed",
            data:data,
            status:200
        })
    })
    .catch((err)=>{
       res.json({
        msg:"not found book details",
        err:err,
        status:500
       })
    })

}

var bookdetailfound=(req,res)=>{
    const id=req.params.id
    addbookschema.findById(id)
    .then((data)=>{
      res.json({
        msg:"student detail found",
        data:data
      })
    })
      .catch((err)=>{
        res.json({
          msg:"not found student detail",
          err:err
      
      })
    })

}

const bookupdate=(req,res)=>{
    const id=req.params.id
    console.log(id);

    const{title,auther,isbn}=req.body
    console.log(req.body);

    addbookschema.findByIdAndUpdate(id,title,auther,isbn)
    .then((data)=>{
        res.json({
            msg:"book deatail updated",
            status:200,
            data:data
        })
    })
    .catch((err)=>{
        res.json({
            msg:"not updated",
            status:500,
            err:err
        })
    })
}

module.exports={upload,addbookdata,findbookdata,viewonebook,bookupdate, bookdetailfound}