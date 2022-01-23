const express = require("express");
const bodyParser = require('body-parser');

// .Env
const dotenv = require('dotenv');
dotenv.config();

// init mongoose db
const mongoose = require('mongoose');

// init express
const app = express();

// config BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Connect function
connect_server = function(){
    const PORT = process.env.PORT || 8080
    app.listen(PORT, ()=> {
        console.log(`Server running in PORT: ${PORT}\b\n`);
    });
}

// Routes
const smartphone = require('./routes/smartphone.route');

// API's
app.use('/api/v1/smartphone', smartphone);

// db connection
const MONGO_URI = process.env.MONGOOSE_URI
        .replace("{username}", process.env.MONGOOSE_USERNAME)
        .replace("{password}", process.env.MONGOOSE_PASSWORD)
        .replace("{hostname}", process.env.MONGOOSE_HOSTNAME)
        .replace("{database}", process.env.MONGOOSE_DATABASE);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => connect_server())
    .catch((err) => console.log(err))