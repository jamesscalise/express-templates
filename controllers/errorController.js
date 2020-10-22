"use strict";
const httpStatus = require("http-status-codes")


exports.logErrors= (error, req, res, next) => {
    console.log("AAAH")
    console.log(error.stack);
    next(error);
}

exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | THe page does not exist!`)
};

exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occured: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is having a problems!`)
}
