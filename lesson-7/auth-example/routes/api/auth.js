const express = require("express");

const ctrl = require("../../controllers/auth");

const {ctrlWrapper} = require("../../helpers");

const {validation} = require("../../middlewares");

const {schemas} = require("../../models/user");

const router = express.Router();

// signup
router.post("/register", validation(schemas.register), ctrlWrapper(ctrl.register))

// signin
router.post("/login", validation(schemas.login), ctrlWrapper(ctrl.login));

module.exports = router;