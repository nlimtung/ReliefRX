const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {
          type: String,
          unique: true,
          trim: true, // trims whitespace if your user types something like " alex@123.com " into "alex@123.com"
          lowercase: true,
          required: true
        },
        password: {
          type: String,
          trim: true,
          minLength: 3,
          required: true
        }
    }, 
    {
  timestamps: true,
  
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }}

    }
);

let UserModel = mongoose.model('User', userSchema); 
module.exports = UserModel;                           

