const ReportGenerate = require("../model/ReportGenerate");


//Generate list of reports
const getAllReportsGenerate = async (req, res, next) =>{
    let reportsGenerate;
    try {
        reportsGenerate = await ReportGenerate.find();
    } catch (err) {
        console.log(err);
    }

    if(!reportsGenerate) {
        return res.status(404).json({message:"No ReportGnerate found"})
    }
    return res.status(200).json({ reportsGenerate })
};


//Search for a certian reports according to ID
const getById = async(req, res, next) => {
    const id = req.params.id;
    let reportGenerate;
      try {
        reportGenerate = await ReportGenerate.findById(id);
      }catch (err) {
        console.log(err);
      }
      if(!reportGenerate){
        return res.status(500).json({message:"No ReportGenerate found"})
      }
      return res.status(201).json({ reportGenerate })
};

//Add new Reports
const addReportsGenerate = async (req, res,next) => {
    
    const {name, age, gender, clinic, reportedDate, specimenNo, result, conclusion} = req.body

    let reportsGenerate;

   try{
      reportsGenerate = new ReportGenerate ({
            name,
            age,
            gender, 
            clinic,
            reportedDate,
            specimenNo, 
            result, 
            conclusion
      });
      await reportsGenerate.save();

    } catch (err){
        console.log(err);
    }

    if(!reportsGenerate) {
        return res.status(500).json({message:"unable to connect"})
    }
    return res.status(201).json({reportsGenerate});
}


//Delete Reports details
const deleteGenerateReports = async (req, res, next) => {
  const id = req.params.id;
  let reportGenerate;
  try {
    reportGenerate = await ReportGenerate.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!reportGenerate) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ reportGenerate });
};


exports.getAllReportsGenerate = getAllReportsGenerate;
exports.addReportsGenerate = addReportsGenerate;
exports.getById = getById;
exports.deleteGenerateReports = deleteGenerateReports;

