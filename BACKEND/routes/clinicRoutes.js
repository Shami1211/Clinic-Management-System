//Unprotected routes | Direct Access
const express = require('express')
const router = express.Router()
const {getClinics,addClinic,updateClinic,deleteClinic,getPatientsByClinic} = require('../controllers/clinicController')

const uriPath = '/'
const clinicPatientUriPath = '/patients/'

router.route(uriPath).get(getClinics).post(addClinic)
router.route(uriPath+':id').put(updateClinic).delete(deleteClinic)

router.route(clinicPatientUriPath+':clinic').get(getPatientsByClinic)


module.exports = router


//Protected Routes | Token Authentication
// const express = require('express')
// const router = express.Router()
// const {getClinics,addClinic,updateClinic,deleteClinic} = require('../controllers/ClinicController')

// const protect = require('../middleware/authMiddleware')

// const uriPath = '/'

// router.route(uriPath).get(protect('admin'),getClinics).post(protect('admin'), addClinic)

// router.route(uriPath+':id').put(updateClinic).delete(deleteClinic)


// module.exports = router