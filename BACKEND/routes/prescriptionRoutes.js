const express = require('express');
const Prescription = require('../model/Prescription');
const router = express.Router();
const prescriptionController = require("../controllers/prescriptionController")

//routes to execute backend functions in prescriptions controller

router.get("/viewAllPrescriptions",prescriptionController.getAllPrescriptions);
router.post("/addPrescriptions",prescriptionController.addPrescriptions);
router.get("/viewByPatientID/:patientRegNo",prescriptionController.getByPatientID);
router.delete("/deletePrescription/:id", prescriptionController.deletePrescription);

module.exports = router;
