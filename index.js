const path = require('path')
const express = require('express');
const dotenv = require('dotenv').config();

const port = process.env.port || 8000;

const app = express();

// enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// set static folder
app.use(express.static(path.join(__dirname,'public')))

app.use('/openai',require('./routes/openairoutes'))

app.listen(port, () => console.log(`Server listening to port ${port}`))