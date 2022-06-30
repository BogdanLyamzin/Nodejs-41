const jwt = require("jsonwebtoken");
require("dotenv").config();

const payload = {
    id: "62bc9375d0c4f4d528e96245"
}

const {SECRET_KEY} = process.env;

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const verifyResult = jwt.verify(token, SECRET_KEY);
    console.log(verifyResult);
} catch (error) {
    console.log(error.message);
}