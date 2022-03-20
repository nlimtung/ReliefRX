const ShiftModel = require('../models/shift.js'); 


async function create (req, res) {
  try {
    await ShiftModel.create(req.body)
    res.status(200).json(req.body)
  }
  catch (err) {
    res.json(err);
  }
}

async function shiftIndex(req,res) {
  try{
    let shifts = await ShiftModel.find({})
    res.status(200).json(shifts)        
  }
  catch(err){
    res.status(400).json(err);

  }
}

async function shiftDetails(req, res) {
  try{
    console.log ("hello")
     console.log(req.body)
    // console.log (params)


    let shifts = await ShiftModel.find({}).populate().exec()
    res.status(200).json(shifts)        

  }
  catch(err){
    res.status(400).json(err);

  }
}

module.exports = {
    create, shiftIndex, shiftDetails
  }