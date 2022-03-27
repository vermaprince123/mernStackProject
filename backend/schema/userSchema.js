const mongooses = require('../database/connectToMongo');

const userSchema = new mongooses.Schema({  
    firstName:{type:String, required:true},
    lastName:String,
    email:{type:String, required:true},
    password:{type:String, required:true},
    phone:{type:Number, required:true},
    gender:{type:String, required:true},
    country:{type:String, required:true}
});


const userSchemas=  mongooses.model('userDetails', userSchema);
module.exports = userSchemas;