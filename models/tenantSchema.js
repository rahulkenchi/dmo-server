const mongoose = require("mongoose");
const tenantSchema = new mongoose.Schema({
    name: String,
    description: String,
    userid: String,
    email: String,
    password: String,
    databaseName: String,
    databaseDescription: String,
    lastlogin: String,
    type: String,
    id: Number,
})

module.exports = mongoose.model("tenantSchema", tenantSchema);