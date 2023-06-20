const MemberAttendence = require("../model/MemberAttendence");

const addMemberAttendence = async (req, res, next) =>{
    const{nic,name,time,position} = req.body;
    let memberAttendence;
    try{
        memberAttendence = new MemberAttendence({
            nic,
            name,
            time,
            position
        });
     await memberAttendence.save();
    }catch (err) {
        console.log(err);
    }
    if (!memberAttendence){
        return res.status(500).json({message:'Unable To Add'})
    }
    return res.status(201).json({ imessage: "Member Added" });
};

const getAllMemberAttendence = async (req, res, next) => {
    let memberAttendence;
    try{
        memberAttendence = await MemberAttendence.find();
    } catch(err) {
        console.log(err);
    }

    if(!memberAttendence){
        return res.status(404).json({message:"NO staff members found"})
    }
    return res.status(200).json({memberAttendence});
};

const deleteAllMemberAttendence = async (req, res, next) => {
    let memberAttendence;
    try{
        memberAttendence = await MemberAttendence.deleteMany({})
    } catch(err) {
        console.log(err);
    }

    if(!memberAttendence){
        return res.status(404).json({message:"NO staff members found"})
    }
    return res.status(200).json({memberAttendence});
};

exports.addMemberAttendence = addMemberAttendence
exports.getAllMemberAttendence = getAllMemberAttendence
exports.deleteAllMemberAttendence = deleteAllMemberAttendence