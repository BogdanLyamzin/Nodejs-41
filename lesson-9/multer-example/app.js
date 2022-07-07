const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const {nanoid} = require("nanoid")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"))

const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 1024,
    }
});

const upload = multer({
    storage: multerConfig
})

const books = []

// upload.fields([{name: "image", maxCount: 8}])
// upload.array("image", 8)
const booksDir = path.join(__dirname, "public", "books")
app.post("/api/books", upload.single("image"), async(req, res) => {
    try {
        const {path: tempDir, originalname} = req.file;
        const resultDir = path.join(booksDir, originalname)
        await fs.rename(tempDir, resultDir);
        const image = path.join("books", originalname)
        const newBook = {
            ...req. body,
            id: nanoid(),
            image,
        }
        books.push(newBook);
        res.status(201).send(newBook);
    } catch (error) {
        await fs.unlink(file.path)
    }
});

app.get("/api/books", (req, res)=>{
    res.json(books)
})

app.listen(3000);


