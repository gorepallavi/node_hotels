const express = require('express');

const app = express();

const db =require('./db');

const bodyParser= require('body-parser');
app.use(bodyParser.json());


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




app.listen(3000,()=>{
    console.log('Server run on 3000 port')
})