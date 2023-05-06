import { Schema,model } from "mongoose";
const department = new Schema({
  name :{
    type: String,
    rquired: true
  },
  code:{
    type: String,
    rquired: false,
  }, 
},{timestamps: true}); 

model('department',department);
const departmentmodel= model('department',department);
export default departmentmodel;

