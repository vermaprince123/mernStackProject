const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const {MONGO_HOST, MONGO_PORT,MONGO_DB} = process.env;
const mongoDbUrl = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;


mongoose.connect(mongoDbUrl, {
    useNewUrlParser: true,
}).then(()=>{console.log("connected to mongoDb")}).catch(error=>{console.log("error at mongoDb connection: ", error)});

module.exports = mongoose;