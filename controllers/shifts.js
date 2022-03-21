const ShiftModel = require('../models/shift.js'); 


async function create (req, res) {
  try {
    await ShiftModel.create(req.body);
    ShiftModel.create ({user: req.user._id})

    console.log(req.body)

    res.status(200).json(req.body)
  }
  catch (err) {
    res.json(err);
  }
}

async function shiftIndex(req,res) {
  try{
    console.log (req.body)
    let shifts = await ShiftModel.find({})
    // console.log(shifts)
// 
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
    //  let projectId = req.get("obje")

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