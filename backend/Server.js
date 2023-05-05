const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();
app.use(express.json())
app.use (cors())
const routes=require("./router/recipeRouter")
mongoose
    .connect(process.env.mongo_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));

    app.use(routes)

const port=5000
app.listen(port, () => console.log("Server running on port " + port));