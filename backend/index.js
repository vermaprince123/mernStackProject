const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
const port = process.env.PORT;



//middlewares
app.use(require('./middlewares/applicationMiddlewares'));

//entery point
app.use('/api', require('./routes/userRoutes'));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});