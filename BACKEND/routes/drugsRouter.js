const express = require("express");
const router = express.Router();
const Drugs = require("../model/Drugs")
const drugsConteoller = require("../controllers/drugController")

//routes to execute backend functions in Drug controller
router.get("/viewAllDrugs",drugsConteoller.getAllDrugs);
router.post("/",drugsConteoller.addDrugs) ;
router.get("/:Id",drugsConteoller.getById);
router.put("/:id",drugsConteoller.updateDrugs);
router.delete("/:id",drugsConteoller.deleteDrugs);
 


module.exports = router;