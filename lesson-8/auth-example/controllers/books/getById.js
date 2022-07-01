const { createError } = require("../../helpers");

const {Book} = require("../../models/book");

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await Book.findById(id);
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = getById;