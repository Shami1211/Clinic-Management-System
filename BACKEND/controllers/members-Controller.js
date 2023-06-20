const Member = require("../model/Member");

//all members in the database
const getAllMembers = async (req, res, next) => {
    let members;
    try{
        members = await Member.find();
    } catch(err) {
        console.log(err);
    }

    if(!members){
        return res.status(404).json({message:"NO staff members found"})
    }
    return res.status(200).json({members});
};
//One member Details
const getMemberById = async(req, res, next) => {
    const id = req.params.id;
    let member;
    try{
        member = await Member.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!member){
        return res.status(404).json({message:"No member found"});

    }
    return res.status(200).json({member});

};

const getTODropdown = async(req, res, next) => {
    const id = req.params.id;
    let member;
    try{
        member = await Member.find();
    }catch(err){
        console.log(err);
    }
    if(!member){
        return res.status(404).json({message:"No member found"});

    }
    return res.status(200).json({member});

};


const addMember = async (req, res, next) =>{
    const{name,dob,nic,phonenumber,address,position,username,password} = req.body;
    let member;
    try{
        member = new Member({
            name,
            dob,
            nic,
            phonenumber,
            address,
            position,
            username,
            password,
        });
     await member.save();
    }catch (err) {
        console.log(err);
    }
    if (!member){
        return res.status(500).json({message:'Unable To Add'})
    }
    return res.status(201).json({ imessage: "Member Added" });
};

const updateMember = async (req, res, next) =>{
    const id = req.params.id;
    const{name,dob,nic,phonenumber,address,position,username,password} = req.body;
    let member;
    try{
        member = await Member.findByIdAndUpdate(id,{
            name,
            dob,
            nic,
            phonenumber,
            address,
            position,
            username,
            password
            
        });
        member = await member.save()
    } catch(err){
        console.log(err);
    }
    if (!member){
        return res.status(404).json({message:"Unable To update By this ID"})
    }
    return res.status(200).json({ member });
};

const deleteMember = async (req, res, next) => {
    const id = req.params.id;
    let member;
    try{
        member =await Member.findByIdAndRemove(id)

    }catch(err){
        console.log(err);
    }
    if(!member){
        return res.status(404).json({message: "Unable To Delete By this ID"});

    }
    return res.status(200).json({message:"member successfully Deleted"});

};

exports.getAllMembers = getAllMembers;
exports.addMember = addMember;
exports.getMemberById = getMemberById;
exports.updateMember = updateMember;
exports.deleteMember = deleteMember;
exports.getTODropdown = getTODropdown;

//this completed