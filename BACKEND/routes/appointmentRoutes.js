const express = require("express");
const router = express.Router();
const Appointment = require("../model/Appointments");
const appointmentController = require("../controllers/appointmentController");

router.get("/", appointmentController.getAllAppointments)
router.post("/", appointmentController.addAppointment);
router.get("/:patient_id", appointmentController.getById);
router.get("/scaned/:patient_id", appointmentController.getBySystemId);
router.put("/:patient_id", appointmentController.updateAppointment);
router.delete("/:patient_id", appointmentController.deleteAppointment);
router.get('/attendance/:appoinment_date',appointmentController.getDateToReport);

module.exports = router;