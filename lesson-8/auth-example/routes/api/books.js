const express = require("express");

const ctrl = require("../../controllers/books");

const {ctrlWrapper} = require("../../helpers");

const {authenticate, validation, isValidId} = require("../../middlewares");

const {schemas} = require("../../models/book");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", authenticate, validation(schemas.add), ctrlWrapper(ctrl.add));

router.put("/:id", isValidId, validation(schemas.add), ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", isValidId, validation(schemas.updateFavorite), ctrlWrapper(ctrl.updateFavorite));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));

module.exports = router;