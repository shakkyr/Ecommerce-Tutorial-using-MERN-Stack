const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./database/db')

// middlware
app.use(cors());

connectDB()

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`))