const express = require("express");

const ctrl = require("../../controllers/auth");

const {ctrlWrapper} = require("../../helpers");

const {validation, authenticate, upload} = require("../../middlewares");

const {schemas} = require("../../models/user");

const router = express.Router();

// signup
router.post("/register", validation(schemas.register), ctrlWrapper(ctrl.register))

// signin
router.post("/login", validation(schemas.login), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));

module.exports = router;