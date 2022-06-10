const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const books = require("./books");

const invokeAction = async ({action, id, title, author}) => {
    switch (action) {
        case "list":
            const result = await books.getAll();
            console.log(result);
            break;
        case "getById":
            const book = await books.getById(id);
            console.log(book);
            break;
        case "add":
            const newBook = await books.add(title, author);
            console.log(newBook);
            break;
        case "updateById":
            const updateBook = await books.updateById(id, title, author);
            console.log(updateBook);
            break;
        case "removeById":
            const removeBook = await books.removeById(id);
            console.log(removeBook);
            break;
        default:
            console.log("Unknown action");
            break;
    }
}

const arr = hideBin(process.argv);
const {argv} = yargs(arr);
invokeAction(argv);
