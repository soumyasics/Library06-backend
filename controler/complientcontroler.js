var complientschema=require('../model/complientschema')

var studentcomplientdata=async(req,res)=>{
    const complient=new complientschema({
        studentid:req.params.studentid,
        registercomplient:req.body.registercomplient,
        corection:req.body.corection
    })
    await complient.save()
    .then((data)=>{
        res.json({
            msg:"complient registerd"
        })
    })
    .catch((err)=>{
        res.json({
            msg:"not registered"
        })
    })
}
var readcomplientdata=(req,res)=>{
   
    complientschema.find().populate('studentid').exec()
    .then((data)=>{
        res.json({
            msg:"read complaint",
            data:data,
            status:200
        })
    })
    .catch((err)=>{
        res.json({
            msg:"cannot get complaints",
            err:err,
            status:400
        })
    })

    
}
module.exports={studentcomplientdata,readcomplientdata}