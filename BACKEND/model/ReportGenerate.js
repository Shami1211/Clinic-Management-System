const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportGenerateSchema = new Schema ({

  //patient Details
  name: {
    type: String,
    required: true
  } ,
  
  age: {
    type: String,
    required: true
  } ,

  gender: {
    type: String,
    required: true
  } ,

  clinic: {
    type: String,
    required: true
  },

  //test details 
  reportedDate: {
    type: String,
    required: true
  } ,

  specimenNo: {
    type: String,
    required: true
  } ,
 
  result: {
    type: String,
    required: true
  } ,
  conclusion: {
    type: String,
    required: true
  } 
  


})

module.exports = mongoose.model("ReportGenerate",reportGenerateSchema);