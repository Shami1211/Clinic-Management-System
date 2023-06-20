const express = require("express");
const router = express.Router();
const Member = require("../model/Member");
const membersController =  require("../controllers/members-Controller");

router.get("/viewAllMembers", membersController.getAllMembers);
router.post("/addMember", membersController.addMember);
router.get("/getById/:id",membersController.getMemberById);
router.put("/updateMember/:id",membersController.updateMember);
router.delete("/deleteMember/:id",membersController.deleteMember);
module.exports = router;


//path
