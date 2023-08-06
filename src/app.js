const connect = require('./config/db');
const express = require('express');
const apiRouter = require('./routes/index');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

// CONSTANTS
const PORT = process.env.PORT || 3000;




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.json({ message: 'Gutenfy Api v0.1' });
});

app.listen(PORT, () => {
    console.log(`Server Gutenfy running on port ${PORT}`);
});




connect();