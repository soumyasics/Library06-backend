const { status } = require('init')
const hirebookschema = require('../model/hirebookschema')

var hirebook = async (req, res) => {
    const data=await hirebookschema.find({
        studentid: req.params.studentid,
        bookid: req.body.bookid
    })
    if(data.length>0){
            res.json({
            status:200,
            msg:"already hired",
            data:data

            
        })
        

    }else{
     const hirebookdetailsave = new hirebookschema({
        studentid: req.params.studentid,
        bookid: req.body.bookid,
        date: new Date()

    })
    await hirebookdetailsave.save()
        .then((data) => {
            res.json({
                status: 200,
                msg: "book borrowed",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 400,
                msg: "not saved",
                err: err
            })
        })
    }
}

var findhirebook = (req, res) => {
    const studentid = req.params.studentid

    hirebookschema.find({ studentid: studentid }).populate('bookid').exec()


        .then((data) => {

            res.json({
                msg: "hire book details",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                msg: "not found",
                err: err
            })
        })
}

module.exports = { hirebook, findhirebook }


