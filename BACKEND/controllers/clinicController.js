const asyncHandler = require('express-async-handler')
const moment = require('moment')


const Clinic = require('../model/Clinic')
const Patient = require('../model/Patient')


// @desc Get Clinics
// @route GET /clinics
// @access Private/Public
const getClinics = asyncHandler(async(req,res)=>{
    const clinics = await Clinic.find()


    res.status(200).json(clinics)
})

// @desc Add Clinic
// @route POST /clinics
// @access Private/Public
const addClinic = asyncHandler(async(req,res)=>{
    const {name,day,startTime,endTime,location} = req.body;

    if(!name || !day || !startTime || !endTime || !location){
        res.status(400)
        throw new Error('Please add all the fields');
    }

    const sameClinics = await Clinic.find({
        location: location,
        day: day
    })
    let sameClinicData;
    if(sameClinics){
        const targetStartTime = moment(startTime, "h:mm A");
        let sameClinicFound = false;
        
        sameClinics.forEach(clinic => {
            const clinicStartTime = moment(clinic.startTime, "h:mm A");
            const clinicEndTime = moment(clinic.endTime, "h:mm A");
            if(targetStartTime.isSameOrAfter(clinicStartTime) && targetStartTime.isBefore(clinicEndTime)){
                sameClinicFound = true;
                sameClinicData = clinic;
            }
        });
        if(sameClinicFound){
            res.status(400).json({
                error: {
                    message : "Overlapping clinic has found!"
                },
                sameClinicData : sameClinicData
            });
        }else{
            const clinic = await Clinic.create({
                name: name,
                day: day,
                startTime: startTime,
                endTime: endTime,
                location: location,
            })
        
            res.status(200).json(clinic)
        }
        // res.status(200).json(sameClinics);
    }else{
        const clinic = await Clinic.create({
            name: name,
            day: day,
            startTime: startTime,
            endTime: endTime,
            location: location,
        })
    
        res.status(200).json(clinic)
    }
    

    
})

// @desc Update Clinic
// @route PUT /clinics/:id
// @access Private/Public
const updateClinic = asyncHandler(async(req,res)=>{
    const clinic = await Clinic.findById(req.params.id)

    if(!clinic){
        res.status(400)
        throw new Error('Clinic Not Found')
    }

    const updatedClinic = await Clinic.findByIdAndUpdate(req.params.id, req.body, {new: true,})

    
    res.status(200).json(updatedClinic)
})

// @desc Delete Clinic
// @route DELETE /clinics/:id
// @access Private/Public
const deleteClinic = asyncHandler(async(req,res)=>{
    const clinic = await Clinic.findById(req.params.id)

    if(!clinic){
        res.status(400)
        throw new Error('Clinic Not Found')
    }

    await Clinic.findByIdAndDelete(req.params.id)

    res.status(200).json({message : `Clinic ${req.params.id} Deleted`})
})

// @desc Get Patients by Clinic
// @route GET /clinics/patients/:clinic
// @access Private/Public
const getPatientsByClinic = asyncHandler(async(req,res)=>{
    const query = {clinic: req.params.clinic};
    const patientsInClinic = await Patient.find(query)

    if(patientsInClinic.length === 0){
        res.status(400)
        throw new Error('Patients are not available for this clinic')
    }
    
    res.status(200).json(patientsInClinic)
})

module.exports = {
    getClinics,
    addClinic,
    updateClinic,
    deleteClinic,
    getPatientsByClinic
}