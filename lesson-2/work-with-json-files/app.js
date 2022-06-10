console.clear();
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

// invokeAction({action: "list"})
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V49"})
// invokeAction({action: "add", title: "Girl genius", author: "Foglio"})
// invokeAction({action: "updateById", id: "62a387be8ccdb336c00048d6", title: "Girl genius", author: "Phill Foglio"})
invokeAction({action: "removeById", id: "62a38a37f7f1c242b8181cd6"})