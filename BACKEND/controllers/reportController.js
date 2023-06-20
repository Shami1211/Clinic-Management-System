const Reports = require("../model/Reports");

//Generate list of reports
const getAllReports = async (req, res, next) =>{
    let reports;
    try {
        reports = await Reports.find();
    } catch (err) {
        console.log(err);
    }

    if(!reports) {
        return res.status(404).json({message:"No Report found"})
    }
    return res.status(200).json({ reports })
};

//Search for a certian reports according to ID
const getById = async(req, res, next) => {
    const id = req.params.id;
    let reports;
      try {
        reports = await Reports.findById(id);
      }catch (err) {
        console.log(err);
      }
      if(!reports){
        return res.status(500).json({message:"No Report found"})
      }
      return res.status(201).json({ reports })
};



//Add new Reports
const addReports = async (req, res,next) => {
    const {patientID,patientName,testName,description,result,other} = req.body;

    let reports;

    try {
        reports = new Reports({
            patientID,
            patientName,
            testName,
            description,
            result,
            other
        });

        await reports.save();

        }catch(err){
            console.log(err);
        }

        if(!reports) {
            return res.status(500).json({message:'Unable to add!'})
        }
        return res.status(201).json({ reports });
}
    
//Update Reports details
const updateReports = async (req, res, next) => {

    const id = req.params.id;

    const { patientName,testName,description,result,other } = req.body;

    let reports;

    try {
      reports = await Reports.findByIdAndUpdate(id, {
            patientName,
            testName,
            description,
            result,
            other
      });
      reports = await reports.save();
    } catch (err) {
      console.log(err);
    }
    if (!reports) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ reports });
  };
  

//Delete Reports details
const deleteReports = async (req, res, next) => {
    const id = req.params.id;
    let reports;
    try {
      reports = await Reports.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!reports) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ reports });
  };


  //Used to fetch data according to patients ID
  const getByPatientID = async(req,res,next)=>{

    const regNo = req.params.id;
    let reports;

    try{
        reports = await Reports.find({patientID:`${regNo}`});
    }catch(err) {
        console.log(err);
    }

    if(!reports){
        return res.status(404).json({message:"There are no reports"});
    }
    return res.status(200).json({reports});
}

exports.getByPatientID = getByPatientID;
exports.getAllReports = getAllReports;
exports.addReports = addReports;
exports.getById = getById;
exports.updateReports = updateReports;
exports.deleteReports = deleteReports;