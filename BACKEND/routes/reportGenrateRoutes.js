const express = require("express");
const router = express.Router();
const Product = require("../model/ReportGenerate");
const ReportGenerate = require("../model/ReportGenerate");
const { route } = require("./reportRoutes");
const reportsGenrateRouteController = require("../controllers/reportGenerateConroller");


//routes to execute backend functions in Reports Genrate Route controller
router.get("/", reportsGenrateRouteController.getAllReportsGenerate);
router.post("/", reportsGenrateRouteController.addReportsGenerate);
router.get("/:id", reportsGenrateRouteController.getById);
router.delete("/:id", reportsGenrateRouteController.deleteGenerateReports);

module.exports = router;