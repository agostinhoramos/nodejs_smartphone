const express = require("express");
const router = express.Router();

// import controller
const smartphone_controller = require("../controllers/smartphone.controller");

router.post('/create', smartphone_controller.create);
router.get("/retrieve/:_id", smartphone_controller.retrieve)
router.put("/update/:_id", smartphone_controller.update)
router.delete("/delete/:_id", smartphone_controller.delete)

module.exports = router;