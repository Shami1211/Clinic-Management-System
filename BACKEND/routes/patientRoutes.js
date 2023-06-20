const express = require('express');
const Patient = require('../model/Patient');
const router = express.Router();
const patientsController = require("../controllers/patientController");

//routes to execute backend functions in patients controller
router.get("/viewAll", patientsController.getAllPatients);
router.post("/addPatients",patientsController.addPatients);
router.get("/viewPatient/:id",patientsController.getById);
router.put("/updateDetails/:id",patientsController.updateDetails);
router.delete("/deletePatient/:id",patientsController.deletePatient);
router.get("/getByRegDate/:registrationDate", patientsController.getByRegDate);
router.get("/getByRegName/:registrationName", patientsController.getByRegName);




module.exports = router; 