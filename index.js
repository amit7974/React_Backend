const express = require('express');
const app = express();
// for get rest-apies
const cors = require('cors');

app.use(cors({
    origin:'*'
}));

// database connection

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/REACT_BACKEND");

const post_route = require('./routes/postRoute');
app.use('/api',post_route);

app.listen(9000,function(){
console.log('Server is running')
});