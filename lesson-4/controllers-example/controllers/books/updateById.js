const { createError } = require("../../helpers");

const books = require("../../models/books");

const { addSchema } = require("../../schemas/books");

const updateById = async (req, res) => {
    const { error } = addSchema.validate(req.body);
    if (error) {
        throw createError(400, error.message);
    }
    const { id } = req.params;
    const result = await books.updateById(id, req.body);
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = updateById;