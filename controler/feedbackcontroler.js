var feedbackschema=require('../model/Feedbackschema')

var studentfeedbackdata=async(req,res)=>{
    const feedback=new feedbackschema({
        studentname:req.body.studentname,
        studentnumber:req.body.studentnumber,
        feedback:req.body.feedback
    })
    await feedback.save()
    .then((data)=>{
        res.json({
            msg:"studentfeedback saved"
        })
    })
    .catch((err)=>{
        res.json({
            msg:"not saved"
        })
    })
}
const feedbackdata=async(req,res)=>{
    feedbackschema.find()
    .then((data)=>{
        res.json({
            msg:"reedfeedback",
            status:200,
            data:data

        })
    })
    .catch((err)=>{
        res.json({
            msg:"notfound feedbacks",
            status:400,
            
        })
    })

}
module.exports={studentfeedbackdata,feedbackdata}
