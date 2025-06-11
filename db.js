const mongoose = require('mongoose');
//define mongodb connection
const mongoURL= 'mongodb://localhost:27017/hotels'


//set a mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlparser:true,
    useUnifiedTopology:true
})


//get the default connection
const db= mongoose.connection;


//define event listeners for database connection
db.on('connected',()=>{
    console.log('connected to MongoDB Server');
});

db.on('error',(err)=>{
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', ()=>{
    console.log('mongoDB Disconnected');
});


//export the database connection
module.exports=db;