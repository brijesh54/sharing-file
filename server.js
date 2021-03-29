const express = require('express');
const app = express();
const connectDatabase = require('./config/db')
const path = require('path')

const dotenv = require('dotenv');
// setting up config file
dotenv.config({path: 'config.env'})

// connect to database
connectDatabase();

// template engine
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs')

app.use(express.static('public'))

app.use(express.json());

// import all router
const files = require('./routes/files');
const show = require('./routes/show');
const dwonload = require('./routes/dwonload');


app.use('/api',files);
app.use('/files',show);
app.use('/files/dwonload',dwonload);



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`)
})