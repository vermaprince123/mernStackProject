const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const {ADMIN_EMAIL, ADMIN_PASSWORD,SESSION_SECRET} = process.env;
const verfyToken = async(req, res, next) => {
    try{
        const decoded = jwt.verify(req.query.token, SESSION_SECRET);
        if(decoded.email == ADMIN_EMAIL){
            next();
        }else{
            res.status(400).send({
                message: 'Invalid Token'
            });
        }
    }catch(error){
        res.status(401).send({
            message: 'Invalid Token'
        });
    }
}
module.exports = verfyToken;