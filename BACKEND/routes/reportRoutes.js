const express = require("express");
const router = express.Router();
const Reports = require("../model/Reports");
const reportsController = require("../controllers/reportController")

//routes to execute backend functions in Reports controller
router.get("/", reportsController.getAllReports);
router.get("/viewByRef/:id", reportsController.getById);
router.post("/", reportsController.addReports);
router.get("/:id", reportsController.getByPatientID);
router.put("/:id", reportsController.updateReports);
router.delete("/:id", reportsController.deleteReports);

module.exports = router;
