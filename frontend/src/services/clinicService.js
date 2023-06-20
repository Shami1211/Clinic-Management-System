import axios from 'axios'
//import authHeader from './authHeader'

const API_URL = 'http://localhost:5000/clinics';

//Get Clinics
const getAllClinics = () =>{
    return axios.get(API_URL)
}

//Create clinic
const createClinic = (clinicData)=>{
    return axios.post(API_URL,clinicData)
}

//Update Clinic
const updateClinic = (id,clinicData) =>{
    return axios.put(API_URL + `/${id}`,clinicData)
}

//Delete clinic
const deleteClinic = (id) => {
    return axios.delete(API_URL + `/${id}`)
}

//Get Patients by clinic
const getPatientsByClinic = (clinic)=>{
    return axios.get(API_URL + `/patients/${clinic}`)
}

const ClinicService = {
    getAllClinics,
    createClinic,
    updateClinic,
    deleteClinic,
    getPatientsByClinic
}

export default ClinicService

