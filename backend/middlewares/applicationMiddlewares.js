const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));


module.exports = app;