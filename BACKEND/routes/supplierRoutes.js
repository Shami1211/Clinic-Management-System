const express = require("express");
const supplierRouter = express.Router();
const SupplierMain = require("../model/Supplier")
const supplierController = require("../controllers/supplierController")

supplierRouter.get("/", supplierController.getAllSuppliers);
supplierRouter.post("/", supplierController.addSupplier);
supplierRouter.get("/:id", supplierController.getById);
supplierRouter.put("/:id", supplierController.updateSupplier);
supplierRouter.delete("/:id", supplierController.deleteSupplier);

module.exports = supplierRouter;