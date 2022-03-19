const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema(
    {
        name: String,
        address: String, 
        city: String,
        date: Date,
        software:{
            type:String, 
            enum: ['Kroll', 'Nexus', 'Fillware', 'Healthwatch/Delta', 'Other']

        }, 
        compensation:Number
    }, 
    {
  timestamps: true,
    }
);

let ShiftModel = mongoose.model('Shift', shiftSchema); 
module.exports = ShiftModel;                           

