const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000; // import PORT nmber 
const cors = require('cors'); //imports cors ( Cross Origin Resource Sharing) which facilitates/enables request from other  domains.
const express = require('express') //import express  npm package to build server
const app = express();
const connectDB = require('./db');
const router = require('./routes');

app.use(cors());  // use cors as middleware
app.use(express.json()); //use express json middleware
app.use(express.urlencoded({ extended: false }));
connectDB();

app.use("/api", router);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`SERVER LISTENING ON PORT ${PORT}`)
})