const userSchemas = require('../schema/userSchema');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const session = require('express-session');
dotenv.config();

const {ADMIN_EMAIL, ADMIN_PASSWORD,SESSION_SECRET} = process.env;


const createAuthToken = async(key) => {
    try{
        return jwt.sign({
            email: key
        }, SESSION_SECRET, {
            expiresIn: '1h'
        });
     }catch(error){
         return error;
     }
}

const loginUser = async(req, res) => {
    const jwtToken =  await createAuthToken(req.body.email);
    session.username = jwtToken
    if(req.body.email==ADMIN_EMAIL && req.body.password == ADMIN_PASSWORD){
      const userNameFromDb =  await userSchemas.findOne({ email: req.body.email});
      const passwordFromDb = await userSchemas.findOne({ password: req.body.password});
      if(userNameFromDb && passwordFromDb){
         res.status(200).send("SUCCESS");
      }else{
        res.status(400).send('User not found');
     }
     }else{
        res.status(400).send('User not found');
    }
}


const getAllUser = async(req, res) => {
    const getUserDataFromDb = await userSchemas.find({});
    res.send(getUserDataFromDb);
}


const getUserById = async(req, res) => {    
    const getParticularUserDataFromDb = await userSchemas.findOne({
        'email': req.params.email
    });
    res.status(200).send({
        message: 'SUCCESS',
        data: getParticularUserDataFromDb
    });
}


const createUser = async(req, res) => {
    const email = req.body.email;
    const userNameFromDb =  await userSchemas.findOne({ email: email});
    if(userNameFromDb){
        res.status(400).send({
            message: 'Failure',
        });
    }else{
    if(validator.isEmail(req.body.email) && validator.isMobilePhone((req.body.phone).toString(), 'en-IN')){
        const createParticularUserDataInDb = await userSchemas.create(req.body);
        res.status(200).send({
          message: 'SUCCESS',
          data: createParticularUserDataInDb

    });
    }else{
        res.status(400).send({
            message: 'Failure',
        });
    }   
    
}
}


const updateUser = async(req, res) => {
    const email = req.params.email;
    const userNameFromDb =  await userSchemas.findOne({ email: email});
     if(userNameFromDb){
      const updateParticularUserDataInDb = await userSchemas.updateOne({email: req.params.email }, req.body);
      res.send({
         message: 'SUCCESS',
         data: updateParticularUserDataInDb
      });
    }else{
        res.status(400).send({
            message: 'Failure',
        });
    }
}


const deleteUser = async(req, res) => {
    const email = req.params.email;
    const userNameFromDb =  await userSchemas.findOne({ email: email});
    if(userNameFromDb){
    const deleteParticularUserDataInDb = await userSchemas.deleteOne({ email: req.params.email });
    res.status(200).send({
        message: 'SUCCESS',
        data: deleteParticularUserDataInDb
    });
   }else{
     res.status(400).send({
        message: 'Failure',
     });
}
}


module.exports = {
    loginUser,
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}