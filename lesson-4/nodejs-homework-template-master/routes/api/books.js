const express = require("express");
const Joi = require("joi");

const books = require("../../models/books");

const {createError} = require("../../helpers");

const router = express.Router();

const bookAddSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required()
})

/*
1. Получение всего списка книг.
2. Получение одной книги по id.
3. Добавление книги.
4. Обновление книги по id.
5. Удаление книги по id.
*/

router.get("/", async (req, res, next)=> {
    try {
        const result = await books.getAll();
        res.json(result);
    } catch (error) {
        next(error);
        // const {status = 500, message = "Server error"} = error;
        // res.status(status).json({
        //     message
        // })
    }
});

router.get("/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const result = await books.getById(id);
        if(!result) {
            throw createError(404);
            // const error = new Error("Not found");
            // error.status = 404;
            // throw error;
            // res.status(404).json({
            //     message: "Not found"
            // });
            // return;
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.post("/", async(req, res, next)=> {
    try {
        const {error} = bookAddSchema.validate(req.body);
        if(error){
            throw createError(400, error.message);
        }
        const result = await books.add(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
})

router.put("/:id", async(req, res, next)=> {
    try {
        const {error} = bookAddSchema.validate(req.body);
        if(error){
            throw createError(400, error.message);
        }
        const {id} = req.params;
        const result = await books.updateById(id, req.body);
        if(!result){
            throw createError(404);
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
})

router.delete("/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const result = await books.removeById(id);
        if(!result) {
            throw createError(404)
        }
        // res.status(204).json({
        //     message: "Book deleted"
        // })
        res.json({
            message: "Book deleted"
        })
    } catch (error) {
        next(error);
    }
})

module.exports = router;