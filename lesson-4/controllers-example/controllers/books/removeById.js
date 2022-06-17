const { createError } = require("../../helpers");

const books = require("../../models/books");

const removeById = async (req, res) => {
    const { id } = req.params;
    const result = await books.removeById(id);
    if (!result) {
        throw createError(404)
    }
    res.json({
        message: "Book deleted"
    })
}

module.exports = removeById;