const { createError } = require("../../helpers");

const {Book} = require("../../models/book");

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = updateById;