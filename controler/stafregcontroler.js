const { status } = require('init')
var stafregschema=require('../model/stafregschema')

var stafregisterdata=async(req,res)=>{
        const register=new stafregschema({
            stafname:req.body.stafname,
            Stafnumber:req.body.Stafnumber,
            stafemail:req.body.stafemail,
            stafpassword:req.body.stafpassword

        })
        await register.save()
        .then((data)=>{
            res.json({
                status:200,
                msg:"staf data saved"
            })
        })
        .catch((err)=>{
            res.json({
                status:400,
                msg:"data not saved"
            })
        })

}
const stafviewonelog=async(req,res)=>{
    const{stafemail,stafpassword}=req.body
    let data=await stafregschema.findOne({stafemail:stafemail})
    if(data){
        if(data.stafpassword==stafpassword){
            res.json({
                status:200,
                msg:"login sucess",
                data:data
            })
        }
        else{
            res.json({
                status:500,
                msg:"password is incorect"
            })
        }
    }else{
        res.json({
            status:500,
            msg:"email is incorect"
        })
    }
}
const stafprofile=(req,res)=>{
    const id=req.params.id
    stafregschema.findById(id)
    .then((data)=>{
        res.json({
            status:200,
            msg:"staf detail found",
            data:data

        })

    })
    .catch((err)=>{
        res.json({
            status:400,
            msg:"detail not found",
            err:err
        })
    })
}

const staffindprofile=(req,res)=>{
    const id=req.params.id
    stafregschema.findById(id)
    .then((data)=>{
        res.json({
            status:200,
            msg:"detail found",
            data:data

        })

    })
    .catch((err)=>{
        res.json({
            status:400,
            msg:"not found",
            err:err
        })
    })
}

const stafprofileupdate=(req,res)=>{
    const id=req.params.id
    const{stafname,Stafnumber,stafemail,stafpassword}=req.body
    stafregschema.findByIdAndUpdate(id,{stafname,Stafnumber,stafemail,stafpassword})
    .then((data)=>{
        res.json({
            status:200,
            msg:"profile updated",
            data:data
        })
    })
    .catch((err)=>{
        res.json({
            status:200,
            msg:"not updated",
            err:err
        })
    })

}
module.exports={stafregisterdata,stafviewonelog,stafprofile,staffindprofile,stafprofileupdate}