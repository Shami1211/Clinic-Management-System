const SupplierMain = require("../model/Supplier");

const getAllSuppliers = async(req, res, next)=> {
    let suppliers;
    try{
        suppliers = await SupplierMain.find();
    }catch(err) {
        console.log(err);
    }

    if(!suppliers) {
        return res.status(404).json({message: "No suppliers found"});
    }
    return res.status(200).json({suppliers});
};

const getById = async (req, res, next)=> {
    const id = req.params.id;
    let supplier;
    try{
        supplier = await SupplierMain.findById(id);
    }catch(err) {
        console.log(err);
    }
    if(!supplier) {
        return res.status(404).json({message: "No supplier found"});
    }
    return res.status(200).json({supplier});
}



const addSupplier = async (req, res, next) => {
    const {supplierID, supplierName, company, stockCategory, email, contactNumber} = req.body
    let supplier;
    try{

        const existingSupplier = await SupplierMain.findOne({ supplierID });
        if (existingSupplier) {
            return res.status(409).json({ message: "Supplier already exists" });
        }

        supplier = new SupplierMain({
            supplierID,
            supplierName,
            company,
            stockCategory,
            email,
            contactNumber
        });
        await supplier.save();
    }catch(err) {
        console.log(err);
    }

    if(!supplier) {
        return res.status(500).json({message: "Unable to add"});
    }
    return res.status(201).json({imessage: "Supplier successfully added"});
};

const updateSupplier = async (req, res, next)=> {
    const id = req.params.id;
    const {supplierID, supplierName, company, stockCategory, email, contactNumber} = req.body;
    let supplier;
    try{
        supplier = await SupplierMain.findByIdAndUpdate(id, {
            supplierID,
            supplierName,
            company,
            stockCategory,
            email,
            contactNumber
        });
        supplier = await supplier.save();
    }catch(err) {
        console.log(err);
    }
    if(!supplier) {
        return res.status(404).json({message: "Unable to update"});
    }
    return res.status(200).json({message: "Supplier successfully updated"});
};

const deleteSupplier = async (req, res, next)=> {
    const id = req.params.id;
    let supplier;
    try{
        supplier = await SupplierMain.findByIdAndRemove(id);
    }catch(err) {
        console.log(err);
    }
    if(!supplier) {
        return res.status(404).json({message: "Unable to delete"});
    }
    return res.status(200).json({message: "Supplier successfully deleted"});
}

exports.getAllSuppliers = getAllSuppliers;
exports.addSupplier = addSupplier;
exports.getById = getById;
exports.updateSupplier = updateSupplier;
exports.deleteSupplier = deleteSupplier;