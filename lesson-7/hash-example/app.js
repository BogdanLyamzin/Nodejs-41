const bcrypt = require("bcryptjs");

const hashInvoke = async(password) => {
    const salt = await bcrypt.genSalt(10);
    // console.log(salt);
    const hashPassword = await bcrypt.hash(password, 10);
    // console.log(hashPassword);
    const compareResult = await bcrypt.compare("123457", hashPassword);
    console.log(compareResult);
}

hashInvoke("123456");