const express = require("express");
const router = express.Router();
const Doctor = require("../model/Doctor")
const doctorCotroller = require("../controllers/doctorController");

router.get("/", doctorCotroller.getAllDoctors);
router.post("/", doctorCotroller.addDoctor);
router.get("/:id",doctorCotroller.getById);
router.put("/:id",doctorCotroller.updateDoctor);
router.delete("/:id",doctorCotroller.deleteDoctor);

module.exports = router;