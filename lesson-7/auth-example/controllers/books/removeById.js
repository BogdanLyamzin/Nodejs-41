const { createError } = require("../../helpers");

const {Book} = require("../../models/book");

const removeById = async (req, res) => {
    const { id } = req.params;
    const result = await Book.findByIdAndRemove(id);
    if (!result) {
        throw createError(404)
    }
    res.json({
        message: "Book deleted"
    })
}

module.exports = removeById;