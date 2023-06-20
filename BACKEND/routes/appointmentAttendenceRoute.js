const express = require("express");
const router = express.Router();
const appointmentAttendenceController = require("../controllers/appointmentAttendenceController");

router.get("/", appointmentAttendenceController.getAllAppointmentAttendence);
router.post("/addattendence", appointmentAttendenceController.addAppointmentAttendence);
router.delete("/deleteAttendence", appointmentAttendenceController.deleteAllAttendence);

module.exports = router;