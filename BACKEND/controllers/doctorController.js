const Doctor = require("../model/Doctor");


//rerive doctors
const getAllDoctors = async (req,res,next) => {
    let doctors;
    try{
        doctors = await Doctor.find();
    } catch (err) {
        console.log(err);
    }

    if (!doctors) {
        return res.status(404).json({ message: "No details found" });
    }
    return res.status(200).json({ doctors });
};

//get id and retrive this doctor
const getById = async(req, res, next) => {
    const id = req.params.id;
    let doctor;
    try{
        doctor = await Doctor.findById(id);
    }catch(err){
        console.log(err);
    }

    if (!doctor) {
        return res.status(404).json({ message: "No doctor found" });
    }
    return res.status(200).json({ doctor });
};


//add doctor variables
const addDoctor =async (req,res,next) => {
    const {name,dob,age,mobileNo,email,clinic,unit,specialization} = req.body;
    let doctor;
    try{
        doctor = new Doctor({
            name,
            dob,
            age,
            mobileNo,
            email,
            clinic,
            unit,
            specialization
            
        });
        await doctor.save();
    }catch(err){
        console.log(err);
    }

    if (!doctor){
        return res.status(500).json({message:"Unable To Add"});
    }
    return res.status(201).json({ doctor });
};

//update doctor variables
const updateDoctor = async(req, res, next) => {
    const id = req.params.id;
    const {name,dob,age,mobileNo,email,clinic,unit,specialization} = req.body;
    let doctor;
    try{
        doctor = await Doctor.findByIdAndUpdate(id,{
            name,
            dob,
            age,
            mobileNo,
            email,
            clinic,
            unit,
            specialization
            
        });
        doctor = await doctor.save()
    }catch(err){
        console.log(err);
    }
    if (!doctor){
        return res.status(404).json({message:"Unable To Update By this ID"});
    }
    return res.status(200).json({ doctor });
};

//delect doctor details
const deleteDoctor = async (req, res, next) => {
    const id = req.params.id;
    let doctor;
    try {
        doctor = await Doctor.findByIdAndRemove(id)
    } catch (err) {
        console.log(err);
    }
    if (!doctor){
        return res.status(404).json({message:"Unable To Delete By this ID"});
    }
    return res.status(200).json({ message:'The doctor Successfully Removed' });

};

exports.getAllDoctors = getAllDoctors;
exports.addDoctor = addDoctor;
exports.getById = getById;
exports.updateDoctor = updateDoctor;
exports.deleteDoctor = deleteDoctor;
