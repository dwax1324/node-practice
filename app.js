const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const port = process.env.port;

//Import Routes
const postsRoute = require('./routes/posts');


//Middlewares
app.use(cors());
app.use(bodyParser.json())
app.use('/posts', postsRoute);
// app.use('/posts', () => {
//     console.log('this is a middleware');
// })


// ROUTES ( get, delete, patch, post ...)
app.get('/', (req, res) => {
    res.send('we are on home');
})


//Connect to DB
mongoose.connect( process.env.DB_CONNECTION,
    { useUnifiedTopology: true },
    (err) => {
        if (err) console.log(err);
        console.log('DB connected');

})

app.listen(port, ()=> console.log(`server listening on port ${port}`))
