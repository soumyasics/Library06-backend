var complientschema=require('../model/complientschema')

var studentcomplientdata=async(req,res)=>{
    const complient=new complientschema({
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
module.exports={studentcomplientdata}