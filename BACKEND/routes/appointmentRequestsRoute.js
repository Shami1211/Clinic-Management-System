const express = require("express");
const router = express.Router();
const appointmentRequestController = require("../controllers/appointmentRequestscontroller");

router.get("/", appointmentRequestController.getAllAppointmentRequests);
router.post("/addrequest", appointmentRequestController.addAppointmentRequest);
router.delete("/:id", appointmentRequestController.deleteAppointmentRequest);

module.exports = router;