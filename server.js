const express = require('express');

const app = express();

const db =require('./db');
require('dotenv').config();

const bodyParser= require('body-parser');
app.use(bodyParser.json());
const PORT= process.env.PORT || 3000;

const Person=require('./models/Person');
const MenuItem=require('./models/MenuItem');

app.get('/', (req, res) => {
  res.send('welcome to Our Hotel....!!!');
});










const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');


//use routes

app.use('/person', personRoutes);


//use routes

app.use('/menu', menuItemRoutes);




app.listen(PORT,()=>{
    console.log('Server run on 3000 port')
})