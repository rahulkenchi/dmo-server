const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    id: Number,
    userName: String,
    email: String,
    tenantName: String,
    createdDateTime: String,
    isDeleted: Boolean,
    isActive: Boolean,
})

module.exports = mongoose.model("userSchema", userSchema);