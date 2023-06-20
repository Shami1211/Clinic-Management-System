const Drugs = require("../model/Drugs");


//Generate list of drugs
const getAllDrugs = async(req, res, next) =>{
    let drugs;

    try{
       drugs = await Drugs.find();
    } catch(err){
        console.log(err);
    }

    if(!drugs){
        return res.status(404).json({message:"No Drugs Found"})
    }
    return res.status(200).json({drugs})

};

//Search for a certian drugs according to ID
const getById = async (req, res, next) =>{
    const id= req.params.Id;
    let drug;
    try{
        drug= await Drugs.findById(id);
    }
    catch (err){
        console.log(err);
    }
    if(!drug){
        return res.status(500).json({message: "No Drugs Found "})
    }
    return res.status(201).json({ drug })


};

//Add new Drugs
const addDrugs = async (req, res, next) =>{

    const{drugsName,drugsExpiredDate,drugsCetagory,drugsMadeDate,drugsQuantity,drugsDescription,drugsAvailable} = req.body;
    
    let drugs;
    try{
        drugs = new Drugs({
            drugsName,
            drugsExpiredDate,
            drugsCetagory,
            drugsMadeDate,
            drugsQuantity,
            drugsDescription,
            drugsAvailable

        });
        await drugs.save();

    }
    catch (err){
        console.log(err);
    }

    if(!drugs){
        return res.status(500).json({message: "Unable To Add "})
    }
    return res.status(201).json({ drugs })

}

//Update drugs details
const updateDrugs = async (req, res, next) =>{
    const id = req.params.id;

    const{drugsName,drugsExpiredDate,drugsCetagory,drugsMadeDate,drugsQuantity,drugsDescription,drugsAvailable} = req.body;

    let drugs;
    try{
        drugs = await Drugs.findByIdAndUpdate(id, {
            drugsName,
            drugsExpiredDate,
            drugsCetagory,
            drugsMadeDate,
            drugsQuantity,
            drugsDescription,
            drugsAvailable

        });
        drugs = await drugs.save()

    } catch (err){
        console.log(err);
    }
    if(!drugs){
        return res.status(404).json({message: "Unable To Update "})
    }
    return res.status(200).json({ drugs })
}


//delete drugs from system
const deleteDrugs = async(req, res, next) =>{
    const id = req.params.id;
    let drugs;

    try{
        drugs = await Drugs.findByIdAndRemove (id);
    }catch (err){
        console.log(err);
    }
    if(!drugs){
        return res.status(404).json({message: "Unable To Delete "});
    }
    return res.status(200).json({ drugs });


};


exports.getAllDrugs = getAllDrugs;
exports.addDrugs =addDrugs;
exports.getById = getById;
exports.updateDrugs = updateDrugs;
exports.deleteDrugs = deleteDrugs;