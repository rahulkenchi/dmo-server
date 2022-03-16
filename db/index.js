const mongoose = require("mongoose");
const db = process.env.DATABASE_URL || "mongodb://localhost:27017/test123";

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true });
        console.log(`Database connect at ${db}`);
    }
    catch (err) {
        console.log(err.message)
    }
}

module.exports = connectDB;