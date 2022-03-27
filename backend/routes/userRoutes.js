const express = require('express');
const routesPath = require('../utils/routesPath');
const { getAllUser, getUserById, createUser, updateUser, deleteUser, loginUser } = require('../controllers/userControllers');
const verfyToken = require('../middlewares/authMiddleware');
const router = express.Router();

const {GET_ALL_USERS,GET_USER_BY_ID,CREATE_USER,DELETE_USER, LOGIN, UPDATE_USER} = routesPath;


router.get(GET_ALL_USERS, getAllUser);
router.get(GET_USER_BY_ID, getUserById);
router.post(CREATE_USER, createUser);
router.put(UPDATE_USER, updateUser);
router.delete(DELETE_USER, deleteUser);
router.post(LOGIN, loginUser);


module.exports = router;