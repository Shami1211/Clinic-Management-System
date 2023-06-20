const express = require("express");
const inventoryRouter = express.Router();
const Inventory = require("../model/Inventory")
const inventoryController = require("../controllers/inventoryController")

inventoryRouter.get("/", inventoryController.getAllItems);
inventoryRouter.post("/", inventoryController.addItem);
inventoryRouter.get("/:id", inventoryController.getById);
inventoryRouter.put("/:id", inventoryController.updateItem);
inventoryRouter.delete("/:id", inventoryController.deleteItem);

module.exports = inventoryRouter;