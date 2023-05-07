import { Schema,model } from "mongoose";
const subject = new Schema({
  name :{
    type: String,
    rquired: true
  },
  code:{
    type: String,
    rquired: false,
  }, 
  department: {
    type:Schema.Types.ObjectId,
    required: false,
    ref: 'department'
  }
},{timestamps: true}); 

export default model('subject',subject);