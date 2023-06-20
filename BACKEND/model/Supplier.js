const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    supplierID: {
        type: String,
        required: true
     },
     supplierName: {
        type: String,
        required: true
     },
     company: {
        type: String,
        required: true
     },
     stockCategory: {
        type: String,
        required: true
     },
     email: {
        type: String,
        required: true
     },
     contactNumber: {
        type: String,
        required: true
     },

}, {collection: 'suppliers'});

module.exports = mongoose.model("SupplierMain", supplierSchema);