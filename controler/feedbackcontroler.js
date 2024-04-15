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
module.exports={studentfeedbackdata}
