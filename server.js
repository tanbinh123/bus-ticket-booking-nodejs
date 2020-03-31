const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const app=express();
const ticketroute=require('./routes/ticket-booking');

app.use(bodyparser.json())
app.use(ticketroute)

mongoose.connect('mongodb://127.0.0.1:27017/ticketManagement',{
    useUnifiedTopology:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useCreateIndex:true
})

var db=mongoose.connection
db.once('open',()=>
{
    console.log("connection successfull")
})

app.use(bodyparser.urlencoded({
    extended:false
}))

const port=process.env.PORT||3000;

app.listen(port,()=>
{
    console.log('port is on at ',port);
})