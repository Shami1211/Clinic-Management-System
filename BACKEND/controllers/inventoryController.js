
const Inventory = require("../model/Inventory");

const getAllItems = async(req, res, next)=> {
    let items;
    try{
        items = await Inventory.find();
    }catch(err) {
        console.log(err);
    }

    if(!items) {
        return res.status(404).json({message: "No items found"});
    }
    return res.status(200).json({items});
};

const getById = async (req, res, next)=> {
    const id = req.params.id;
    let item;
    try{
        item = await Inventory.findById(id);
    }catch(err) {
        console.log(err);
    }
    if(!item) {
        return res.status(404).json({message: "No item found"});
    }
    return res.status(200).json({item});
}


const addItem = async (req, res, next) => {
    const {itemCode, itemName, itemCategory, unitPrice, quantity, remarks} = req.body
    let item;
    try{
        const existingItem = await Inventory.findOne({ itemCode });
        if (existingItem) {
            return res.status(409).json({ message: "Item already exists" });
        }

        item = new Inventory({
            itemCode,
            itemName,
            itemCategory,
            unitPrice,
            quantity,
            remarks
        });
        await item.save();
    }catch(err) {
        console.log(err);
        return res.status(500).json({message: "Unable to add"});
    }

    return res.status(201).json({message: "Item successfully added"});
};



const updateItem = async (req, res, next)=> {
    const id = req.params.id;
    const {itemCode, itemName, itemCategory, unitPrice, quantity, remarks} = req.body;
    let item;
    try{
        item = await Inventory.findByIdAndUpdate(id, {
            itemCode,
            itemName,
            itemCategory,
            unitPrice,
            quantity,
            remarks
        });
        item = await item.save();
    }catch(err) {
        console.log(err);
    }
    if(!item) {
        return res.status(404).json({message: "Unable to update"});
    }
    return res.status(200).json({message: "Item successfully updated"});
};

const deleteItem = async (req, res, next)=> {
    const id = req.params.id;
    let item;
    try{
        item = await Inventory.findByIdAndRemove(id);
    }catch(err) {
        console.log(err);
    }
    if(!item) {
        return res.status(404).json({message: "Unable to delete"});
    }
    return res.status(200).json({message: "Item successfully deleted"});
}

exports.getAllItems = getAllItems;
exports.addItem = addItem;
exports.getById = getById;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;