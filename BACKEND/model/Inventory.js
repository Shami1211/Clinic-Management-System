const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
     itemCode: {
        type: String,
        required: true
     },
     itemName: {
        type: String,
        required: true
     },
     itemCategory: {
        type: String,
        required: true
     },
     unitPrice: {
        type: String,
        required: true
     },
     quantity: {
        type: Number,
        required: true
     },
     remarks: {
        type: String
     }

}, {collection: 'items'});

module.exports = mongoose.model("Inventory", inventorySchema);
