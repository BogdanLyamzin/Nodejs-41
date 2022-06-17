const express = require("express");

const booksRouter = require("./routes/api/books");

const app = express();

app.use((req, res, next)=> {
    console.log("First middleware");
    next();
})

app.use("/api/products", (req, res)=> {
    console.log("Products router");
    res.json([])
})

app.use("/api/books", booksRouter);

app.use((req, res)=> {
    res.status(404).json({
        message: "Not found"
    })
})

app.listen(3000);