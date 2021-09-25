const mongoose = require("mongoose");
const creatContactModel = require("./contact.model");

const db = {};
db.mongoose = mongoose;
db.Contact = creatContactModel(mongoose);

module.exports = db;