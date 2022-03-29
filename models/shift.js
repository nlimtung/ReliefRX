const mongoose = require('mongoose');
const {Schema} = mongoose;


const commentSchema = new mongoose.Schema(
    {

       comment: String,
       commenter: String, 
       commenterID: String, 
       commenterMail: String
    }, 
    {
        timestamps: true,      
    }
)

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
        compensation:Number, 
        additionalDetails: "String",
        assignedUserId: String,    
        user:  { type: Schema.Types.ObjectId, ref: 'User'},
        comment: [commentSchema]
        
    }, 
    {
  timestamps: true,
    }
);

let ShiftModel = mongoose.model('Shift', shiftSchema); 
module.exports = ShiftModel;                           

