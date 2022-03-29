import axios from 'axios';

const loginRoutes = (queryParms) => axios.post('http://localhost:2001/api/login', queryParms);
const getAllUsers = () => axios.get('http://localhost:2001/api/users');
const addUser = (queryParms) => axios.post('http://localhost:2001/api/user', queryParms);
const getUserByEmail = (email) => axios.get('http://localhost:2001/api/user/' + email);
const deleteUserByEmail = (email) => axios.delete('http://localhost:2001/api/user/' + email);
const updateUserByEmail = (email, queryParms) => axios.put('http://localhost:2001/api/user/' + email, queryParms);

module.exports = {
    loginRoutes,
    getAllUsers,
    addUser,
    getUserByEmail,
    deleteUserByEmail,
    updateUserByEmail
}