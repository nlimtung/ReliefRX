const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
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
    }
);

let UserModel = mongoose.model('User', UserSchema); 
module.exports = UserModel;                           

