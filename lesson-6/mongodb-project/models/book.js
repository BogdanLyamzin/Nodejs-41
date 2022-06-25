const {Schema, model} = require("mongoose");
const Joi = require("joi");

const genres = ["fantastic", "love"];
const isbnRegexp = /^[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}$/;

const bookSchema = Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    genre: {
        type: String,
        required: true,
        enum: genres
    },
    isbn: {
        type: String,
        required: true,
        match: isbnRegexp,
        unique: true
    }
}, {versionKey: false, timestamps: true});

const add = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    favorite: Joi.bool(),
    genre: Joi.string().valueOf(...genres).required(),
    isbn: Joi.string().pattern(isbnRegexp).required()
})

const updateFavorite = Joi.object({
    favorite: Joi.bool().required()
});

const schemas = {
    add,
    updateFavorite,
}

const Book = model("book", bookSchema);
// categories => category
// mice => mouse

module.exports = {
    Book,
    schemas
};