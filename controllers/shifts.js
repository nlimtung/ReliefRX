const ShiftModel = require('../models/shift.js'); 


async function create (req, res) {
  try { 
    console.log(req.user._id) 

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
    // console.log(req.user._id)
    let shifts = await ShiftModel.find({user: req.user._id})
    // console.log(shifts)
// 
    res.status(200).json(shifts)        
  }
  catch(err){
    res.status(400).json(err);

  }
}

async function shiftDetails(req, res) {
  // console.log(req.user._id) 
// 
  try{
  // console.log(req.params) 

    console.log ("hello")
    // console.log (req.params)
    let shifts = await ShiftModel.find({})
    res.status(200).json(shifts)        

  }
  catch(err){
    res.status(400).json(err);

  }
}

module.exports = {
    create, shiftIndex, shiftDetails
  }