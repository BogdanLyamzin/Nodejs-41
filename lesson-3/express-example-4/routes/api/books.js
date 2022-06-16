const express = require("express");

const books = require("../../data/books");

const router = express.Router();

router.get("/", (req, res)=> {
    res.json(books);
});

router.get("/:id", (req, res)=> {
    const {id} = req.params;
    const book = books.find(item => item.id === id);
    if(!book){
        res.status(404).json({
            message: "Not found"
        });
        return;
    };
    res.json(book)
});

router.post("/", (req, res)=> {
    books.push(req.body);
    res.json(books)
})

module.exports = router;