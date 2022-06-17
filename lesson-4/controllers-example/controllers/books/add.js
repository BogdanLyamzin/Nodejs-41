const { createError } = require("../../helpers");

const books = require("../../models/books");

const { addSchema } = require("../../schemas/books");

const add = async (req, res) => {
    const { error } = addSchema.validate(req.body);
    if (error) {
        throw createError(400, error.message);
    }
    const result = await books.add(req.body);
    res.status(201).json(result);
}

module.exports = add;