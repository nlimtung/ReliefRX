const ShiftModel = require('../models/shift.js'); 


async function create (req, res) {
  try { 

    let createdShift= await ShiftModel.create({
      user: req.user._id, 
      name:req.body.name,
      city:req.body.city,
      address:req.body.address,
      software: req.body.software, 
      compensation: req.body.compensation,
      date:req.body.date
    });


    res.status(200).json(createdShift)
  }
  catch (err) {
    res.json(err);
  }
}

async function shiftIndex(req, res) {
  try{
    let shifts = await ShiftModel.find().populate('user').exec()

    res.status(200).json(shifts)        
  }
  catch(err){
    res.status(400).json(err);

  }
}

async function shiftDetails(req, res) {

  try{

    let shifts = await ShiftModel.find({user:req.user._id})
    res.status(200).json(shifts)        

  }
  catch(err){
    res.status(400).json(err);

  }
}

// async function myPostIndex (req, res) {
//   try{
//     console.log("myposts")

//     let shifts = await ShiftModel.find()
//     res.status(200).json(shifts)        
//   }
//   catch(err){
//     res.status(400).json(err);

//   }
// }


async function shiftDelete (req, res) {
  try{

    
    let deleteShifts = await ShiftModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteShifts)        

  }
  catch(err){
    res.status(400).json(err)
  }
}

async function addComment (req, res){
  try{
    console.log(req.body.id)
    console.log (req.body.comment)

    let shift = await ShiftModel.findById(req.body.id)
    let newComment = {
      comment: req.body.comment
    }

    shift.comment.push(newComment)
    shift.save()
    res.status(200).json(shift)
  }
  catch(err){
    res.status(400).json(err)

  }
}

module.exports = {
    create, shiftIndex, shiftDetails,shiftDelete, addComment
    //  myPostIndex
  }