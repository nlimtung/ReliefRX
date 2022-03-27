const UserModel = require('../models/user');
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcrypt'); 

const SALT_ROUNDS = 6;

async function create(req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
    let user = await UserModel.create({name: req.body.name, email:req.body.email, password:hashedPassword});
    const token = jwt.sign({ user }, process.env.JWT_SECRET,{ expiresIn: '24h' });
    res.status(200).json(token); 
  } catch (err) {
    res.status(400).json("bad credentials");
  }
}

async function login(req, res) {
  try {
    const email = req.body.email;
    const challengePassword = req.body.password;
    const user = await UserModel.findOne({email});

    const invalidPassword = !(await bcrypt.compare(challengePassword, user.password))

    if (invalidPassword) throw new Error()
    console.log("hello")

    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '24h' })
    res.status(200).json(token);
  } catch (err){
    res.status(400).json(err);
  }
}
async function details (req, res) {
  try{
    const user = await UserModel.find({_id: req.user._id});
    console.log(user)
    res.status(200).json(user)
  }
  catch(err){
    res.status(400).json(err);

  }

}



module.exports = {
  create,
  login, 
  details, 
 
};