const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/config');
const mongoose = require('mongoose');
const route=require('./router/employeeRouter');
const app = express();
mongoose.Promise = global.Promise;
console.log("server is running");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/',route);
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Employee Managemen. Take notes quickly. Organize and keep track of all your notes."});
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


