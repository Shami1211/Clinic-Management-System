const express = require("express");
const router = express.Router();
const MemberAttendence = require("../model/MemberAttendence");
//const { route } = require("./patientRoutes");
const memberAttendenceController =  require("../controllers/member-attendence-controller");

//router.get("/",async(req,res,next) => {
    //This route will provide all of the member
   
//});

router.post("/add", memberAttendenceController.addMemberAttendence);
router.get("/", memberAttendenceController.getAllMemberAttendence);
router.delete("/deletememberattendence", memberAttendenceController.deleteAllMemberAttendence);

module.exports = router;

