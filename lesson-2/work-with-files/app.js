const fs = require("fs/promises");
// const fs = require("fs").promises;

const fileOPeration = async(filePath, action = "read", data) => {
    switch (action) {
        case "read":
            const text = await fs.readFile(filePath, "utf-8");
            console.log(text);
            // console.log(data);
            // const text = data.toString();
            // console.log(text);
            break;
        case "add":
            await fs.appendFile(filePath, data);
            break;
        case "replace":
            await fs.writeFile(filePath, data);
            break;
        default:
            break;
    }
}

// fileOPeration("./files/file.txt", "read");
// fileOPeration("./files/file.txt", "add", "\nНе плюйся - никто не носит золота во рту");
fileOPeration("./files/file.txt", "replace", "Если долго смотреть в бездну....");